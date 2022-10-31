package operations

type GetModifyClusterDbRevisionActionEnum string

const (
	GetModifyClusterDbRevisionActionEnumModifyClusterDbRevision GetModifyClusterDbRevisionActionEnum = "ModifyClusterDbRevision"
)

type GetModifyClusterDbRevisionVersionEnum string

const (
	GetModifyClusterDbRevisionVersionEnumTwoThousandAndTwelve1201 GetModifyClusterDbRevisionVersionEnum = "2012-12-01"
)

type GetModifyClusterDbRevisionQueryParams struct {
	Action            GetModifyClusterDbRevisionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                                `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	RevisionTarget    string                                `queryParam:"style=form,explode=true,name=RevisionTarget"`
	Version           GetModifyClusterDbRevisionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyClusterDbRevisionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyClusterDbRevisionRequest struct {
	QueryParams GetModifyClusterDbRevisionQueryParams
	Headers     GetModifyClusterDbRevisionHeaders
}

type GetModifyClusterDbRevisionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
