import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
export declare class GetResourceLfTagsRequest extends SpeakeasyBase {
    catalogId?: string;
    resource: Resource;
    showAssignedLfTags?: boolean;
}
