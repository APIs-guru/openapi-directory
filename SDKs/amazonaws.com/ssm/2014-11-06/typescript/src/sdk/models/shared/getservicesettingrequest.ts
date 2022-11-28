import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetServiceSettingRequest
/** 
 * The request body of the GetServiceSetting API operation.
**/
export class GetServiceSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SettingId" })
  settingId: string;
}
