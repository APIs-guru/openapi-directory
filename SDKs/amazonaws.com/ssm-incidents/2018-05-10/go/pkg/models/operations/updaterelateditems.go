package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRelatedItemsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateRelatedItemsRequestBodyRelatedItemsUpdate struct {
	ItemToAdd    *shared.RelatedItem    `json:"itemToAdd"`
	ItemToRemove *shared.ItemIdentifier `json:"itemToRemove"`
}

type UpdateRelatedItemsRequestBody struct {
	ClientToken        *string                                         `json:"clientToken"`
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
