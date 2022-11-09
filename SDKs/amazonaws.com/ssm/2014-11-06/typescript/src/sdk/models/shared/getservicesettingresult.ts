import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceSetting } from "./servicesetting";


// GetServiceSettingResult
/** 
 * The query result body of the GetServiceSetting API operation.
**/
export class GetServiceSettingResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceSetting" })
  serviceSetting?: ServiceSetting;
}
