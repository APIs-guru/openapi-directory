import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicWorkforceTaskPrice } from "./publicworkforcetaskprice";



// HumanLoopConfig
/** 
 * Describes the work to be performed by human workers.
**/
export class HumanLoopConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiArn" })
  humanTaskUiArn: string;

  @SpeakeasyMetadata({ data: "json, name=PublicWorkforceTaskPrice" })
  publicWorkforceTaskPrice?: PublicWorkforceTaskPrice;

  @SpeakeasyMetadata({ data: "json, name=TaskAvailabilityLifetimeInSeconds" })
  taskAvailabilityLifetimeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=TaskCount" })
  taskCount: number;

  @SpeakeasyMetadata({ data: "json, name=TaskDescription" })
  taskDescription: string;

  @SpeakeasyMetadata({ data: "json, name=TaskKeywords" })
  taskKeywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=TaskTimeLimitInSeconds" })
  taskTimeLimitInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=TaskTitle" })
  taskTitle: string;

  @SpeakeasyMetadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
