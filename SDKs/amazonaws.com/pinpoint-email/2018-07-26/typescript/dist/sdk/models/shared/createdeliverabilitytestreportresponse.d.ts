import { SpeakeasyBase } from "../../../internal/utils";
import { DeliverabilityTestStatusEnum } from "./deliverabilityteststatusenum";
/**
 * Information about the predictive inbox placement test that you created.
**/
export declare class CreateDeliverabilityTestReportResponse extends SpeakeasyBase {
    deliverabilityTestStatus: DeliverabilityTestStatusEnum;
    reportId: string;
}
