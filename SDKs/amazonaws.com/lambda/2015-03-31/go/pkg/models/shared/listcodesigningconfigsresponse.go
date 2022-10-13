package shared

type ListCodeSigningConfigsResponse struct {
	CodeSigningConfigs []CodeSigningConfig `json:"CodeSigningConfigs"`
	NextMarker         *string             `json:"NextMarker"`
}
