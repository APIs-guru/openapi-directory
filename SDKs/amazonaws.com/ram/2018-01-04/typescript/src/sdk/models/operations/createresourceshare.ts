import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateResourceShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class CreateResourceShareRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowExternalPrincipals" })
  allowExternalPrincipals?: boolean;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=permissionArns" })
  permissionArns?: string[];

  @Metadata({ data: "json, name=principals" })
  principals?: string[];

  @Metadata({ data: "json, name=resourceArns" })
  resourceArns?: string[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateResourceShareRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateResourceShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateResourceShareRequestBody;
}


export class CreateResourceShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createResourceShareResponse?: shared.CreateResourceShareResponse;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  invalidClientTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidStateTransitionException?: any;

  @Metadata()
  malformedArnException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  resourceShareLimitExceededException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagPolicyViolationException?: any;

  @Metadata()
  unknownResourceException?: any;
}
