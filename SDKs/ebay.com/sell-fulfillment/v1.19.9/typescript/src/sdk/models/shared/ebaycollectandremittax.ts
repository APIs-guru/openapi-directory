import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { EbayTaxReference } from "./ebaytaxreference";



// EbayCollectAndRemitTax
/** 
 * This type contains information about the type and amount of tax that eBay will collect and remit to the state, province, country, or other taxing authority in the buyer's location, as required by that taxing authority. 'Collect and Remit' tax includes US state-mandated sales tax, 'Goods and Services' tax in Australia or New Zealand, VAT collected for the UK and EU countries.
**/
export class EbayCollectAndRemitTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=collectionMethod" })
  collectionMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=ebayReference" })
  ebayReference?: EbayTaxReference;

  @SpeakeasyMetadata({ data: "json, name=taxType" })
  taxType?: string;
}
