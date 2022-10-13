package shared

type Error struct {
	Category     *string          `json:"category"`
	Domain       *string          `json:"domain"`
	ErrorID      *int32           `json:"errorId"`
	InputRefIds  []string         `json:"inputRefIds"`
	LongMessage  *string          `json:"longMessage"`
	Message      *string          `json:"message"`
	OutputRefIds []string         `json:"outputRefIds"`
	Parameters   []ErrorParameter `json:"parameters"`
	Subdomain    *string          `json:"subdomain"`
}
