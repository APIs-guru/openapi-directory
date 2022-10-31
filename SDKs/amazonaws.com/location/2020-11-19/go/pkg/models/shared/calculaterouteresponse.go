package shared

type CalculateRouteResponse struct {
	Legs    []Leg                 `json:"Legs"`
	Summary CalculateRouteSummary `json:"Summary"`
}
