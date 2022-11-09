import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssociateResourceSharePermissionHeaders extends SpeakeasyBase {
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


export class AssociateResourceSharePermissionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=permissionArn" })
  permissionArn: string;

  @Metadata({ data: "json, name=permissionVersion" })
  permissionVersion?: number;

  @Metadata({ data: "json, name=replace" })
  replace?: boolean;

  @Metadata({ data: "json, name=resourceShareArn" })
  resourceShareArn: string;
}


export class AssociateResourceSharePermissionRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateResourceSharePermissionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AssociateResourceSharePermissionRequestBody;
}


export class AssociateResourceSharePermissionResponse extends SpeakeasyBase {
  @Metadata()
  associateResourceSharePermissionResponse?: shared.AssociateResourceSharePermissionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidClientTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  malformedArnException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceException?: any;
}
