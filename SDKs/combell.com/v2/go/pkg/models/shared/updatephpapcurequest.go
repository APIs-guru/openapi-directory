package shared

type UpdatePhpAPcuRequest struct {
	ApcuSize *int32 `json:"apcu_size"`
	Enabled  *bool  `json:"enabled"`
}
