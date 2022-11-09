import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";
import { SortOrderTypeEnum } from "./sortordertypeenum";
export declare class ListSecretsRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
    sortOrder?: SortOrderTypeEnum;
}
