import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchApiKeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PatchApiKeysIdRequestBodyPermissionSetEnum {
    None = "none"
,    Full = "full"
,    DesktopApp = "desktop_app"
,    SyncApp = "sync_app"
,    OfficeIntegration = "office_integration"
,    MobileApp = "mobile_app"
}


export class PatchApiKeysIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=expires_at" })
  expiresAt?: Date;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=permission_set" })
  permissionSet?: PatchApiKeysIdRequestBodyPermissionSetEnum;
}


export class PatchApiKeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchApiKeysIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchApiKeysIdRequestBody;
}


export class PatchApiKeysIdResponse extends SpeakeasyBase {
  @Metadata()
  apiKeyEntity?: shared.ApiKeyEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
