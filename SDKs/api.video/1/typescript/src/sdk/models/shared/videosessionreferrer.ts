import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoSessionReferrer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: string;

  @SpeakeasyMetadata({ data: "json, name=searchTerm" })
  searchTerm?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
