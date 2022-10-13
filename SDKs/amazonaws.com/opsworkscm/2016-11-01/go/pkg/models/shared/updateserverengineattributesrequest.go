package shared

type UpdateServerEngineAttributesRequest struct {
	AttributeName  string  `json:"AttributeName"`
	AttributeValue *string `json:"AttributeValue"`
	ServerName     string  `json:"ServerName"`
}
