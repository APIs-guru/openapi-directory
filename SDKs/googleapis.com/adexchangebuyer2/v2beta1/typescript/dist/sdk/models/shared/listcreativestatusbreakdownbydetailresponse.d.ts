import { SpeakeasyBase } from "../../../internal/utils";
import { FilteredBidDetailRow } from "./filteredbiddetailrow";
export declare enum ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum {
    DetailTypeUnspecified = "DETAIL_TYPE_UNSPECIFIED",
    CreativeAttribute = "CREATIVE_ATTRIBUTE",
    Vendor = "VENDOR",
    SensitiveCategory = "SENSITIVE_CATEGORY",
    ProductCategory = "PRODUCT_CATEGORY",
    DisapprovalReason = "DISAPPROVAL_REASON",
    PolicyTopic = "POLICY_TOPIC",
    AtpVendor = "ATP_VENDOR",
    VendorDomain = "VENDOR_DOMAIN",
    GvlId = "GVL_ID"
}
/**
 * Response message for listing all details associated with a given filtered bid reason.
**/
export declare class ListCreativeStatusBreakdownByDetailResponse extends SpeakeasyBase {
    detailType?: ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum;
    filteredBidDetailRows?: FilteredBidDetailRow[];
    nextPageToken?: string;
}
