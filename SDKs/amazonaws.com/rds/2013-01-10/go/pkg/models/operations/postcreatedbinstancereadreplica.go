package operations

type PostCreateDbInstanceReadReplicaActionEnum string

const (
	PostCreateDbInstanceReadReplicaActionEnumCreateDbInstanceReadReplica PostCreateDbInstanceReadReplicaActionEnum = "CreateDBInstanceReadReplica"
)

type PostCreateDbInstanceReadReplicaVersionEnum string

const (
	PostCreateDbInstanceReadReplicaVersionEnumTwoThousandAndThirteen0110 PostCreateDbInstanceReadReplicaVersionEnum = "2013-01-10"
)

type PostCreateDbInstanceReadReplicaQueryParams struct {
	Action  PostCreateDbInstanceReadReplicaActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbInstanceReadReplicaVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbInstanceReadReplicaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDbInstanceReadReplicaRequest struct {
	QueryParams PostCreateDbInstanceReadReplicaQueryParams
	Headers     PostCreateDbInstanceReadReplicaHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbInstanceReadReplicaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
