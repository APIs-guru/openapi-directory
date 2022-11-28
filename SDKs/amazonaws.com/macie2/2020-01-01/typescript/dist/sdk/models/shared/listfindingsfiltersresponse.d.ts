import { SpeakeasyBase } from "../../../internal/utils";
import { FindingsFilterListItem } from "./findingsfilterlistitem";
export declare class ListFindingsFiltersResponse extends SpeakeasyBase {
    findingsFilterListItems?: FindingsFilterListItem[];
    nextToken?: string;
}
