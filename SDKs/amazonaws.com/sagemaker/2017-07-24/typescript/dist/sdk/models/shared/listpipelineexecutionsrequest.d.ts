import { SpeakeasyBase } from "../../../internal/utils";
import { SortPipelineExecutionsByEnum } from "./sortpipelineexecutionsbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListPipelineExecutionsRequest extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    pipelineName: string;
    sortBy?: SortPipelineExecutionsByEnum;
    sortOrder?: SortOrderEnum;
}
