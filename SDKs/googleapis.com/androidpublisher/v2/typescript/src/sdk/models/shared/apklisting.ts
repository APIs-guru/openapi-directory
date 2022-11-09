import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApkListing extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=recentChanges" })
  recentChanges?: string;
}
