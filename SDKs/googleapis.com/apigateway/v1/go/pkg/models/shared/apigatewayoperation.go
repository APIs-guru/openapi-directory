package shared

type ApigatewayOperation struct {
	Done     *bool                  `json:"done"`
	Error    *ApigatewayStatus      `json:"error"`
	Metadata map[string]interface{} `json:"metadata"`
	Name     *string                `json:"name"`
	Response map[string]interface{} `json:"response"`
}
