package operations

type DeleteServerCatalogXAmzTargetEnum string

const (
	DeleteServerCatalogXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteServerCatalog DeleteServerCatalogXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog"
)

type DeleteServerCatalogHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteServerCatalogXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteServerCatalogRequest struct {
	Headers DeleteServerCatalogHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DeleteServerCatalogResponse struct {
	ContentType                       string
	DeleteServerCatalogResponse       map[string]interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
