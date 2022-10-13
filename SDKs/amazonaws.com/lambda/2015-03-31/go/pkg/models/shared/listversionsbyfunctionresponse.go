package shared

type ListVersionsByFunctionResponse struct {
	NextMarker *string                 `json:"NextMarker"`
	Versions   []FunctionConfiguration `json:"Versions"`
}
