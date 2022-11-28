import { SpeakeasyBase } from "../../../internal/utils";
import { SellingLimit } from "./sellinglimit";
/**
 * A merchant's selling limit, and the status of their account registration.
**/
export declare class SellingPrivileges extends SpeakeasyBase {
    sellerRegistrationCompleted?: boolean;
    sellingLimit?: SellingLimit;
}
