import { SpeakeasyBase } from "../../../internal/utils";
import { DeliverabilityTestReport } from "./deliverabilitytestreport";
/**
 * A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.
**/
export declare class ListDeliverabilityTestReportsResponse extends SpeakeasyBase {
    deliverabilityTestReports: DeliverabilityTestReport[];
    nextToken?: string;
}
