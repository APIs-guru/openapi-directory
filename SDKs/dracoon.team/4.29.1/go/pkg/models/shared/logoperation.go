package shared

// LogOperation
// Log operation
type LogOperation struct {
	ID           int32  `json:"id"`
	IsDeprecated bool   `json:"isDeprecated"`
	Name         string `json:"name"`
}
