import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TagInfoForResource } from "./taginfoforresource";


export class ListTagsForResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=TagInfoForResource" })
  tagInfoForResource?: TagInfoForResource;
}
