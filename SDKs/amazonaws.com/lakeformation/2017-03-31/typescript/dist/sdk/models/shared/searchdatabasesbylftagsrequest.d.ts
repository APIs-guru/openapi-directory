import { SpeakeasyBase } from "../../../internal/utils";
import { LfTag } from "./lftag";
export declare class SearchDatabasesByLfTagsRequest extends SpeakeasyBase {
    catalogId?: string;
    expression: LfTag[];
    maxResults?: number;
    nextToken?: string;
}
