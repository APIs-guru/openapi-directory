import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoRenewEnum } from "./autorenewenum";
import { Limit } from "./limit";
import { ProactiveEngagementStatusEnum } from "./proactiveengagementstatusenum";
import { SubscriptionLimits } from "./subscriptionlimits";



// Subscription
/** 
 * Information about the Shield Advanced subscription for an account.
**/
export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoRenew" })
  autoRenew?: AutoRenewEnum;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Limits", elemType: Limit })
  limits?: Limit[];

  @SpeakeasyMetadata({ data: "json, name=ProactiveEngagementStatus" })
  proactiveEngagementStatus?: ProactiveEngagementStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionArn" })
  subscriptionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionLimits" })
  subscriptionLimits: SubscriptionLimits;

  @SpeakeasyMetadata({ data: "json, name=TimeCommitmentInSeconds" })
  timeCommitmentInSeconds?: number;
}
