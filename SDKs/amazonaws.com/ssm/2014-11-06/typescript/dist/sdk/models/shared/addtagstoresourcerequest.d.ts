import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeForTaggingEnum } from "./resourcetypefortaggingenum";
import { Tag } from "./tag";
export declare class AddTagsToResourceRequest extends SpeakeasyBase {
    resourceId: string;
    resourceType: ResourceTypeForTaggingEnum;
    tags: Tag[];
}
