package shared

// CalculateRouteResponse
// Returns the result of the route calculation. Metadata includes legs and route summary.
type CalculateRouteResponse struct {
	Legs    []Leg                 `json:"Legs"`
	Summary CalculateRouteSummary `json:"Summary"`
}
