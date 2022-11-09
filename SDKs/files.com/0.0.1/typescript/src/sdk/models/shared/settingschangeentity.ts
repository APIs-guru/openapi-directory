import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SettingsChangeEntity
/** 
 * List Settings Changes
**/
export class SettingsChangeEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=change_details" })
  changeDetails?: Map<string, any>;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;
}
