import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
import { ResourceQuotasRemaining } from "./resourcequotasremaining";
/**
 * The main response class which holds the reports from the Reporting API `batchGet` call.
**/
export declare class GetReportsResponse extends SpeakeasyBase {
    queryCost?: number;
    reports?: Report[];
    resourceQuotasRemaining?: ResourceQuotasRemaining;
}
