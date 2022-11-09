import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LineItemProperties
/** 
 * This type contains information about the eBay programs under which a line item was listed and sold.
**/
export class LineItemProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyerProtection" })
  buyerProtection?: boolean;

  @Metadata({ data: "json, name=fromBestOffer" })
  fromBestOffer?: boolean;

  @Metadata({ data: "json, name=soldViaAdCampaign" })
  soldViaAdCampaign?: boolean;
}
