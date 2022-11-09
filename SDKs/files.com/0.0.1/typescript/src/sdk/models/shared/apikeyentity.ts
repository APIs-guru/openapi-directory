import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiKeyEntityPermissionSetEnum {
    None = "none"
,    Full = "full"
,    DesktopApp = "desktop_app"
,    SyncApp = "sync_app"
,    OfficeIntegration = "office_integration"
,    MobileApp = "mobile_app"
}


// ApiKeyEntity
/** 
 * List Api Keys
**/
export class ApiKeyEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=descriptive_label" })
  descriptiveLabel?: string;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=last_use_at" })
  lastUseAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=permission_set" })
  permissionSet?: ApiKeyEntityPermissionSetEnum;

  @Metadata({ data: "json, name=platform" })
  platform?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}
