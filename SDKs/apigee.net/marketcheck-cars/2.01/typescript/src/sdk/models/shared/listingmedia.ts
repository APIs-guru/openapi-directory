import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListingMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=photo_links" })
  photoLinks?: string[];

  @SpeakeasyMetadata({ data: "json, name=photo_url" })
  photoUrl?: string;
}
