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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
