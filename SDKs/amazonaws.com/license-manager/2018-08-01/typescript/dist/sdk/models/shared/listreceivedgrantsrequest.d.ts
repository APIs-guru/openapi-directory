import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListReceivedGrantsRequest extends SpeakeasyBase {
    filters?: Filter[];
    grantArns?: string[];
    maxResults?: number;
    nextToken?: string;
}
