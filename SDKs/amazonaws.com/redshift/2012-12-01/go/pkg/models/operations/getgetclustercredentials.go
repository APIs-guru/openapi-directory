package operations

type GetGetClusterCredentialsActionEnum string

const (
	GetGetClusterCredentialsActionEnumGetClusterCredentials GetGetClusterCredentialsActionEnum = "GetClusterCredentials"
)

type GetGetClusterCredentialsVersionEnum string

const (
	GetGetClusterCredentialsVersionEnumTwoThousandAndTwelve1201 GetGetClusterCredentialsVersionEnum = "2012-12-01"
)

type GetGetClusterCredentialsQueryParams struct {
	Action            GetGetClusterCredentialsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoCreate        *bool                               `queryParam:"style=form,explode=true,name=AutoCreate"`
	ClusterIdentifier string                              `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	DbGroups          []string                            `queryParam:"style=form,explode=true,name=DbGroups"`
	DbName            *string                             `queryParam:"style=form,explode=true,name=DbName"`
	DbUser            string                              `queryParam:"style=form,explode=true,name=DbUser"`
	DurationSeconds   *int64                              `queryParam:"style=form,explode=true,name=DurationSeconds"`
	Version           GetGetClusterCredentialsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetClusterCredentialsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetClusterCredentialsRequest struct {
	QueryParams GetGetClusterCredentialsQueryParams
	Headers     GetGetClusterCredentialsHeaders
}

type GetGetClusterCredentialsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
