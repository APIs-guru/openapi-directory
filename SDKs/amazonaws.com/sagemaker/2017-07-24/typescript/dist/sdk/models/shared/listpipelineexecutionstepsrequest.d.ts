import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListPipelineExecutionStepsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    pipelineExecutionArn?: string;
    sortOrder?: SortOrderEnum;
}
