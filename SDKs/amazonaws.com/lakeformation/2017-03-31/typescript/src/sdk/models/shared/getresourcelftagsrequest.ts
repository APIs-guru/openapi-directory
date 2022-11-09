import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Resource } from "./resource";


export class GetResourceLfTagsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=Resource" })
  resource: Resource;

  @Metadata({ data: "json, name=ShowAssignedLFTags" })
  showAssignedLfTags?: boolean;
}
