package shared

type AutoMlChannel struct {
	CompressionType     *CompressionTypeEnum `json:"CompressionType,omitempty"`
	DataSource          AutoMlDataSource     `json:"DataSource"`
	TargetAttributeName string               `json:"TargetAttributeName"`
}
