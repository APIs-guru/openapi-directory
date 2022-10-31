package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRelatedItemsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateRelatedItemsRequestBodyRelatedItemsUpdate struct {
	ItemToAdd    *shared.RelatedItem    `json:"itemToAdd,omitempty"`
	ItemToRemove *shared.ItemIdentifier `json:"itemToRemove,omitempty"`
}

type UpdateRelatedItemsRequestBody struct {
	ClientToken        *string                                         `json:"clientToken,omitempty"`
	IncidentRecordArn  string                                          `json:"incidentRecordArn"`
	RelatedItemsUpdate UpdateRelatedItemsRequestBodyRelatedItemsUpdate `json:"relatedItemsUpdate"`
}

type UpdateRelatedItemsRequest struct {
	Headers UpdateRelatedItemsHeaders
	Request UpdateRelatedItemsRequestBody `request:"mediaType=application/json"`
}

type UpdateRelatedItemsResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateRelatedItemsOutput  map[string]interface{}
	ValidationException       *interface{}
}
