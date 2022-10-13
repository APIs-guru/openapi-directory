package shared

type GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum string

const (
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumComplianceRegimeUnspecified GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "COMPLIANCE_REGIME_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumIl4                         GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "IL4"
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumCjis                        GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "CJIS"
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumFedrampHigh                 GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "FEDRAMP_HIGH"
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumFedrampModerate             GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "FEDRAMP_MODERATE"
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumUsRegionalAccess            GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "US_REGIONAL_ACCESS"
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumHipaa                       GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "HIPAA"
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumHitrust                     GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "HITRUST"
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumEuRegionsAndSupport         GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "EU_REGIONS_AND_SUPPORT"
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumCaRegionsAndSupport         GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "CA_REGIONS_AND_SUPPORT"
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumItar                        GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "ITAR"
	GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnumAssuredWorkloadsForPartners GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = "ASSURED_WORKLOADS_FOR_PARTNERS"
)

type GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum string

const (
	GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnumKajEnrollmentStateUnspecified GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum = "KAJ_ENROLLMENT_STATE_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnumKajEnrollmentStatePending     GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum = "KAJ_ENROLLMENT_STATE_PENDING"
	GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnumKajEnrollmentStateComplete    GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum = "KAJ_ENROLLMENT_STATE_COMPLETE"
)

type GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum string

const (
	GoogleCloudAssuredworkloadsV1WorkloadPartnerEnumPartnerUnspecified  GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum = "PARTNER_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1WorkloadPartnerEnumLocalControlsByS3Ns GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum = "LOCAL_CONTROLS_BY_S3NS"
)

type GoogleCloudAssuredworkloadsV1Workload struct {
	BillingAccount                 *string                                                      `json:"billingAccount"`
	ComplianceRegime               *GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum   `json:"complianceRegime"`
	CompliantButDisallowedServices []string                                                     `json:"compliantButDisallowedServices"`
	CreateTime                     *string                                                      `json:"createTime"`
	DisplayName                    *string                                                      `json:"displayName"`
	EnableSovereignControls        *bool                                                        `json:"enableSovereignControls"`
	Etag                           *string                                                      `json:"etag"`
	KajEnrollmentState             *GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum `json:"kajEnrollmentState"`
	KmsSettings                    *GoogleCloudAssuredworkloadsV1WorkloadKmsSettings            `json:"kmsSettings"`
	Labels                         map[string]string                                            `json:"labels"`
	Name                           *string                                                      `json:"name"`
	Partner                        *GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum            `json:"partner"`
	ProvisionedResourcesParent     *string                                                      `json:"provisionedResourcesParent"`
	ResourceSettings               []GoogleCloudAssuredworkloadsV1WorkloadResourceSettings      `json:"resourceSettings"`
	Resources                      []GoogleCloudAssuredworkloadsV1WorkloadResourceInfo          `json:"resources"`
	SaaEnrollmentResponse          *GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse  `json:"saaEnrollmentResponse"`
}
