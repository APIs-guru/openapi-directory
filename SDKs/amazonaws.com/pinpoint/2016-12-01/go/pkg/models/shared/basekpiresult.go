package shared

// BaseKpiResult
// Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
type BaseKpiResult struct {
	Rows []ResultRow `json:"Rows"`
}
