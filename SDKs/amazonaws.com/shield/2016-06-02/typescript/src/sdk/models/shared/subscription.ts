import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoRenewEnum } from "./autorenewenum";
import { Limit } from "./limit";
import { ProactiveEngagementStatusEnum } from "./proactiveengagementstatusenum";
import { SubscriptionLimits } from "./subscriptionlimits";


// Subscription
/** 
 * Information about the Shield Advanced subscription for an account.
**/
export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoRenew" })
  autoRenew?: AutoRenewEnum;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=Limits", elemType: shared.Limit })
  limits?: Limit[];

  @Metadata({ data: "json, name=ProactiveEngagementStatus" })
  proactiveEngagementStatus?: ProactiveEngagementStatusEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=SubscriptionArn" })
  subscriptionArn?: string;

  @Metadata({ data: "json, name=SubscriptionLimits" })
  subscriptionLimits: SubscriptionLimits;

  @Metadata({ data: "json, name=TimeCommitmentInSeconds" })
  timeCommitmentInSeconds?: number;
}
