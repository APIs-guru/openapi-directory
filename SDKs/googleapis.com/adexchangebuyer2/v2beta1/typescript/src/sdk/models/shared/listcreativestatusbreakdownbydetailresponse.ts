import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilteredBidDetailRow } from "./filteredbiddetailrow";


export enum ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum {
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


// ListCreativeStatusBreakdownByDetailResponse
/** 
 * Response message for listing all details associated with a given filtered bid reason.
**/
export class ListCreativeStatusBreakdownByDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailType" })
  detailType?: ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=filteredBidDetailRows", elemType: FilteredBidDetailRow })
  filteredBidDetailRows?: FilteredBidDetailRow[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
