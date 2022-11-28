import { SpeakeasyBase } from "../../../internal/utils";
import { EntityDescription } from "./entitydescription";
export declare class SearchEntitiesResponse extends SpeakeasyBase {
    descriptions?: EntityDescription[];
    nextToken?: string;
}
