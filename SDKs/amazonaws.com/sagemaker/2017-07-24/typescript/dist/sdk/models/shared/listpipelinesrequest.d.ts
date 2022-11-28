import { SpeakeasyBase } from "../../../internal/utils";
import { SortPipelinesByEnum } from "./sortpipelinesbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListPipelinesRequest extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    pipelineNamePrefix?: string;
    sortBy?: SortPipelinesByEnum;
    sortOrder?: SortOrderEnum;
}
