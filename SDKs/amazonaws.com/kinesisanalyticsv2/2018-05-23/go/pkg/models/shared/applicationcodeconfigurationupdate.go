package shared

type ApplicationCodeConfigurationUpdate struct {
	CodeContentTypeUpdate *CodeContentTypeEnum `json:"CodeContentTypeUpdate"`
	CodeContentUpdate     *CodeContentUpdate   `json:"CodeContentUpdate"`
}
