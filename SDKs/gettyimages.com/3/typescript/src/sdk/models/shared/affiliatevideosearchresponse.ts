import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoCorrections } from "./autocorrections";
import { AffiliateVideo } from "./affiliatevideo";



export class AffiliateVideoSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_corrections" })
  autoCorrections?: AutoCorrections;

  @SpeakeasyMetadata({ data: "json, name=videos", elemType: AffiliateVideo })
  videos?: AffiliateVideo[];
}
