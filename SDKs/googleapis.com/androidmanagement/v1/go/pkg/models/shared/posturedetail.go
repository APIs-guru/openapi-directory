package shared

type PostureDetailSecurityRiskEnum string

const (
	PostureDetailSecurityRiskEnumSecurityRiskUnspecified        PostureDetailSecurityRiskEnum = "SECURITY_RISK_UNSPECIFIED"
	PostureDetailSecurityRiskEnumUnknownOs                      PostureDetailSecurityRiskEnum = "UNKNOWN_OS"
	PostureDetailSecurityRiskEnumCompromisedOs                  PostureDetailSecurityRiskEnum = "COMPROMISED_OS"
	PostureDetailSecurityRiskEnumHardwareBackedEvaluationFailed PostureDetailSecurityRiskEnum = "HARDWARE_BACKED_EVALUATION_FAILED"
)

type PostureDetail struct {
	Advice       []UserFacingMessage            `json:"advice"`
	SecurityRisk *PostureDetailSecurityRiskEnum `json:"securityRisk"`
}
