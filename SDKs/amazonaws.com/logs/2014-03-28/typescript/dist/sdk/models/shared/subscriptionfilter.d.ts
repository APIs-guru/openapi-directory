import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DistributionEnum } from "./distributionenum";
/**
 * Represents a subscription filter.
**/
export declare class SubscriptionFilter extends SpeakeasyBase {
    creationTime?: number;
    destinationArn?: string;
    distribution?: DistributionEnum;
    filterName?: string;
    filterPattern?: string;
    logGroupName?: string;
    roleArn?: string;
}
