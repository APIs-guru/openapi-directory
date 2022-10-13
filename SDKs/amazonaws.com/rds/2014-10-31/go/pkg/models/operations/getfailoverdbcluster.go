package operations

type GetFailoverDbClusterActionEnum string

const (
	GetFailoverDbClusterActionEnumFailoverDbCluster GetFailoverDbClusterActionEnum = "FailoverDBCluster"
)

type GetFailoverDbClusterVersionEnum string

const (
	GetFailoverDbClusterVersionEnumTwoThousandAndFourteen1031 GetFailoverDbClusterVersionEnum = "2014-10-31"
)

type GetFailoverDbClusterQueryParams struct {
	Action                     GetFailoverDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbClusterIdentifier        string                          `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	TargetDbInstanceIdentifier *string                         `queryParam:"style=form,explode=true,name=TargetDBInstanceIdentifier"`
	Version                    GetFailoverDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetFailoverDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFailoverDbClusterRequest struct {
	QueryParams GetFailoverDbClusterQueryParams
	Headers     GetFailoverDbClusterHeaders
}

type GetFailoverDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
