import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProductApprovalEventApprovedEnum {
    Unknown = "unknown"
,    Approved = "approved"
,    Unapproved = "unapproved"
}


// ProductApprovalEvent
/** 
 * An event generated when a product's approval status is changed.
**/
export class ProductApprovalEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=approved" })
  approved?: ProductApprovalEventApprovedEnum;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
