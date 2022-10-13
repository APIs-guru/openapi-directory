package operations

type PostPromoteReadReplicaActionEnum string

const (
	PostPromoteReadReplicaActionEnumPromoteReadReplica PostPromoteReadReplicaActionEnum = "PromoteReadReplica"
)

type PostPromoteReadReplicaVersionEnum string

const (
	PostPromoteReadReplicaVersionEnumTwoThousandAndFourteen1031 PostPromoteReadReplicaVersionEnum = "2014-10-31"
)

type PostPromoteReadReplicaQueryParams struct {
	Action  PostPromoteReadReplicaActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPromoteReadReplicaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPromoteReadReplicaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostPromoteReadReplicaRequest struct {
	QueryParams PostPromoteReadReplicaQueryParams
	Headers     PostPromoteReadReplicaHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPromoteReadReplicaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
