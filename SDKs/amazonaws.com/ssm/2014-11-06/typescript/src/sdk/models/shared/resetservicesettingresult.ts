import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceSetting } from "./servicesetting";



// ResetServiceSettingResult
/** 
 * The result body of the ResetServiceSetting API operation.
**/
export class ResetServiceSettingResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceSetting" })
  serviceSetting?: ServiceSetting;
}
