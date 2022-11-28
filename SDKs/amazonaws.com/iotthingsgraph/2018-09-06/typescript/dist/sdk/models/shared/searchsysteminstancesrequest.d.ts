import { SpeakeasyBase } from "../../../internal/utils";
import { SystemInstanceFilter } from "./systeminstancefilter";
export declare class SearchSystemInstancesRequest extends SpeakeasyBase {
    filters?: SystemInstanceFilter[];
    maxResults?: number;
    nextToken?: string;
}
