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
	AddonsConfig                     *GoogleCloudApigeeV1AddonsConfig                     `json:"addonsConfig,omitempty"`
	AnalyticsRegion                  *string                                              `json:"analyticsRegion,omitempty"`
	ApigeeProjectID                  *string                                              `json:"apigeeProjectId,omitempty"`
	Attributes                       []string                                             `json:"attributes,omitempty"`
	AuthorizedNetwork                *string                                              `json:"authorizedNetwork,omitempty"`
	BillingType                      *GoogleCloudApigeeV1OrganizationBillingTypeEnum      `json:"billingType,omitempty"`
	CaCertificate                    *string                                              `json:"caCertificate,omitempty"`
	CreatedAt                        *string                                              `json:"createdAt,omitempty"`
	CustomerName                     *string                                              `json:"customerName,omitempty"`
	Description                      *string                                              `json:"description,omitempty"`
	DisplayName                      *string                                              `json:"displayName,omitempty"`
	Environments                     []string                                             `json:"environments,omitempty"`
	ExpiresAt                        *string                                              `json:"expiresAt,omitempty"`
	LastModifiedAt                   *string                                              `json:"lastModifiedAt,omitempty"`
	Name                             *string                                              `json:"name,omitempty"`
	PortalDisabled                   *bool                                                `json:"portalDisabled,omitempty"`
	ProjectID                        *string                                              `json:"projectId,omitempty"`
	Properties                       *GoogleCloudApigeeV1Properties                       `json:"properties,omitempty"`
	RuntimeDatabaseEncryptionKeyName *string                                              `json:"runtimeDatabaseEncryptionKeyName,omitempty"`
	RuntimeType                      *GoogleCloudApigeeV1OrganizationRuntimeTypeEnum      `json:"runtimeType,omitempty"`
	State                            *GoogleCloudApigeeV1OrganizationStateEnum            `json:"state,omitempty"`
	SubscriptionType                 *GoogleCloudApigeeV1OrganizationSubscriptionTypeEnum `json:"subscriptionType,omitempty"`
	Type                             *GoogleCloudApigeeV1OrganizationTypeEnum             `json:"type,omitempty"`
}
