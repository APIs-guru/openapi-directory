package operations

type GetStartDbClusterActionEnum string

const (
	GetStartDbClusterActionEnumStartDbCluster GetStartDbClusterActionEnum = "StartDBCluster"
)

type GetStartDbClusterVersionEnum string

const (
	GetStartDbClusterVersionEnumTwoThousandAndFourteen1031 GetStartDbClusterVersionEnum = "2014-10-31"
)

type GetStartDbClusterQueryParams struct {
	Action              GetStartDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbClusterIdentifier string                       `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	Version             GetStartDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStartDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStartDbClusterRequest struct {
	QueryParams GetStartDbClusterQueryParams
	Headers     GetStartDbClusterHeaders
}

type GetStartDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
