package operations

type GetCreateGlobalClusterActionEnum string

const (
	GetCreateGlobalClusterActionEnumCreateGlobalCluster GetCreateGlobalClusterActionEnum = "CreateGlobalCluster"
)

type GetCreateGlobalClusterVersionEnum string

const (
	GetCreateGlobalClusterVersionEnumTwoThousandAndFourteen1031 GetCreateGlobalClusterVersionEnum = "2014-10-31"
)

type GetCreateGlobalClusterQueryParams struct {
	Action                    GetCreateGlobalClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DatabaseName              *string                           `queryParam:"style=form,explode=true,name=DatabaseName"`
	DeletionProtection        *bool                             `queryParam:"style=form,explode=true,name=DeletionProtection"`
	Engine                    *string                           `queryParam:"style=form,explode=true,name=Engine"`
	EngineVersion             *string                           `queryParam:"style=form,explode=true,name=EngineVersion"`
	GlobalClusterIdentifier   *string                           `queryParam:"style=form,explode=true,name=GlobalClusterIdentifier"`
	SourceDbClusterIdentifier *string                           `queryParam:"style=form,explode=true,name=SourceDBClusterIdentifier"`
	StorageEncrypted          *bool                             `queryParam:"style=form,explode=true,name=StorageEncrypted"`
	Version                   GetCreateGlobalClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateGlobalClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateGlobalClusterRequest struct {
	QueryParams GetCreateGlobalClusterQueryParams
	Headers     GetCreateGlobalClusterHeaders
}

type GetCreateGlobalClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
