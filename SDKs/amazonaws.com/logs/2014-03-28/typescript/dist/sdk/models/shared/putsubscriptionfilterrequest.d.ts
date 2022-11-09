import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DistributionEnum } from "./distributionenum";
export declare class PutSubscriptionFilterRequest extends SpeakeasyBase {
    destinationArn: string;
    distribution?: DistributionEnum;
    filterName: string;
    filterPattern: string;
    logGroupName: string;
    roleArn?: string;
}
