import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssociateResourceShareHeaders extends SpeakeasyBase {
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


export class AssociateResourceShareRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=principals" })
  principals?: string[];

  @Metadata({ data: "json, name=resourceArns" })
  resourceArns?: string[];

  @Metadata({ data: "json, name=resourceShareArn" })
  resourceShareArn: string;
}


export class AssociateResourceShareRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateResourceShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssociateResourceShareRequestBody;
}


export class AssociateResourceShareResponse extends SpeakeasyBase {
  @Metadata()
  associateResourceShareResponse?: shared.AssociateResourceShareResponse;

  @Metadata()
  contentType: string;

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
  unknownResourceException?: any;
}
