import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReferralDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=site_name" })
  siteName?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
