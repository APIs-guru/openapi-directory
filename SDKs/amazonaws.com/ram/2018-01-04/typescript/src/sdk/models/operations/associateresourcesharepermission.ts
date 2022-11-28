import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssociateResourceSharePermissionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class AssociateResourceSharePermissionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionArn" })
  permissionArn: string;

  @SpeakeasyMetadata({ data: "json, name=permissionVersion" })
  permissionVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=replace" })
  replace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourceShareArn" })
  resourceShareArn: string;
}


export class AssociateResourceSharePermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AssociateResourceSharePermissionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AssociateResourceSharePermissionRequestBody;
}


export class AssociateResourceSharePermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associateResourceSharePermissionResponse?: shared.AssociateResourceSharePermissionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidClientTokenException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  malformedArnException?: any;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  serverInternalException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unknownResourceException?: any;
}
