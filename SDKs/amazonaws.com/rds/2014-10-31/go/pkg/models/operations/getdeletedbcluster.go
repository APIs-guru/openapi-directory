package operations

type GetDeleteDbClusterActionEnum string

const (
	GetDeleteDbClusterActionEnumDeleteDbCluster GetDeleteDbClusterActionEnum = "DeleteDBCluster"
)

type GetDeleteDbClusterVersionEnum string

const (
	GetDeleteDbClusterVersionEnumTwoThousandAndFourteen1031 GetDeleteDbClusterVersionEnum = "2014-10-31"
)

type GetDeleteDbClusterQueryParams struct {
	Action                    GetDeleteDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbClusterIdentifier       string                        `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	FinalDbSnapshotIdentifier *string                       `queryParam:"style=form,explode=true,name=FinalDBSnapshotIdentifier"`
	SkipFinalSnapshot         *bool                         `queryParam:"style=form,explode=true,name=SkipFinalSnapshot"`
	Version                   GetDeleteDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteDbClusterRequest struct {
	QueryParams GetDeleteDbClusterQueryParams
	Headers     GetDeleteDbClusterHeaders
}

type GetDeleteDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
