import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkReportSpec } from "./networkreportspec";


// GenerateNetworkReportRequest
/** 
 * Request to generate an AdMob Network report.
**/
export class GenerateNetworkReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportSpec" })
  reportSpec?: NetworkReportSpec;
}
