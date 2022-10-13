package shared

type ComplianceDetail struct {
	ComplianceState           *string                    `json:"complianceState"`
	CorrectiveRecommendations *CorrectiveRecommendations `json:"correctiveRecommendations"`
	Message                   *string                    `json:"message"`
	ReasonCode                *string                    `json:"reasonCode"`
	Variation                 *VariationDetails          `json:"variation"`
	ViolationData             []NameValueList            `json:"violationData"`
}
