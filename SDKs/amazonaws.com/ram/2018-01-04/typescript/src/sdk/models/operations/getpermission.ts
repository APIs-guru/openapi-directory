import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPermissionHeaders extends SpeakeasyBase {
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


export class GetPermissionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissionArn" })
  permissionArn: string;

  @Metadata({ data: "json, name=permissionVersion" })
  permissionVersion?: number;
}


export class GetPermissionRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPermissionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetPermissionRequestBody;
}


export class GetPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPermissionResponse?: shared.GetPermissionResponse;

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
