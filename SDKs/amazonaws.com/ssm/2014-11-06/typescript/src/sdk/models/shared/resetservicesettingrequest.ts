import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResetServiceSettingRequest
/** 
 * The request body of the ResetServiceSetting API operation.
**/
export class ResetServiceSettingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SettingId" })
  settingId: string;
}
