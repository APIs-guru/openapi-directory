import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListingMedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=photo_links" })
  photoLinks?: string[];

  @Metadata({ data: "json, name=photo_url" })
  photoUrl?: string;
}
