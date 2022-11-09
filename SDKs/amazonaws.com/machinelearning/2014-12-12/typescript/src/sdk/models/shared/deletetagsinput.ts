import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaggableResourceTypeEnum } from "./taggableresourcetypeenum";


export class DeleteTagsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: TaggableResourceTypeEnum;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
