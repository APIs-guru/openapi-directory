package shared

type ApplicationCodeConfigurationDescription struct {
	CodeContentDescription *CodeContentDescription `json:"CodeContentDescription"`
	CodeContentType        CodeContentTypeEnum     `json:"CodeContentType"`
}
