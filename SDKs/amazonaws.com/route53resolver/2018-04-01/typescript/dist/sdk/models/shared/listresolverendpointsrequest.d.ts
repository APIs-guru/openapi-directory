import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListResolverEndpointsRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
}
