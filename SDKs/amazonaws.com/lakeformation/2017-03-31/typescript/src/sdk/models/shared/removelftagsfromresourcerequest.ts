import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LfTagPair } from "./lftagpair";
import { Resource } from "./resource";


export class RemoveLfTagsFromResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=LFTags", elemType: shared.LfTagPair })
  lfTags: LfTagPair[];

  @Metadata({ data: "json, name=Resource" })
  resource: Resource;
}
