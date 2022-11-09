import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaggableResourceTypeEnum } from "./taggableresourcetypeenum";


// DeleteTagsOutput
/** 
 * Amazon ML returns the following elements.
**/
export class DeleteTagsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: TaggableResourceTypeEnum;
}
