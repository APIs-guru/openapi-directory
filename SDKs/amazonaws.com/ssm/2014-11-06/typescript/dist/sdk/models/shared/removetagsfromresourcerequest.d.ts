import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeForTaggingEnum } from "./resourcetypefortaggingenum";
export declare class RemoveTagsFromResourceRequest extends SpeakeasyBase {
    resourceId: string;
    resourceType: ResourceTypeForTaggingEnum;
    tagKeys: string[];
}
