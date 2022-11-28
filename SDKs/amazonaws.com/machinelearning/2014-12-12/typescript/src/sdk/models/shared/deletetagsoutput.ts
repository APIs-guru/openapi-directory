import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaggableResourceTypeEnum } from "./taggableresourcetypeenum";



// DeleteTagsOutput
/** 
 * Amazon ML returns the following elements.
**/
export class DeleteTagsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: TaggableResourceTypeEnum;
}
