import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IoUsage } from "./iousage";
import { Page } from "./page";
import { TimingInformation } from "./timinginformation";


// FetchPageResult
/** 
 * Contains the page that was fetched.
**/
export class FetchPageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedIOs" })
  consumedIOs?: IoUsage;

  @Metadata({ data: "json, name=Page" })
  page?: Page;

  @Metadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;
}
