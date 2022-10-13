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
	BillingAccount                 *string                                                            `json:"billingAccount"`
	CjisSettings                   *GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings            `json:"cjisSettings"`
	ComplianceRegime               *GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum    `json:"complianceRegime"`
	ComplianceStatus               *GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus        `json:"complianceStatus"`
	CompliantButDisallowedServices []string                                                           `json:"compliantButDisallowedServices"`
	CreateTime                     *string                                                            `json:"createTime"`
	DisplayName                    *string                                                            `json:"displayName"`
	EnableSovereignControls        *bool                                                              `json:"enableSovereignControls"`
	Etag                           *string                                                            `json:"etag"`
	FedrampHighSettings            *GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings     `json:"fedrampHighSettings"`
	FedrampModerateSettings        *GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings `json:"fedrampModerateSettings"`
	Il4Settings                    *GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings             `json:"il4Settings"`
	KajEnrollmentState             *GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum  `json:"kajEnrollmentState"`
	KmsSettings                    *GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings             `json:"kmsSettings"`
	Labels                         map[string]string                                                  `json:"labels"`
	Name                           *string                                                            `json:"name"`
	Partner                        *GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum             `json:"partner"`
	ProvisionedResourcesParent     *string                                                            `json:"provisionedResourcesParent"`
	ResourceSettings               []GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings       `json:"resourceSettings"`
	Resources                      []GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo           `json:"resources"`
	SaaEnrollmentResponse          *GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse   `json:"saaEnrollmentResponse"`
}
