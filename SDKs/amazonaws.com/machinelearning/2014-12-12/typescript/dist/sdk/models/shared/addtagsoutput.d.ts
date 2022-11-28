import { SpeakeasyBase } from "../../../internal/utils";
import { TaggableResourceTypeEnum } from "./taggableresourcetypeenum";
/**
 * Amazon ML returns the following elements.
**/
export declare class AddTagsOutput extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: TaggableResourceTypeEnum;
}
