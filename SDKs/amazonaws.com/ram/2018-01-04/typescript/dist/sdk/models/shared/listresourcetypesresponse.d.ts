import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceNameAndResourceType } from "./servicenameandresourcetype";
export declare class ListResourceTypesResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceTypes?: ServiceNameAndResourceType[];
}
