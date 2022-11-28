import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Listing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullDescription" })
  fullDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=video" })
  video?: string;
}
