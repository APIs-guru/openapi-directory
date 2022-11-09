import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideoSessionReferrer extends SpeakeasyBase {
  @Metadata({ data: "json, name=medium" })
  medium?: string;

  @Metadata({ data: "json, name=searchTerm" })
  searchTerm?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
