import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetServiceSettingRequest
/** 
 * The request body of the GetServiceSetting API operation.
**/
export class GetServiceSettingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SettingId" })
  settingId: string;
}
