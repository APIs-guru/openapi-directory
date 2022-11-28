import { SpeakeasyBase } from "../../../internal/utils";
import { MediationReportSpec } from "./mediationreportspec";
/**
 * Request to generate an AdMob mediation report.
**/
export declare class GenerateMediationReportRequest extends SpeakeasyBase {
    reportSpec?: MediationReportSpec;
}
