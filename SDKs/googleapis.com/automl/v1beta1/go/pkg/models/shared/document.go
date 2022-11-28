package shared

// Document
// A structured text document e.g. a PDF.
type Document struct {
	DocumentDimensions *DocumentDimensions  `json:"documentDimensions,omitempty"`
	DocumentText       *TextSnippet         `json:"documentText,omitempty"`
	InputConfig        *DocumentInputConfig `json:"inputConfig,omitempty"`
	Layout             []Layout             `json:"layout,omitempty"`
	PageCount          *int32               `json:"pageCount,omitempty"`
}
