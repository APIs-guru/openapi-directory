package shared

type SubscriptionPurchaseV2AcknowledgementStateEnum string

const (
	SubscriptionPurchaseV2AcknowledgementStateEnumAcknowledgementStateUnspecified  SubscriptionPurchaseV2AcknowledgementStateEnum = "ACKNOWLEDGEMENT_STATE_UNSPECIFIED"
	SubscriptionPurchaseV2AcknowledgementStateEnumAcknowledgementStatePending      SubscriptionPurchaseV2AcknowledgementStateEnum = "ACKNOWLEDGEMENT_STATE_PENDING"
	SubscriptionPurchaseV2AcknowledgementStateEnumAcknowledgementStateAcknowledged SubscriptionPurchaseV2AcknowledgementStateEnum = "ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED"
)

type SubscriptionPurchaseV2SubscriptionStateEnum string

const (
	SubscriptionPurchaseV2SubscriptionStateEnumSubscriptionStateUnspecified   SubscriptionPurchaseV2SubscriptionStateEnum = "SUBSCRIPTION_STATE_UNSPECIFIED"
	SubscriptionPurchaseV2SubscriptionStateEnumSubscriptionStatePending       SubscriptionPurchaseV2SubscriptionStateEnum = "SUBSCRIPTION_STATE_PENDING"
	SubscriptionPurchaseV2SubscriptionStateEnumSubscriptionStateActive        SubscriptionPurchaseV2SubscriptionStateEnum = "SUBSCRIPTION_STATE_ACTIVE"
	SubscriptionPurchaseV2SubscriptionStateEnumSubscriptionStatePaused        SubscriptionPurchaseV2SubscriptionStateEnum = "SUBSCRIPTION_STATE_PAUSED"
	SubscriptionPurchaseV2SubscriptionStateEnumSubscriptionStateInGracePeriod SubscriptionPurchaseV2SubscriptionStateEnum = "SUBSCRIPTION_STATE_IN_GRACE_PERIOD"
	SubscriptionPurchaseV2SubscriptionStateEnumSubscriptionStateOnHold        SubscriptionPurchaseV2SubscriptionStateEnum = "SUBSCRIPTION_STATE_ON_HOLD"
	SubscriptionPurchaseV2SubscriptionStateEnumSubscriptionStateCanceled      SubscriptionPurchaseV2SubscriptionStateEnum = "SUBSCRIPTION_STATE_CANCELED"
	SubscriptionPurchaseV2SubscriptionStateEnumSubscriptionStateExpired       SubscriptionPurchaseV2SubscriptionStateEnum = "SUBSCRIPTION_STATE_EXPIRED"
)

type SubscriptionPurchaseV2 struct {
	AcknowledgementState       *SubscriptionPurchaseV2AcknowledgementStateEnum `json:"acknowledgementState,omitempty"`
	CanceledStateContext       *CanceledStateContext                           `json:"canceledStateContext,omitempty"`
	ExternalAccountIdentifiers *ExternalAccountIdentifiers                     `json:"externalAccountIdentifiers,omitempty"`
	Kind                       *string                                         `json:"kind,omitempty"`
	LatestOrderID              *string                                         `json:"latestOrderId,omitempty"`
	LineItems                  []SubscriptionPurchaseLineItem                  `json:"lineItems,omitempty"`
	LinkedPurchaseToken        *string                                         `json:"linkedPurchaseToken,omitempty"`
	PausedStateContext         *PausedStateContext                             `json:"pausedStateContext,omitempty"`
	RegionCode                 *string                                         `json:"regionCode,omitempty"`
	StartTime                  *string                                         `json:"startTime,omitempty"`
	SubscribeWithGoogleInfo    *SubscribeWithGoogleInfo                        `json:"subscribeWithGoogleInfo,omitempty"`
	SubscriptionState          *SubscriptionPurchaseV2SubscriptionStateEnum    `json:"subscriptionState,omitempty"`
	TestPurchase               map[string]interface{}                          `json:"testPurchase,omitempty"`
}
