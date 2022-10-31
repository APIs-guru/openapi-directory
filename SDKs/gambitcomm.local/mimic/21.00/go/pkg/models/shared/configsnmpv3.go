package shared

type ConfigSnmPv3 struct {
	ContextEngineID *string `json:"context_engine_id,omitempty"`
	EngineID        *string `json:"engine_id,omitempty"`
	UsmDb           *string `json:"usm_db,omitempty"`
	VacmDb          *string `json:"vacm_db,omitempty"`
}
