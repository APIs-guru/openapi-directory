import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReferrerTraffic
/** 
 * Referrer Traffic
**/
export class ReferrerTraffic extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=referrer" })
  referrer: string;

  @Metadata({ data: "json, name=uniques" })
  uniques: number;
}
