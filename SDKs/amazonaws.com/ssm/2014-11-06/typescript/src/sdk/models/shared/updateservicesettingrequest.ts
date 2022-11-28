import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateServiceSettingRequest
/** 
 * The request body of the UpdateServiceSetting API operation.
**/
export class UpdateServiceSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SettingId" })
  settingId: string;

  @SpeakeasyMetadata({ data: "json, name=SettingValue" })
  settingValue: string;
}
