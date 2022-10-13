package operations

type ImportServerCatalogXAmzTargetEnum string

const (
	ImportServerCatalogXAmzTargetEnumAwsServerMigrationServiceV20161024ImportServerCatalog ImportServerCatalogXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.ImportServerCatalog"
)

type ImportServerCatalogHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ImportServerCatalogXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ImportServerCatalogRequest struct {
	Headers ImportServerCatalogHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type ImportServerCatalogResponse struct {
	ContentType                       string
	ImportServerCatalogResponse       map[string]interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	NoConnectorsAvailableException    *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
