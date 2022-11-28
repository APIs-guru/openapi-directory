import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReferralDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=site_name" })
  siteName?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
