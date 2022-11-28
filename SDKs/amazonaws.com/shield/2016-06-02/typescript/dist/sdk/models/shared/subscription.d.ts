import { SpeakeasyBase } from "../../../internal/utils";
import { AutoRenewEnum } from "./autorenewenum";
import { Limit } from "./limit";
import { ProactiveEngagementStatusEnum } from "./proactiveengagementstatusenum";
import { SubscriptionLimits } from "./subscriptionlimits";
/**
 * Information about the Shield Advanced subscription for an account.
**/
export declare class Subscription extends SpeakeasyBase {
    autoRenew?: AutoRenewEnum;
    endTime?: Date;
    limits?: Limit[];
    proactiveEngagementStatus?: ProactiveEngagementStatusEnum;
    startTime?: Date;
    subscriptionArn?: string;
    subscriptionLimits: SubscriptionLimits;
    timeCommitmentInSeconds?: number;
}
