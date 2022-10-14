package shared

type AccessReasonTypeEnum string

const (
	AccessReasonTypeEnumTypeUnspecified                 AccessReasonTypeEnum = "TYPE_UNSPECIFIED"
	AccessReasonTypeEnumCustomerInitiatedSupport        AccessReasonTypeEnum = "CUSTOMER_INITIATED_SUPPORT"
	AccessReasonTypeEnumGoogleInitiatedService          AccessReasonTypeEnum = "GOOGLE_INITIATED_SERVICE"
	AccessReasonTypeEnumGoogleInitiatedReview           AccessReasonTypeEnum = "GOOGLE_INITIATED_REVIEW"
	AccessReasonTypeEnumThirdPartyDataRequest           AccessReasonTypeEnum = "THIRD_PARTY_DATA_REQUEST"
	AccessReasonTypeEnumGoogleResponseToProductionAlert AccessReasonTypeEnum = "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT"
)

type AccessReason struct {
	Detail *string               `json:"detail,omitempty"`
	Type   *AccessReasonTypeEnum `json:"type,omitempty"`
}
