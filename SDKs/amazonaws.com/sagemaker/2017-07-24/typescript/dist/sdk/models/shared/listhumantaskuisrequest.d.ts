import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListHumanTaskUisRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    sortOrder?: SortOrderEnum;
}
