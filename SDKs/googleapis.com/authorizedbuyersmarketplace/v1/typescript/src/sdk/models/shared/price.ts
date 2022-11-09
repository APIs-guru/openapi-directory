import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";

export enum PriceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Cpm = "CPM"
,    Cpd = "CPD"
}


// Price
/** 
 * Represents a price and a pricing type for a deal.
**/
export class Price extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Money;

  @Metadata({ data: "json, name=type" })
  type?: PriceTypeEnum;
}
