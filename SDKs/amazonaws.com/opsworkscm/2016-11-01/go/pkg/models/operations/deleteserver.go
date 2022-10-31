package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServerXAmzTargetEnum string

const (
	DeleteServerXAmzTargetEnumOpsWorksCmV20161101DeleteServer DeleteServerXAmzTargetEnum = "OpsWorksCM_V2016_11_01.DeleteServer"
)

type DeleteServerHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteServerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteServerRequest struct {
	Headers DeleteServerHeaders
	Request shared.DeleteServerRequest `request:"mediaType=application/json"`
}

type DeleteServerResponse struct {
	ContentType               string
	DeleteServerResponse      map[string]interface{}
	InvalidStateException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
