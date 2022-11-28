import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaggableResourceTypeEnum } from "./taggableresourcetypeenum";
import { Tag } from "./tag";



// DescribeTagsOutput
/** 
 * Amazon ML returns the following elements.
**/
export class DescribeTagsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: TaggableResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
