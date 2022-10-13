package shared

type BiEngineStatistics struct {
	BiEngineMode    *string          `json:"biEngineMode"`
	BiEngineReasons []BiEngineReason `json:"biEngineReasons"`
}
