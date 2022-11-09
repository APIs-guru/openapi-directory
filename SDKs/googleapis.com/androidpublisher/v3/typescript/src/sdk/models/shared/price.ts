import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Price
/** 
 * Definition of a price, i.e. currency and units.
**/
export class Price extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=priceMicros" })
  priceMicros?: string;
}
