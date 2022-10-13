package shared

type GetObjectResponse struct {
	Body       *string `json:"Body"`
	StatusCode *int64  `json:"StatusCode"`
}
