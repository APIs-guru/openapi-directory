package shared

type GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum string

const (
	GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnumSkuUnspecified GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum = "SKU_UNSPECIFIED"
	GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnumBceStandardSku GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum = "BCE_STANDARD_SKU"
)

type GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum string

const (
	GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnumStateUnspecified GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnumActive           GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum = "ACTIVE"
	GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnumInactive         GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum = "INACTIVE"
)

type GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum string

const (
	GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnumTypeUnspecified GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnumTrial           GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum = "TRIAL"
	GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnumPaid            GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum = "PAID"
	GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnumAllowlist       GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum = "ALLOWLIST"
)

// GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription
// A BeyondCorp Subscription resource represents BeyondCorp Enterprise Subscription. BeyondCorp Enterprise Subscription enables BeyondCorp Enterprise permium features for an organization.
type GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription struct {
	AutoRenewEnabled *bool                                                                       `json:"autoRenewEnabled,omitempty"`
	CreateTime       *string                                                                     `json:"createTime,omitempty"`
	EndTime          *string                                                                     `json:"endTime,omitempty"`
	Name             *string                                                                     `json:"name,omitempty"`
	SeatCount        *string                                                                     `json:"seatCount,omitempty"`
	Sku              *GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum   `json:"sku,omitempty"`
	StartTime        *string                                                                     `json:"startTime,omitempty"`
	State            *GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum `json:"state,omitempty"`
	Type             *GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum  `json:"type,omitempty"`
}

// GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput
// A BeyondCorp Subscription resource represents BeyondCorp Enterprise Subscription. BeyondCorp Enterprise Subscription enables BeyondCorp Enterprise permium features for an organization.
type GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput struct {
	Name *string                                                                    `json:"name,omitempty"`
	Sku  *GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum  `json:"sku,omitempty"`
	Type *GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum `json:"type,omitempty"`
}
