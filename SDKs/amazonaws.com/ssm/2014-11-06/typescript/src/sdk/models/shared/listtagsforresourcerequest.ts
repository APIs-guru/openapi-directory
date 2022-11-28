import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeForTaggingEnum } from "./resourcetypefortaggingenum";



export class ListTagsForResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: ResourceTypeForTaggingEnum;
}
