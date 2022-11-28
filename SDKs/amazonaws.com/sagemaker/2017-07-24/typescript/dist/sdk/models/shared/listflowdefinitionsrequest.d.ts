import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListFlowDefinitionsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    sortOrder?: SortOrderEnum;
}
