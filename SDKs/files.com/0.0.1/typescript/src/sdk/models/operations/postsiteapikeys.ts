import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostSiteApiKeysRequestBodyPermissionSetEnum {
    None = "none"
,    Full = "full"
,    DesktopApp = "desktop_app"
,    SyncApp = "sync_app"
,    OfficeIntegration = "office_integration"
,    MobileApp = "mobile_app"
}


export class PostSiteApiKeysRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=expires_at" })
  expiresAt?: Date;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=path" })
  path?: string;

  @Metadata({ data: "multipart_form, name=permission_set" })
  permissionSet?: PostSiteApiKeysRequestBodyPermissionSetEnum;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostSiteApiKeysRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostSiteApiKeysRequestBody;
}


export class PostSiteApiKeysResponse extends SpeakeasyBase {
  @Metadata()
  apiKeyEntity?: shared.ApiKeyEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
