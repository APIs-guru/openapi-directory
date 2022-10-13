package shared

type ListFunctionsResponse struct {
	Functions  []FunctionConfiguration `json:"Functions"`
	NextMarker *string                 `json:"NextMarker"`
}
