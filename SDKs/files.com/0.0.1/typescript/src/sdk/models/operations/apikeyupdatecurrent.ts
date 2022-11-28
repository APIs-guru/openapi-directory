import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ApiKeyUpdateCurrentRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}


export class ApiKeyUpdateCurrentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=permission_set" })
  permissionSet?: ApiKeyUpdateCurrentRequestBodyPermissionSetEnum;
}


export class ApiKeyUpdateCurrentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: ApiKeyUpdateCurrentRequestBody;
}


export class ApiKeyUpdateCurrentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyEntity?: shared.ApiKeyEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
