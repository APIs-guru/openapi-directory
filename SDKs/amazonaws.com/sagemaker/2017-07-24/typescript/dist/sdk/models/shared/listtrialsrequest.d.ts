import { SpeakeasyBase } from "../../../internal/utils";
import { SortTrialsByEnum } from "./sorttrialsbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListTrialsRequest extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    experimentName?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SortTrialsByEnum;
    sortOrder?: SortOrderEnum;
    trialComponentName?: string;
}
