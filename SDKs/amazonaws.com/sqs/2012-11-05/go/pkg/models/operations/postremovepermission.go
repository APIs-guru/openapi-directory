package operations

type PostRemovePermissionActionEnum string

const (
	PostRemovePermissionActionEnumRemovePermission PostRemovePermissionActionEnum = "RemovePermission"
)

type PostRemovePermissionVersionEnum string

const (
	PostRemovePermissionVersionEnumTwoThousandAndTwelve1105 PostRemovePermissionVersionEnum = "2012-11-05"
)

type PostRemovePermissionQueryParams struct {
	Action  PostRemovePermissionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRemovePermissionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRemovePermissionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRemovePermissionRequest struct {
	QueryParams PostRemovePermissionQueryParams
	Headers     PostRemovePermissionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRemovePermissionResponse struct {
	ContentType string
	StatusCode  int64
}
