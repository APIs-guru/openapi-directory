import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TaggableResourceTypeEnum } from "./taggableresourcetypeenum";
import { Tag } from "./tag";
export declare class AddTagsInput extends SpeakeasyBase {
    resourceId: string;
    resourceType: TaggableResourceTypeEnum;
    tags: Tag[];
}
