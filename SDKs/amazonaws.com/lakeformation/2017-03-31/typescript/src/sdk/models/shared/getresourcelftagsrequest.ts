import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";



export class GetResourceLfTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource: Resource;

  @SpeakeasyMetadata({ data: "json, name=ShowAssignedLFTags" })
  showAssignedLfTags?: boolean;
}
