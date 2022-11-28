import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiKeyEntityPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}


// ApiKeyEntity
/** 
 * List Api Keys
**/
export class ApiKeyEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=descriptive_label" })
  descriptiveLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=last_use_at" })
  lastUseAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=permission_set" })
  permissionSet?: ApiKeyEntityPermissionSetEnum;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}
