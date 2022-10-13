package operations

type DeleteGeofenceCollectionPathParams struct {
	CollectionName string `pathParam:"style=simple,explode=false,name=CollectionName"`
}

type DeleteGeofenceCollectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteGeofenceCollectionRequest struct {
	PathParams DeleteGeofenceCollectionPathParams
	Headers    DeleteGeofenceCollectionHeaders
}

type DeleteGeofenceCollectionResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	DeleteGeofenceCollectionResponse map[string]interface{}
	InternalServerException          *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	ValidationException              *interface{}
}
