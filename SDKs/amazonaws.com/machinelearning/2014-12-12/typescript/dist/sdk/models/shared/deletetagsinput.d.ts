import { SpeakeasyBase } from "../../../internal/utils";
import { TaggableResourceTypeEnum } from "./taggableresourcetypeenum";
export declare class DeleteTagsInput extends SpeakeasyBase {
    resourceId: string;
    resourceType: TaggableResourceTypeEnum;
    tagKeys: string[];
}
