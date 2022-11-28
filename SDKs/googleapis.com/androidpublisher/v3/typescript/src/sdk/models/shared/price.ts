import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Price
/** 
 * Definition of a price, i.e. currency and units.
**/
export class Price extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=priceMicros" })
  priceMicros?: string;
}
