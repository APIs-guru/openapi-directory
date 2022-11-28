import { SpeakeasyBase } from "../../../internal/utils";
import { SearchRecord } from "./searchrecord";
export declare class SearchResponse extends SpeakeasyBase {
    nextToken?: string;
    results?: SearchRecord[];
}
