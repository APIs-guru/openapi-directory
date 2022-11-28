import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersUserIdApiKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum PostUsersUserIdApiKeysRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}


export class PostUsersUserIdApiKeysRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=permission_set" })
  permissionSet?: PostUsersUserIdApiKeysRequestBodyPermissionSetEnum;
}


export class PostUsersUserIdApiKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersUserIdApiKeysPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostUsersUserIdApiKeysRequestBody;
}


export class PostUsersUserIdApiKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyEntity?: shared.ApiKeyEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
