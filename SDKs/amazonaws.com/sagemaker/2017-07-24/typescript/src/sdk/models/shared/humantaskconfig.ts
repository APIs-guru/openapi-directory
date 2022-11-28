import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotationConsolidationConfig } from "./annotationconsolidationconfig";
import { PublicWorkforceTaskPrice } from "./publicworkforcetaskprice";
import { UiConfig } from "./uiconfig";



// HumanTaskConfig
/** 
 * Information required for human workers to complete a labeling task.
**/
export class HumanTaskConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnnotationConsolidationConfig" })
  annotationConsolidationConfig: AnnotationConsolidationConfig;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrentTaskCount" })
  maxConcurrentTaskCount?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfHumanWorkersPerDataObject" })
  numberOfHumanWorkersPerDataObject: number;

  @SpeakeasyMetadata({ data: "json, name=PreHumanTaskLambdaArn" })
  preHumanTaskLambdaArn: string;

  @SpeakeasyMetadata({ data: "json, name=PublicWorkforceTaskPrice" })
  publicWorkforceTaskPrice?: PublicWorkforceTaskPrice;

  @SpeakeasyMetadata({ data: "json, name=TaskAvailabilityLifetimeInSeconds" })
  taskAvailabilityLifetimeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=TaskDescription" })
  taskDescription: string;

  @SpeakeasyMetadata({ data: "json, name=TaskKeywords" })
  taskKeywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=TaskTimeLimitInSeconds" })
  taskTimeLimitInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=TaskTitle" })
  taskTitle: string;

  @SpeakeasyMetadata({ data: "json, name=UiConfig" })
  uiConfig: UiConfig;

  @SpeakeasyMetadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
