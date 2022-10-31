package operations

import (
	"openapi/pkg/models/shared"
)

type GetMigrationPathParams struct {
	MigrationID string `pathParam:"style=simple,explode=false,name=migrationId"`
}

type GetMigrationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetMigrationRequest struct {
	PathParams GetMigrationPathParams
	Headers    GetMigrationHeaders
}

type GetMigrationResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetMigrationResponse     *shared.GetMigrationResponse
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
