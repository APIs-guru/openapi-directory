package shared

type DeleteStreamInput struct {
	EnforceConsumerDeletion *bool  `json:"EnforceConsumerDeletion"`
	StreamName              string `json:"StreamName"`
}
