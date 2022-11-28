import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApkListing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=recentChanges" })
  recentChanges?: string;
}
