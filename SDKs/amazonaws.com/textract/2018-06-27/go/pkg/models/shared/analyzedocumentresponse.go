package shared

type AnalyzeDocumentResponse struct {
	AnalyzeDocumentModelVersion *string                    `json:"AnalyzeDocumentModelVersion,omitempty"`
	Blocks                      []Block                    `json:"Blocks,omitempty"`
	DocumentMetadata            *DocumentMetadata          `json:"DocumentMetadata,omitempty"`
	HumanLoopActivationOutput   *HumanLoopActivationOutput `json:"HumanLoopActivationOutput,omitempty"`
}
