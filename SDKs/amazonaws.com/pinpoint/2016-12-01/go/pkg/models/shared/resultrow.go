package shared

type ResultRow struct {
	GroupedBys []ResultRowValue `json:"GroupedBys"`
	Values     []ResultRowValue `json:"Values"`
}
