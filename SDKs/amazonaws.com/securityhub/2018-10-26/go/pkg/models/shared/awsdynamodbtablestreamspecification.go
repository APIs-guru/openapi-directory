package shared

type AwsDynamoDbTableStreamSpecification struct {
	StreamEnabled  *bool   `json:"StreamEnabled"`
	StreamViewType *string `json:"StreamViewType"`
}
