package shared

type Document struct {
	DocumentDimensions *DocumentDimensions  `json:"documentDimensions"`
	DocumentText       *TextSnippet         `json:"documentText"`
	InputConfig        *DocumentInputConfig `json:"inputConfig"`
	Layout             []Layout             `json:"layout"`
	PageCount          *int32               `json:"pageCount"`
}
