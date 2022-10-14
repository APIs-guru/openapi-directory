package shared

type GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum string

const (
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumComplianceRegimeUnspecified GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "COMPLIANCE_REGIME_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumIl4                         GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "IL4"
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumCjis                        GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "CJIS"
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumFedrampHigh                 GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "FEDRAMP_HIGH"
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumFedrampModerate             GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "FEDRAMP_MODERATE"
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumUsRegionalAccess            GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "US_REGIONAL_ACCESS"
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumHipaa                       GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "HIPAA"
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumHitrust                     GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "HITRUST"
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumEuRegionsAndSupport         GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "EU_REGIONS_AND_SUPPORT"
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumCaRegionsAndSupport         GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "CA_REGIONS_AND_SUPPORT"
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumItar                        GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "ITAR"
	GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnumAssuredWorkloadsForPartners GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = "ASSURED_WORKLOADS_FOR_PARTNERS"
)

type GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum string

const (
	GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnumKajEnrollmentStateUnspecified GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum = "KAJ_ENROLLMENT_STATE_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnumKajEnrollmentStatePending     GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum = "KAJ_ENROLLMENT_STATE_PENDING"
	GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnumKajEnrollmentStateComplete    GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum = "KAJ_ENROLLMENT_STATE_COMPLETE"
)

type GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum string

const (
	GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnumPartnerUnspecified  GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum = "PARTNER_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnumLocalControlsByS3Ns GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum = "LOCAL_CONTROLS_BY_S3NS"
)

type GoogleCloudAssuredworkloadsV1beta1Workload struct {
	BillingAccount                 *string                                                            `json:"billingAccount,omitempty"`
	CjisSettings                   *GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings            `json:"cjisSettings,omitempty"`
	ComplianceRegime               *GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum    `json:"complianceRegime,omitempty"`
	ComplianceStatus               *GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus        `json:"complianceStatus,omitempty"`
	CompliantButDisallowedServices []string                                                           `json:"compliantButDisallowedServices,omitempty"`
	CreateTime                     *string                                                            `json:"createTime,omitempty"`
	DisplayName                    *string                                                            `json:"displayName,omitempty"`
	EnableSovereignControls        *bool                                                              `json:"enableSovereignControls,omitempty"`
	Etag                           *string                                                            `json:"etag,omitempty"`
	FedrampHighSettings            *GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings     `json:"fedrampHighSettings,omitempty"`
	FedrampModerateSettings        *GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings `json:"fedrampModerateSettings,omitempty"`
	Il4Settings                    *GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings             `json:"il4Settings,omitempty"`
	KajEnrollmentState             *GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum  `json:"kajEnrollmentState,omitempty"`
	KmsSettings                    *GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings             `json:"kmsSettings,omitempty"`
	Labels                         map[string]string                                                  `json:"labels,omitempty"`
	Name                           *string                                                            `json:"name,omitempty"`
	Partner                        *GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum             `json:"partner,omitempty"`
	ProvisionedResourcesParent     *string                                                            `json:"provisionedResourcesParent,omitempty"`
	ResourceSettings               []GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings       `json:"resourceSettings,omitempty"`
	Resources                      []GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo           `json:"resources,omitempty"`
	SaaEnrollmentResponse          *GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse   `json:"saaEnrollmentResponse,omitempty"`
}
