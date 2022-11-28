package shared

type ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum string

const (
	ListCreativeStatusBreakdownByDetailResponseDetailTypeEnumDetailTypeUnspecified ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum = "DETAIL_TYPE_UNSPECIFIED"
	ListCreativeStatusBreakdownByDetailResponseDetailTypeEnumCreativeAttribute     ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum = "CREATIVE_ATTRIBUTE"
	ListCreativeStatusBreakdownByDetailResponseDetailTypeEnumVendor                ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum = "VENDOR"
	ListCreativeStatusBreakdownByDetailResponseDetailTypeEnumSensitiveCategory     ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum = "SENSITIVE_CATEGORY"
	ListCreativeStatusBreakdownByDetailResponseDetailTypeEnumProductCategory       ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum = "PRODUCT_CATEGORY"
	ListCreativeStatusBreakdownByDetailResponseDetailTypeEnumDisapprovalReason     ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum = "DISAPPROVAL_REASON"
	ListCreativeStatusBreakdownByDetailResponseDetailTypeEnumPolicyTopic           ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum = "POLICY_TOPIC"
	ListCreativeStatusBreakdownByDetailResponseDetailTypeEnumAtpVendor             ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum = "ATP_VENDOR"
	ListCreativeStatusBreakdownByDetailResponseDetailTypeEnumVendorDomain          ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum = "VENDOR_DOMAIN"
	ListCreativeStatusBreakdownByDetailResponseDetailTypeEnumGvlID                 ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum = "GVL_ID"
)

// ListCreativeStatusBreakdownByDetailResponse
// Response message for listing all details associated with a given filtered bid reason.
type ListCreativeStatusBreakdownByDetailResponse struct {
	DetailType            *ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum `json:"detailType,omitempty"`
	FilteredBidDetailRows []FilteredBidDetailRow                                     `json:"filteredBidDetailRows,omitempty"`
	NextPageToken         *string                                                    `json:"nextPageToken,omitempty"`
}
