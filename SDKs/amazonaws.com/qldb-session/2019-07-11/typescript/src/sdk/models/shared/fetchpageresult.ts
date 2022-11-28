import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IoUsage } from "./iousage";
import { Page } from "./page";
import { TimingInformation } from "./timinginformation";



// FetchPageResult
/** 
 * Contains the page that was fetched.
**/
export class FetchPageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedIOs" })
  consumedIOs?: IoUsage;

  @SpeakeasyMetadata({ data: "json, name=Page" })
  page?: Page;

  @SpeakeasyMetadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;
}
