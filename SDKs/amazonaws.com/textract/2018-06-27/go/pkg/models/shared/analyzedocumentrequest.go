package shared

type AnalyzeDocumentRequest struct {
	Document        Document          `json:"Document"`
	FeatureTypes    []FeatureTypeEnum `json:"FeatureTypes"`
	HumanLoopConfig *HumanLoopConfig  `json:"HumanLoopConfig,omitempty"`
}
