package shared

type GetMigrationsResponse struct {
	MigrationSummaries []MigrationSummary `json:"migrationSummaries"`
	NextToken          *string            `json:"nextToken"`
}
