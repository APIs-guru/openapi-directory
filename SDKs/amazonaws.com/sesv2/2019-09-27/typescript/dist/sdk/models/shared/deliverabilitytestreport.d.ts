import { SpeakeasyBase } from "../../../internal/utils";
import { DeliverabilityTestStatusEnum } from "./deliverabilityteststatusenum";
/**
 * An object that contains metadata related to a predictive inbox placement test.
**/
export declare class DeliverabilityTestReport extends SpeakeasyBase {
    createDate?: Date;
    deliverabilityTestStatus?: DeliverabilityTestStatusEnum;
    fromEmailAddress?: string;
    reportId?: string;
    reportName?: string;
    subject?: string;
}
