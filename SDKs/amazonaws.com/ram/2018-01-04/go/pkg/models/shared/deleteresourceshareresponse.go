package shared

type DeleteResourceShareResponse struct {
	ClientToken *string `json:"clientToken,omitempty"`
	ReturnValue *bool   `json:"returnValue,omitempty"`
}
