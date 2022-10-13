package operations

type GetFailoverGlobalClusterActionEnum string

const (
	GetFailoverGlobalClusterActionEnumFailoverGlobalCluster GetFailoverGlobalClusterActionEnum = "FailoverGlobalCluster"
)

type GetFailoverGlobalClusterVersionEnum string

const (
	GetFailoverGlobalClusterVersionEnumTwoThousandAndFourteen1031 GetFailoverGlobalClusterVersionEnum = "2014-10-31"
)

type GetFailoverGlobalClusterQueryParams struct {
	Action                    GetFailoverGlobalClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GlobalClusterIdentifier   string                              `queryParam:"style=form,explode=true,name=GlobalClusterIdentifier"`
	TargetDbClusterIdentifier string                              `queryParam:"style=form,explode=true,name=TargetDbClusterIdentifier"`
	Version                   GetFailoverGlobalClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetFailoverGlobalClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFailoverGlobalClusterRequest struct {
	QueryParams GetFailoverGlobalClusterQueryParams
	Headers     GetFailoverGlobalClusterHeaders
}

type GetFailoverGlobalClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
