import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResetServiceSettingRequest
/** 
 * The request body of the ResetServiceSetting API operation.
**/
export class ResetServiceSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SettingId" })
  settingId: string;
}
