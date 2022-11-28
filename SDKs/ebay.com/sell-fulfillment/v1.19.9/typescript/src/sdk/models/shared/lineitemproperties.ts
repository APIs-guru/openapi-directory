import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LineItemProperties
/** 
 * This type contains information about the eBay programs under which a line item was listed and sold.
**/
export class LineItemProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyerProtection" })
  buyerProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fromBestOffer" })
  fromBestOffer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=soldViaAdCampaign" })
  soldViaAdCampaign?: boolean;
}
