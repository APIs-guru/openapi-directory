package operations

import (
	"openapi/pkg/models/shared"
)

type GetMigrationPathParams struct {
	MigrationID string `pathParam:"style=simple,explode=false,name=migrationId"`
}

type GetMigrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
