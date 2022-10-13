package operations

type PostModifyCurrentDbClusterCapacityActionEnum string

const (
	PostModifyCurrentDbClusterCapacityActionEnumModifyCurrentDbClusterCapacity PostModifyCurrentDbClusterCapacityActionEnum = "ModifyCurrentDBClusterCapacity"
)

type PostModifyCurrentDbClusterCapacityVersionEnum string

const (
	PostModifyCurrentDbClusterCapacityVersionEnumTwoThousandAndFourteen1031 PostModifyCurrentDbClusterCapacityVersionEnum = "2014-10-31"
)

type PostModifyCurrentDbClusterCapacityQueryParams struct {
	Action  PostModifyCurrentDbClusterCapacityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyCurrentDbClusterCapacityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyCurrentDbClusterCapacityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyCurrentDbClusterCapacityRequest struct {
	QueryParams PostModifyCurrentDbClusterCapacityQueryParams
	Headers     PostModifyCurrentDbClusterCapacityHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyCurrentDbClusterCapacityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
