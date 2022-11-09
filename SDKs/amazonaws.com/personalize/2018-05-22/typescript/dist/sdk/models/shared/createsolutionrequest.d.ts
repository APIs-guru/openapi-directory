import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SolutionConfig } from "./solutionconfig";
export declare class CreateSolutionRequest extends SpeakeasyBase {
    datasetGroupArn: string;
    eventType?: string;
    name: string;
    performAutoMl?: boolean;
    performHpo?: boolean;
    recipeArn?: string;
    solutionConfig?: SolutionConfig;
}
