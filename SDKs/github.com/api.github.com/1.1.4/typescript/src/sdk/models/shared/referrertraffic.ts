import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReferrerTraffic
/** 
 * Referrer Traffic
**/
export class ReferrerTraffic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=referrer" })
  referrer: string;

  @SpeakeasyMetadata({ data: "json, name=uniques" })
  uniques: number;
}
