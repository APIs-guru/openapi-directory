package operations

type MergeAForkRequestBody struct {
	Destination *string `json:"destination"`
	Source      *string `json:"source"`
	Strategy    *string `json:"strategy"`
}

type MergeAForkRequest struct {
	Request *MergeAForkRequestBody `request:"mediaType=application/json"`
}

type MergeAForkResponse struct {
	ContentType string
	StatusCode  int64
}
