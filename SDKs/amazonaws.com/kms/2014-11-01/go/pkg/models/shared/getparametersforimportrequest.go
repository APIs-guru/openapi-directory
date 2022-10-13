package shared

type GetParametersForImportRequest struct {
	KeyID             string              `json:"KeyId"`
	WrappingAlgorithm AlgorithmSpecEnum   `json:"WrappingAlgorithm"`
	WrappingKeySpec   WrappingKeySpecEnum `json:"WrappingKeySpec"`
}
