package operations

type MergeAForkRequestBody struct {
	Destination *string `json:"destination,omitempty"`
	Source      *string `json:"source,omitempty"`
	Strategy    *string `json:"strategy,omitempty"`
}

type MergeAForkRequest struct {
	Request *MergeAForkRequestBody `request:"mediaType=application/json"`
}

type MergeAForkResponse struct {
	ContentType string
	StatusCode  int64
}
