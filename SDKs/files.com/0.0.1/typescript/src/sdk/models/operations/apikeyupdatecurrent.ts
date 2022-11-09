import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ApiKeyUpdateCurrentRequestBodyPermissionSetEnum {
    None = "none"
,    Full = "full"
,    DesktopApp = "desktop_app"
,    SyncApp = "sync_app"
,    OfficeIntegration = "office_integration"
,    MobileApp = "mobile_app"
}


export class ApiKeyUpdateCurrentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=expires_at" })
  expiresAt?: Date;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=permission_set" })
  permissionSet?: ApiKeyUpdateCurrentRequestBodyPermissionSetEnum;
}


export class ApiKeyUpdateCurrentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: ApiKeyUpdateCurrentRequestBody;
}


export class ApiKeyUpdateCurrentResponse extends SpeakeasyBase {
  @Metadata()
  apiKeyEntity?: shared.ApiKeyEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
