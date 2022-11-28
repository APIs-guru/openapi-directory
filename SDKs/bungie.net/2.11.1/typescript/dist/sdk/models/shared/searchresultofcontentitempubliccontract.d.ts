import { SpeakeasyBase } from "../../../internal/utils";
import { QueriesPagedQuery } from "./queriespagedquery";
import { ContentContentItemPublicContract } from "./contentcontentitempubliccontract";
export declare class SearchResultOfContentItemPublicContract extends SpeakeasyBase {
    hasMore?: boolean;
    query?: QueriesPagedQuery;
    replacementContinuationToken?: string;
    results?: ContentContentItemPublicContract[];
    totalResults?: number;
    useTotalResults?: boolean;
}
