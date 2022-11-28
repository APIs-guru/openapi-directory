import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ModifyDocumentPermissionXAmzTargetEnum {
    AmazonSsmModifyDocumentPermission = "AmazonSSM.ModifyDocumentPermission"
}


export class ModifyDocumentPermissionHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ModifyDocumentPermissionXAmzTargetEnum;
}


export class ModifyDocumentPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ModifyDocumentPermissionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ModifyDocumentPermissionRequest;
}


export class ModifyDocumentPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentLimitExceeded?: any;

  @SpeakeasyMetadata()
  documentPermissionLimit?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidDocument?: any;

  @SpeakeasyMetadata()
  invalidPermissionType?: any;

  @SpeakeasyMetadata()
  modifyDocumentPermissionResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
