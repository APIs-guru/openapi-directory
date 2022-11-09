import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeForTaggingEnum } from "./resourcetypefortaggingenum";


export class RemoveTagsFromResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: ResourceTypeForTaggingEnum;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
