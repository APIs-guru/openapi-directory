package shared

type ListDevicePositionsResponse struct {
	Entries   []ListDevicePositionsResponseEntry `json:"Entries"`
	NextToken *string                            `json:"NextToken"`
}
