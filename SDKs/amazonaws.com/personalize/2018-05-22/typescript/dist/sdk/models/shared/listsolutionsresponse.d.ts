import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SolutionSummary } from "./solutionsummary";
export declare class ListSolutionsResponse extends SpeakeasyBase {
    nextToken?: string;
    solutions?: SolutionSummary[];
}
