import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnnotationConsolidationConfig } from "./annotationconsolidationconfig";
import { PublicWorkforceTaskPrice } from "./publicworkforcetaskprice";
import { UiConfig } from "./uiconfig";


// HumanTaskConfig
/** 
 * Information required for human workers to complete a labeling task.
**/
export class HumanTaskConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnnotationConsolidationConfig" })
  annotationConsolidationConfig: AnnotationConsolidationConfig;

  @Metadata({ data: "json, name=MaxConcurrentTaskCount" })
  maxConcurrentTaskCount?: number;

  @Metadata({ data: "json, name=NumberOfHumanWorkersPerDataObject" })
  numberOfHumanWorkersPerDataObject: number;

  @Metadata({ data: "json, name=PreHumanTaskLambdaArn" })
  preHumanTaskLambdaArn: string;

  @Metadata({ data: "json, name=PublicWorkforceTaskPrice" })
  publicWorkforceTaskPrice?: PublicWorkforceTaskPrice;

  @Metadata({ data: "json, name=TaskAvailabilityLifetimeInSeconds" })
  taskAvailabilityLifetimeInSeconds?: number;

  @Metadata({ data: "json, name=TaskDescription" })
  taskDescription: string;

  @Metadata({ data: "json, name=TaskKeywords" })
  taskKeywords?: string[];

  @Metadata({ data: "json, name=TaskTimeLimitInSeconds" })
  taskTimeLimitInSeconds: number;

  @Metadata({ data: "json, name=TaskTitle" })
  taskTitle: string;

  @Metadata({ data: "json, name=UiConfig" })
  uiConfig: UiConfig;

  @Metadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
