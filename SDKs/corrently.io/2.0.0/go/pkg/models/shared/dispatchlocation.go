package shared

type DispatchLocation struct {
	Energy   *float64               `json:"energy"`
	Location map[string]interface{} `json:"location"`
}
