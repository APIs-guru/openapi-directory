import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Representation of an unpaid or paid payment. See [Payment timelines for AdSense](https://support.google.com/adsense/answer/7164703) for more information about payments and the [YouTube homepage and payments account](https://support.google.com/adsense/answer/11622510) article for information about dedicated payments accounts for YouTube.
**/
export declare class Payment extends SpeakeasyBase {
    amount?: string;
    date?: Date;
    name?: string;
}
