package shared

type ConfigSnmPv3 struct {
	ContextEngineID *string `json:"context_engine_id"`
	EngineID        *string `json:"engine_id"`
	UsmDb           *string `json:"usm_db"`
	VacmDb          *string `json:"vacm_db"`
}
