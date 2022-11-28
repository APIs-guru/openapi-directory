package shared

// AutoMlChannel
// A channel is a named input source that training algorithms can consume. For more information, see .
type AutoMlChannel struct {
	CompressionType     *CompressionTypeEnum `json:"CompressionType,omitempty"`
	DataSource          AutoMlDataSource     `json:"DataSource"`
	TargetAttributeName string               `json:"TargetAttributeName"`
}
