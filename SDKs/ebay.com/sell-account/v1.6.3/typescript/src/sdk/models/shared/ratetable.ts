import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RateTable
/** 
 * A complex type that contains information pertaining to a shipping rate table.
**/
export class RateTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=locality" })
  locality?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rateTableId" })
  rateTableId?: string;
}
