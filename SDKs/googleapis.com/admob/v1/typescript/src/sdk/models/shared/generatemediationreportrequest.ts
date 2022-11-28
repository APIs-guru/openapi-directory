import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediationReportSpec } from "./mediationreportspec";



// GenerateMediationReportRequest
/** 
 * Request to generate an AdMob mediation report.
**/
export class GenerateMediationReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportSpec" })
  reportSpec?: MediationReportSpec;
}
