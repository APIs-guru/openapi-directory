package operations

type PostModifyDbClusterActionEnum string

const (
	PostModifyDbClusterActionEnumModifyDbCluster PostModifyDbClusterActionEnum = "ModifyDBCluster"
)

type PostModifyDbClusterVersionEnum string

const (
	PostModifyDbClusterVersionEnumTwoThousandAndFourteen1031 PostModifyDbClusterVersionEnum = "2014-10-31"
)

type PostModifyDbClusterQueryParams struct {
	Action  PostModifyDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyDbClusterRequest struct {
	QueryParams PostModifyDbClusterQueryParams
	Headers     PostModifyDbClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
