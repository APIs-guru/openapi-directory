import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicWorkforceTaskPrice } from "./publicworkforcetaskprice";


// HumanLoopConfig
/** 
 * Describes the work to be performed by human workers.
**/
export class HumanLoopConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanTaskUiArn" })
  humanTaskUiArn: string;

  @Metadata({ data: "json, name=PublicWorkforceTaskPrice" })
  publicWorkforceTaskPrice?: PublicWorkforceTaskPrice;

  @Metadata({ data: "json, name=TaskAvailabilityLifetimeInSeconds" })
  taskAvailabilityLifetimeInSeconds?: number;

  @Metadata({ data: "json, name=TaskCount" })
  taskCount: number;

  @Metadata({ data: "json, name=TaskDescription" })
  taskDescription: string;

  @Metadata({ data: "json, name=TaskKeywords" })
  taskKeywords?: string[];

  @Metadata({ data: "json, name=TaskTimeLimitInSeconds" })
  taskTimeLimitInSeconds?: number;

  @Metadata({ data: "json, name=TaskTitle" })
  taskTitle: string;

  @Metadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
