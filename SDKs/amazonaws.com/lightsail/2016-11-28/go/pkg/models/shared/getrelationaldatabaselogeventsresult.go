package shared

type GetRelationalDatabaseLogEventsResult struct {
	NextBackwardToken *string    `json:"nextBackwardToken"`
	NextForwardToken  *string    `json:"nextForwardToken"`
	ResourceLogEvents []LogEvent `json:"resourceLogEvents"`
}
