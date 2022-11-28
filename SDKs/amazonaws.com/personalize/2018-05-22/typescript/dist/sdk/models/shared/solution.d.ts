import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlResult } from "./automlresult";
import { SolutionVersionSummary } from "./solutionversionsummary";
import { SolutionConfig } from "./solutionconfig";
/**
 * An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.
**/
export declare class Solution extends SpeakeasyBase {
    autoMlResult?: AutoMlResult;
    creationDateTime?: Date;
    datasetGroupArn?: string;
    eventType?: string;
    lastUpdatedDateTime?: Date;
    latestSolutionVersion?: SolutionVersionSummary;
    name?: string;
    performAutoMl?: boolean;
    performHpo?: boolean;
    recipeArn?: string;
    solutionArn?: string;
    solutionConfig?: SolutionConfig;
    status?: string;
}
