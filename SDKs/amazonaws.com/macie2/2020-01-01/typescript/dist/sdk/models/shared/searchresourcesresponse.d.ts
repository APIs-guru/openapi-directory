import { SpeakeasyBase } from "../../../internal/utils";
import { MatchingResource } from "./matchingresource";
export declare class SearchResourcesResponse extends SpeakeasyBase {
    matchingResources?: MatchingResource[];
    nextToken?: string;
}
