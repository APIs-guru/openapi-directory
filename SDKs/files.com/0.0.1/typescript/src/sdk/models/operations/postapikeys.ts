import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostApiKeysRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}


export class PostApiKeysRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=permission_set" })
  permissionSet?: PostApiKeysRequestBodyPermissionSetEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostApiKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostApiKeysRequestBody;
}


export class PostApiKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyEntity?: shared.ApiKeyEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
