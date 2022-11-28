import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LfTagPair } from "./lftagpair";
import { Resource } from "./resource";



export class RemoveLfTagsFromResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=LFTags", elemType: LfTagPair })
  lfTags: LfTagPair[];

  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource: Resource;
}
