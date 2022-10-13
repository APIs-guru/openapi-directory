package operations

type RemoveLayerVersionPermissionPathParams struct {
	LayerName     string `pathParam:"style=simple,explode=false,name=LayerName"`
	StatementID   string `pathParam:"style=simple,explode=false,name=StatementId"`
	VersionNumber int64  `pathParam:"style=simple,explode=false,name=VersionNumber"`
}

type RemoveLayerVersionPermissionQueryParams struct {
	RevisionID *string `queryParam:"style=form,explode=true,name=RevisionId"`
}

type RemoveLayerVersionPermissionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RemoveLayerVersionPermissionRequest struct {
	PathParams  RemoveLayerVersionPermissionPathParams
	QueryParams RemoveLayerVersionPermissionQueryParams
	Headers     RemoveLayerVersionPermissionHeaders
}

type RemoveLayerVersionPermissionResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	PreconditionFailedException    *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
