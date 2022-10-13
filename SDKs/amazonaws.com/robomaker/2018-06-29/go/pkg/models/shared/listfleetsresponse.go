package shared

type ListFleetsResponse struct {
	FleetDetails []Fleet `json:"fleetDetails"`
	NextToken    *string `json:"nextToken"`
}
