import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationConsolidationConfig } from "./annotationconsolidationconfig";
import { PublicWorkforceTaskPrice } from "./publicworkforcetaskprice";
import { UiConfig } from "./uiconfig";
/**
 * Information required for human workers to complete a labeling task.
**/
export declare class HumanTaskConfig extends SpeakeasyBase {
    annotationConsolidationConfig: AnnotationConsolidationConfig;
    maxConcurrentTaskCount?: number;
    numberOfHumanWorkersPerDataObject: number;
    preHumanTaskLambdaArn: string;
    publicWorkforceTaskPrice?: PublicWorkforceTaskPrice;
    taskAvailabilityLifetimeInSeconds?: number;
    taskDescription: string;
    taskKeywords?: string[];
    taskTimeLimitInSeconds: number;
    taskTitle: string;
    uiConfig: UiConfig;
    workteamArn: string;
}
