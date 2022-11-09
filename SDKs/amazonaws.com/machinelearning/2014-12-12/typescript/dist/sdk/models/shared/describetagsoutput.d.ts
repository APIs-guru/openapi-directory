import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TaggableResourceTypeEnum } from "./taggableresourcetypeenum";
import { Tag } from "./tag";
/**
 * Amazon ML returns the following elements.
**/
export declare class DescribeTagsOutput extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: TaggableResourceTypeEnum;
    tags?: Tag[];
}
