import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { EbayTaxReference } from "./ebaytaxreference";
/**
 * This type contains information about the type and amount of tax that eBay will collect and remit to the state, province, country, or other taxing authority in the buyer's location, as required by that taxing authority. 'Collect and Remit' tax includes US state-mandated sales tax, 'Goods and Services' tax in Australia or New Zealand, VAT collected for the UK and EU countries.
**/
export declare class EbayCollectAndRemitTax extends SpeakeasyBase {
    amount?: Amount;
    collectionMethod?: string;
    ebayReference?: EbayTaxReference;
    taxType?: string;
}
