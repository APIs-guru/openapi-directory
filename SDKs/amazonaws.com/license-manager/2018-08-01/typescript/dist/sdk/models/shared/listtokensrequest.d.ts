import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListTokensRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
    tokenIds?: string[];
}
