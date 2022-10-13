package shared

type SourceAccessConfiguration struct {
	Type *SourceAccessTypeEnum `json:"Type"`
	URI  *string               `json:"URI"`
}
