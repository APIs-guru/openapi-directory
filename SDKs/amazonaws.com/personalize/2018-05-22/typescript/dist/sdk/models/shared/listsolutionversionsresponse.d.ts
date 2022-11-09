import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SolutionVersionSummary } from "./solutionversionsummary";
export declare class ListSolutionVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    solutionVersions?: SolutionVersionSummary[];
}
