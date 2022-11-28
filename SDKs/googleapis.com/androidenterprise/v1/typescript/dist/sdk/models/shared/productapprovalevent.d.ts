import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProductApprovalEventApprovedEnum {
    Unknown = "unknown",
    Approved = "approved",
    Unapproved = "unapproved"
}
/**
 * An event generated when a product's approval status is changed.
**/
export declare class ProductApprovalEvent extends SpeakeasyBase {
    approved?: ProductApprovalEventApprovedEnum;
    productId?: string;
}
