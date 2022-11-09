import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RateTable
/** 
 * A complex type that contains information pertaining to a shipping rate table.
**/
export class RateTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=locality" })
  locality?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rateTableId" })
  rateTableId?: string;
}
