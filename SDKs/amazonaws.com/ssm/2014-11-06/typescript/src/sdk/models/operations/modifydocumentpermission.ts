import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifyDocumentPermissionXAmzTargetEnum {
    AmazonSsmModifyDocumentPermission = "AmazonSSM.ModifyDocumentPermission"
}


export class ModifyDocumentPermissionHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ModifyDocumentPermissionXAmzTargetEnum;
}


export class ModifyDocumentPermissionRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifyDocumentPermissionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifyDocumentPermissionRequest;
}


export class ModifyDocumentPermissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  documentLimitExceeded?: any;

  @Metadata()
  documentPermissionLimit?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidDocument?: any;

  @Metadata()
  invalidPermissionType?: any;

  @Metadata()
  modifyDocumentPermissionResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
