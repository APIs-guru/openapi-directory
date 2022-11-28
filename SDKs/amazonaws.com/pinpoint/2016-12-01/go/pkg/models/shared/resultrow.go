package shared

// ResultRow
// Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
type ResultRow struct {
	GroupedBys []ResultRowValue `json:"GroupedBys"`
	Values     []ResultRowValue `json:"Values"`
}
