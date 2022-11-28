import { SpeakeasyBase } from "../../../internal/utils";
import { FilterCondition } from "./filtercondition";
export declare class ListResourcesRequest extends SpeakeasyBase {
    filterConditionList?: FilterCondition[];
    maxResults?: number;
    nextToken?: string;
}
