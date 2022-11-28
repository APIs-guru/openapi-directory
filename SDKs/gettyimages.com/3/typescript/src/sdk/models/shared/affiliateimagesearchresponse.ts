import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoCorrections } from "./autocorrections";
import { AffiliateImage } from "./affiliateimage";



export class AffiliateImageSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_corrections" })
  autoCorrections?: AutoCorrections;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: AffiliateImage })
  images?: AffiliateImage[];
}
