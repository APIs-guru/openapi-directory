import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaggableResourceTypeEnum } from "./taggableresourcetypeenum";



export class DeleteTagsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: TaggableResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
