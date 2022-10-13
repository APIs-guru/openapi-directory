package shared

type AnalyzeDocumentResponse struct {
	AnalyzeDocumentModelVersion *string                    `json:"AnalyzeDocumentModelVersion"`
	Blocks                      []Block                    `json:"Blocks"`
	DocumentMetadata            *DocumentMetadata          `json:"DocumentMetadata"`
	HumanLoopActivationOutput   *HumanLoopActivationOutput `json:"HumanLoopActivationOutput"`
}
