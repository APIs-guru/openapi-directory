package shared

type ApplicationCodeConfiguration struct {
	CodeContent     *CodeContent        `json:"CodeContent"`
	CodeContentType CodeContentTypeEnum `json:"CodeContentType"`
}
