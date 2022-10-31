package shared

type ListFleetsResponse struct {
	FleetDetails []Fleet `json:"fleetDetails,omitempty"`
	NextToken    *string `json:"nextToken,omitempty"`
}
