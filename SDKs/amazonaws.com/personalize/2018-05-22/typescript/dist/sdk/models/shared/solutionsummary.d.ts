import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides a summary of the properties of a solution. For a complete listing, call the <a>DescribeSolution</a> API.
**/
export declare class SolutionSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    lastUpdatedDateTime?: Date;
    name?: string;
    solutionArn?: string;
    status?: string;
}
