import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoCorrections } from "./autocorrections";
import { AffiliateImage } from "./affiliateimage";


export class AffiliateImageSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_corrections" })
  autoCorrections?: AutoCorrections;

  @Metadata({ data: "json, name=images", elemType: shared.AffiliateImage })
  images?: AffiliateImage[];
}
