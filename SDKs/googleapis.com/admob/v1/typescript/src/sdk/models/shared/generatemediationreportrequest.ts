import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MediationReportSpec } from "./mediationreportspec";


// GenerateMediationReportRequest
/** 
 * Request to generate an AdMob Mediation report.
**/
export class GenerateMediationReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportSpec" })
  reportSpec?: MediationReportSpec;
}
