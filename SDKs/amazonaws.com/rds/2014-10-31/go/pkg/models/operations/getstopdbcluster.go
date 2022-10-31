package operations

type GetStopDbClusterActionEnum string

const (
	GetStopDbClusterActionEnumStopDbCluster GetStopDbClusterActionEnum = "StopDBCluster"
)

type GetStopDbClusterVersionEnum string

const (
	GetStopDbClusterVersionEnumTwoThousandAndFourteen1031 GetStopDbClusterVersionEnum = "2014-10-31"
)

type GetStopDbClusterQueryParams struct {
	Action              GetStopDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbClusterIdentifier string                      `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	Version             GetStopDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStopDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetStopDbClusterRequest struct {
	QueryParams GetStopDbClusterQueryParams
	Headers     GetStopDbClusterHeaders
}

type GetStopDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
