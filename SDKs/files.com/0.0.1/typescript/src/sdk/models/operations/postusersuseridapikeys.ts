import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersUserIdApiKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum PostUsersUserIdApiKeysRequestBodyPermissionSetEnum {
    None = "none"
,    Full = "full"
,    DesktopApp = "desktop_app"
,    SyncApp = "sync_app"
,    OfficeIntegration = "office_integration"
,    MobileApp = "mobile_app"
}


export class PostUsersUserIdApiKeysRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=expires_at" })
  expiresAt?: Date;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=path" })
  path?: string;

  @Metadata({ data: "multipart_form, name=permission_set" })
  permissionSet?: PostUsersUserIdApiKeysRequestBodyPermissionSetEnum;
}


export class PostUsersUserIdApiKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersUserIdApiKeysPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostUsersUserIdApiKeysRequestBody;
}


export class PostUsersUserIdApiKeysResponse extends SpeakeasyBase {
  @Metadata()
  apiKeyEntity?: shared.ApiKeyEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
