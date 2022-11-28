import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchApiKeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PatchApiKeysIdRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}


export class PatchApiKeysIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=permission_set" })
  permissionSet?: PatchApiKeysIdRequestBodyPermissionSetEnum;
}


export class PatchApiKeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchApiKeysIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchApiKeysIdRequestBody;
}


export class PatchApiKeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyEntity?: shared.ApiKeyEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
