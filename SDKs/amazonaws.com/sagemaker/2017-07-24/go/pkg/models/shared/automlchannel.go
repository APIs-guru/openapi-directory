package shared

type AutoMlChannel struct {
	CompressionType     *CompressionTypeEnum `json:"CompressionType"`
	DataSource          AutoMlDataSource     `json:"DataSource"`
	TargetAttributeName string               `json:"TargetAttributeName"`
}
