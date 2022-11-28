package shared

// GoogleCloudApigeeV1GraphQlOperation
// Represents the pairing of GraphQL operation types and the GraphQL operation name.
type GoogleCloudApigeeV1GraphQlOperation struct {
	Operation      *string  `json:"operation,omitempty"`
	OperationTypes []string `json:"operationTypes,omitempty"`
}
