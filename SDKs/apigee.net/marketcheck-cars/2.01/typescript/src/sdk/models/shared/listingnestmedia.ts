import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListingNestMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=photo_links" })
  photoLinks?: string[];
}
