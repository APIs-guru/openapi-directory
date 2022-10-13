package operations

import (
	"openapi/pkg/models/shared"
)

type ImportAppCatalogXAmzTargetEnum string

const (
	ImportAppCatalogXAmzTargetEnumAwsServerMigrationServiceV20161024ImportAppCatalog ImportAppCatalogXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.ImportAppCatalog"
)

type ImportAppCatalogHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportAppCatalogXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ImportAppCatalogRequest struct {
	Headers ImportAppCatalogHeaders
	Request shared.ImportAppCatalogRequest `request:"mediaType=application/json"`
}

type ImportAppCatalogResponse struct {
	ContentType                       string
	ImportAppCatalogResponse          map[string]interface{}
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
