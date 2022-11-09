import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IoUsage } from "./iousage";
import { Page } from "./page";
import { TimingInformation } from "./timinginformation";
/**
 * Contains the page that was fetched.
**/
export declare class FetchPageResult extends SpeakeasyBase {
    consumedIOs?: IoUsage;
    page?: Page;
    timingInformation?: TimingInformation;
}
