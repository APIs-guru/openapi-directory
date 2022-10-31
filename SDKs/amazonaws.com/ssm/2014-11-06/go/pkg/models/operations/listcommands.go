package operations

import (
	"openapi/pkg/models/shared"
)

type ListCommandsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCommandsXAmzTargetEnum string

const (
	ListCommandsXAmzTargetEnumAmazonSsmListCommands ListCommandsXAmzTargetEnum = "AmazonSSM.ListCommands"
)

type ListCommandsHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCommandsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListCommandsRequest struct {
	QueryParams ListCommandsQueryParams
	Headers     ListCommandsHeaders
	Request     shared.ListCommandsRequest `request:"mediaType=application/json"`
}

type ListCommandsResponse struct {
	ContentType         string
	InternalServerError *interface{}
	InvalidCommandID    *interface{}
	InvalidFilterKey    *interface{}
	InvalidInstanceID   *interface{}
	InvalidNextToken    *interface{}
	ListCommandsResult  *shared.ListCommandsResult
	StatusCode          int64
}
