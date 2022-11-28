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

type GoogleCloudApigeeV1OrganizationTypeEnum string

const (
	GoogleCloudApigeeV1OrganizationTypeEnumTypeUnspecified GoogleCloudApigeeV1OrganizationTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudApigeeV1OrganizationTypeEnumTypeTrial       GoogleCloudApigeeV1OrganizationTypeEnum = "TYPE_TRIAL"
	GoogleCloudApigeeV1OrganizationTypeEnumTypePaid        GoogleCloudApigeeV1OrganizationTypeEnum = "TYPE_PAID"
	GoogleCloudApigeeV1OrganizationTypeEnumTypeInternal    GoogleCloudApigeeV1OrganizationTypeEnum = "TYPE_INTERNAL"
)

type GoogleCloudApigeeV1OrganizationInput struct {
	AddonsConfig                     *GoogleCloudApigeeV1AddonsConfigInput           `json:"addonsConfig,omitempty"`
	AnalyticsRegion                  *string                                         `json:"analyticsRegion,omitempty"`
	Attributes                       []string                                        `json:"attributes,omitempty"`
	AuthorizedNetwork                *string                                         `json:"authorizedNetwork,omitempty"`
	BillingType                      *GoogleCloudApigeeV1OrganizationBillingTypeEnum `json:"billingType,omitempty"`
	CustomerName                     *string                                         `json:"customerName,omitempty"`
	Description                      *string                                         `json:"description,omitempty"`
	DisplayName                      *string                                         `json:"displayName,omitempty"`
	PortalDisabled                   *bool                                           `json:"portalDisabled,omitempty"`
	Properties                       *GoogleCloudApigeeV1Properties                  `json:"properties,omitempty"`
	RuntimeDatabaseEncryptionKeyName *string                                         `json:"runtimeDatabaseEncryptionKeyName,omitempty"`
	RuntimeType                      *GoogleCloudApigeeV1OrganizationRuntimeTypeEnum `json:"runtimeType,omitempty"`
	Type                             *GoogleCloudApigeeV1OrganizationTypeEnum        `json:"type,omitempty"`
}
