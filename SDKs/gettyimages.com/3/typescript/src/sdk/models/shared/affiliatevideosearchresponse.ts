import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoCorrections } from "./autocorrections";
import { AffiliateVideo } from "./affiliatevideo";


export class AffiliateVideoSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_corrections" })
  autoCorrections?: AutoCorrections;

  @Metadata({ data: "json, name=videos", elemType: shared.AffiliateVideo })
  videos?: AffiliateVideo[];
}
