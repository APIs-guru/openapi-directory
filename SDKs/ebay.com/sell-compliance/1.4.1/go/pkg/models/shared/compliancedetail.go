package shared

type ComplianceDetail struct {
	ComplianceState           *string                    `json:"complianceState,omitempty"`
	CorrectiveRecommendations *CorrectiveRecommendations `json:"correctiveRecommendations,omitempty"`
	Message                   *string                    `json:"message,omitempty"`
	ReasonCode                *string                    `json:"reasonCode,omitempty"`
	Variation                 *VariationDetails          `json:"variation,omitempty"`
	ViolationData             []NameValueList            `json:"violationData,omitempty"`
}
