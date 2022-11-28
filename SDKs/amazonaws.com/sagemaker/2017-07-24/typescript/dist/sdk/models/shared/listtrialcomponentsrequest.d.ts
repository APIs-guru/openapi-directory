import { SpeakeasyBase } from "../../../internal/utils";
import { SortTrialComponentsByEnum } from "./sorttrialcomponentsbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListTrialComponentsRequest extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    experimentName?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SortTrialComponentsByEnum;
    sortOrder?: SortOrderEnum;
    sourceArn?: string;
    trialName?: string;
}
