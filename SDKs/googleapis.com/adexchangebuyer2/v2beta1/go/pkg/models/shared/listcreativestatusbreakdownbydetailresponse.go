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

type ListCreativeStatusBreakdownByDetailResponse struct {
	DetailType            *ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum `json:"detailType"`
	FilteredBidDetailRows []FilteredBidDetailRow                                     `json:"filteredBidDetailRows"`
	NextPageToken         *string                                                    `json:"nextPageToken"`
}
