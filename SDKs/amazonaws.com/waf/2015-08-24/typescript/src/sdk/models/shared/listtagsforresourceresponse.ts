import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagInfoForResource } from "./taginfoforresource";



export class ListTagsForResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=TagInfoForResource" })
  tagInfoForResource?: TagInfoForResource;
}
