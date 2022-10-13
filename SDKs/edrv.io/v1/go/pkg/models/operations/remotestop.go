package operations

type RemotestopRequestBody struct {
	Chargestation *string `json:"chargestation"`
	Driver        *string `json:"driver"`
	Transaction   *string `json:"transaction"`
}

type RemotestopRequest struct {
	Request RemotestopRequestBody `request:"mediaType=application/json"`
}

type RemotestopResponse struct {
	ContentType string
	StatusCode  int64
}
