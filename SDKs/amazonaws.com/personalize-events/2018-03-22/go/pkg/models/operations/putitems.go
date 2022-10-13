package operations

import (
	"openapi/pkg/models/shared"
)

type PutItemsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutItemsRequestBody struct {
	DatasetArn string        `json:"datasetArn"`
	Items      []shared.Item `json:"items"`
}

type PutItemsRequest struct {
	Headers PutItemsHeaders
	Request PutItemsRequestBody `request:"mediaType=application/json"`
}

type PutItemsResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
