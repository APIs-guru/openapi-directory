package operations

type DeleteServerCatalogXAmzTargetEnum string

const (
	DeleteServerCatalogXAmzTargetEnumAwsServerMigrationServiceV20161024DeleteServerCatalog DeleteServerCatalogXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog"
)

type DeleteServerCatalogHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteServerCatalogXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
