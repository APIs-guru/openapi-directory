import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemRelatedItemsFilter } from "./opsitemrelateditemsfilter";
export declare class ListOpsItemRelatedItemsRequest extends SpeakeasyBase {
    filters?: OpsItemRelatedItemsFilter[];
    maxResults?: number;
    nextToken?: string;
    opsItemId?: string;
}
