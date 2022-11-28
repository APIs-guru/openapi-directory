import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
export declare class ListResourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    resources?: Resource[];
}
