package shared

type ListGeofencesResponse struct {
	Entries   []ListGeofenceResponseEntry `json:"Entries"`
	NextToken *string                     `json:"NextToken"`
}
