import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceSetting } from "./servicesetting";


// ResetServiceSettingResult
/** 
 * The result body of the ResetServiceSetting API operation.
**/
export class ResetServiceSettingResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceSetting" })
  serviceSetting?: ServiceSetting;
}
