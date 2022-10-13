package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourceSharePermissionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListResourceSharePermissionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListResourceSharePermissionsRequestBody struct {
	MaxResults       *int64  `json:"maxResults"`
	NextToken        *string `json:"nextToken"`
	ResourceShareArn string  `json:"resourceShareArn"`
}

type ListResourceSharePermissionsRequest struct {
	QueryParams ListResourceSharePermissionsQueryParams
	Headers     ListResourceSharePermissionsHeaders
	Request     ListResourceSharePermissionsRequestBody `request:"mediaType=application/json"`
}

type ListResourceSharePermissionsResponse struct {
	ContentType                          string
	InvalidNextTokenException            *interface{}
	InvalidParameterException            *interface{}
	ListResourceSharePermissionsResponse *shared.ListResourceSharePermissionsResponse
	MalformedArnException                *interface{}
	OperationNotPermittedException       *interface{}
	ServerInternalException              *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	UnknownResourceException             *interface{}
}
