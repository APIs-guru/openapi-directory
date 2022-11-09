import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeForTaggingEnum } from "./resourcetypefortaggingenum";


export class ListTagsForResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: ResourceTypeForTaggingEnum;
}
