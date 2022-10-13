package shared

type GoogleCloudApigeeV1OrganizationBillingTypeEnum string

const (
	GoogleCloudApigeeV1OrganizationBillingTypeEnumBillingTypeUnspecified GoogleCloudApigeeV1OrganizationBillingTypeEnum = "BILLING_TYPE_UNSPECIFIED"
	GoogleCloudApigeeV1OrganizationBillingTypeEnumSubscription           GoogleCloudApigeeV1OrganizationBillingTypeEnum = "SUBSCRIPTION"
	GoogleCloudApigeeV1OrganizationBillingTypeEnumEvaluation             GoogleCloudApigeeV1OrganizationBillingTypeEnum = "EVALUATION"
	GoogleCloudApigeeV1OrganizationBillingTypeEnumPayg                   GoogleCloudApigeeV1OrganizationBillingTypeEnum = "PAYG"
)

type GoogleCloudApigeeV1OrganizationRuntimeTypeEnum string

const (
	GoogleCloudApigeeV1OrganizationRuntimeTypeEnumRuntimeTypeUnspecified GoogleCloudApigeeV1OrganizationRuntimeTypeEnum = "RUNTIME_TYPE_UNSPECIFIED"
	GoogleCloudApigeeV1OrganizationRuntimeTypeEnumCloud                  GoogleCloudApigeeV1OrganizationRuntimeTypeEnum = "CLOUD"
	GoogleCloudApigeeV1OrganizationRuntimeTypeEnumHybrid                 GoogleCloudApigeeV1OrganizationRuntimeTypeEnum = "HYBRID"
)

type GoogleCloudApigeeV1OrganizationStateEnum string

const (
	GoogleCloudApigeeV1OrganizationStateEnumStateUnspecified GoogleCloudApigeeV1OrganizationStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudApigeeV1OrganizationStateEnumCreating         GoogleCloudApigeeV1OrganizationStateEnum = "CREATING"
	GoogleCloudApigeeV1OrganizationStateEnumActive           GoogleCloudApigeeV1OrganizationStateEnum = "ACTIVE"
	GoogleCloudApigeeV1OrganizationStateEnumDeleting         GoogleCloudApigeeV1OrganizationStateEnum = "DELETING"
	GoogleCloudApigeeV1OrganizationStateEnumUpdating         GoogleCloudApigeeV1OrganizationStateEnum = "UPDATING"
)

type GoogleCloudApigeeV1OrganizationSubscriptionTypeEnum string

const (
	GoogleCloudApigeeV1OrganizationSubscriptionTypeEnumSubscriptionTypeUnspecified GoogleCloudApigeeV1OrganizationSubscriptionTypeEnum = "SUBSCRIPTION_TYPE_UNSPECIFIED"
	GoogleCloudApigeeV1OrganizationSubscriptionTypeEnumPaid                        GoogleCloudApigeeV1OrganizationSubscriptionTypeEnum = "PAID"
	GoogleCloudApigeeV1OrganizationSubscriptionTypeEnumTrial                       GoogleCloudApigeeV1OrganizationSubscriptionTypeEnum = "TRIAL"
)

type GoogleCloudApigeeV1OrganizationTypeEnum string

const (
	GoogleCloudApigeeV1OrganizationTypeEnumTypeUnspecified GoogleCloudApigeeV1OrganizationTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudApigeeV1OrganizationTypeEnumTypeTrial       GoogleCloudApigeeV1OrganizationTypeEnum = "TYPE_TRIAL"
	GoogleCloudApigeeV1OrganizationTypeEnumTypePaid        GoogleCloudApigeeV1OrganizationTypeEnum = "TYPE_PAID"
	GoogleCloudApigeeV1OrganizationTypeEnumTypeInternal    GoogleCloudApigeeV1OrganizationTypeEnum = "TYPE_INTERNAL"
)

type GoogleCloudApigeeV1Organization struct {
	AddonsConfig                     *GoogleCloudApigeeV1AddonsConfig                     `json:"addonsConfig"`
	AnalyticsRegion                  *string                                              `json:"analyticsRegion"`
	ApigeeProjectID                  *string                                              `json:"apigeeProjectId"`
	Attributes                       []string                                             `json:"attributes"`
	AuthorizedNetwork                *string                                              `json:"authorizedNetwork"`
	BillingType                      *GoogleCloudApigeeV1OrganizationBillingTypeEnum      `json:"billingType"`
	CaCertificate                    *string                                              `json:"caCertificate"`
	CreatedAt                        *string                                              `json:"createdAt"`
	CustomerName                     *string                                              `json:"customerName"`
	Description                      *string                                              `json:"description"`
	DisplayName                      *string                                              `json:"displayName"`
	Environments                     []string                                             `json:"environments"`
	ExpiresAt                        *string                                              `json:"expiresAt"`
	LastModifiedAt                   *string                                              `json:"lastModifiedAt"`
	Name                             *string                                              `json:"name"`
	PortalDisabled                   *bool                                                `json:"portalDisabled"`
	ProjectID                        *string                                              `json:"projectId"`
	Properties                       *GoogleCloudApigeeV1Properties                       `json:"properties"`
	RuntimeDatabaseEncryptionKeyName *string                                              `json:"runtimeDatabaseEncryptionKeyName"`
	RuntimeType                      *GoogleCloudApigeeV1OrganizationRuntimeTypeEnum      `json:"runtimeType"`
	State                            *GoogleCloudApigeeV1OrganizationStateEnum            `json:"state"`
	SubscriptionType                 *GoogleCloudApigeeV1OrganizationSubscriptionTypeEnum `json:"subscriptionType"`
	Type                             *GoogleCloudApigeeV1OrganizationTypeEnum             `json:"type"`
}
