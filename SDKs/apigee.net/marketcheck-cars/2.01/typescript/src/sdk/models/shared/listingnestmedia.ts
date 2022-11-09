import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListingNestMedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=photo_links" })
  photoLinks?: string[];
}
