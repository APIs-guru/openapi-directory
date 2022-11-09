import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessLevelFilter } from "./accesslevelfilter";
import { ListRecordHistorySearchFilter } from "./listrecordhistorysearchfilter";
export declare class ListRecordHistoryInput extends SpeakeasyBase {
    acceptLanguage?: string;
    accessLevelFilter?: AccessLevelFilter;
    pageSize?: number;
    pageToken?: string;
    searchFilter?: ListRecordHistorySearchFilter;
}
