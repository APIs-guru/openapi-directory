import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkReportSpec } from "./networkreportspec";



// GenerateNetworkReportRequest
/** 
 * Request to generate an AdMob Network report.
**/
export class GenerateNetworkReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportSpec" })
  reportSpec?: NetworkReportSpec;
}
