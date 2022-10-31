package shared



type GetMigrationsResponse struct {
    MigrationSummaries []MigrationSummary `json:"migrationSummaries,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

