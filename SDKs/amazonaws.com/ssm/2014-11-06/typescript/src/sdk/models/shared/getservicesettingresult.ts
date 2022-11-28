import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceSetting } from "./servicesetting";



// GetServiceSettingResult
/** 
 * The query result body of the GetServiceSetting API operation.
**/
export class GetServiceSettingResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceSetting" })
  serviceSetting?: ServiceSetting;
}
