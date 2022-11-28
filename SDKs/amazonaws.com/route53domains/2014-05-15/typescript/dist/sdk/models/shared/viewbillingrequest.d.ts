import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ViewBilling request includes the following elements.
**/
export declare class ViewBillingRequest extends SpeakeasyBase {
    end?: Date;
    marker?: string;
    maxItems?: number;
    start?: Date;
}
