import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilteredBidDetailRow } from "./filteredbiddetailrow";

export enum ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum {
    DetailTypeUnspecified = "DETAIL_TYPE_UNSPECIFIED"
,    CreativeAttribute = "CREATIVE_ATTRIBUTE"
,    Vendor = "VENDOR"
,    SensitiveCategory = "SENSITIVE_CATEGORY"
,    ProductCategory = "PRODUCT_CATEGORY"
,    DisapprovalReason = "DISAPPROVAL_REASON"
,    PolicyTopic = "POLICY_TOPIC"
,    AtpVendor = "ATP_VENDOR"
,    VendorDomain = "VENDOR_DOMAIN"
,    GvlId = "GVL_ID"
}


// ListCreativeStatusBreakdownByDetailResponse
/** 
 * Response message for listing all details associated with a given filtered bid reason.
**/
export class ListCreativeStatusBreakdownByDetailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=detailType" })
  detailType?: ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum;

  @Metadata({ data: "json, name=filteredBidDetailRows", elemType: shared.FilteredBidDetailRow })
  filteredBidDetailRows?: FilteredBidDetailRow[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
