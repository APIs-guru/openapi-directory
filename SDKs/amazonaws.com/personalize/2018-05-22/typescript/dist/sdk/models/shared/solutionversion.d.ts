import { SpeakeasyBase } from "../../../internal/utils";
import { SolutionConfig } from "./solutionconfig";
import { TrainingModeEnum } from "./trainingmodeenum";
import { TunedHpoParams } from "./tunedhpoparams";
/**
 * An object that provides information about a specific version of a <a>Solution</a>.
**/
export declare class SolutionVersion extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetGroupArn?: string;
    eventType?: string;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    performAutoMl?: boolean;
    performHpo?: boolean;
    recipeArn?: string;
    solutionArn?: string;
    solutionConfig?: SolutionConfig;
    solutionVersionArn?: string;
    status?: string;
    trainingHours?: number;
    trainingMode?: TrainingModeEnum;
    tunedHpoParams?: TunedHpoParams;
}
