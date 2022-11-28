import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SettingsChangeEntity
/** 
 * List Settings Changes
**/
export class SettingsChangeEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=change_details" })
  changeDetails?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}
