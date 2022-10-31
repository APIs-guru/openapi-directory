package operations

import (
	"openapi/pkg/models/shared"
)

type EnableSharingWithAwsOrganizationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type EnableSharingWithAwsOrganizationRequest struct {
	Headers EnableSharingWithAwsOrganizationHeaders
}

type EnableSharingWithAwsOrganizationResponse struct {
	ContentType                              string
	EnableSharingWithAwsOrganizationResponse *shared.EnableSharingWithAwsOrganizationResponse
	OperationNotPermittedException           *interface{}
	ServerInternalException                  *interface{}
	ServiceUnavailableException              *interface{}
	StatusCode                               int64
}
