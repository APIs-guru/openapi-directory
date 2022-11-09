import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateServiceSettingRequest
/** 
 * The request body of the UpdateServiceSetting API operation.
**/
export class UpdateServiceSettingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SettingId" })
  settingId: string;

  @Metadata({ data: "json, name=SettingValue" })
  settingValue: string;
}
