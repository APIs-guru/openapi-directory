package operations

type GetGetAccessKeyInfoActionEnum string

const (
	GetGetAccessKeyInfoActionEnumGetAccessKeyInfo GetGetAccessKeyInfoActionEnum = "GetAccessKeyInfo"
)

type GetGetAccessKeyInfoVersionEnum string

const (
	GetGetAccessKeyInfoVersionEnumTwoThousandAndEleven0615 GetGetAccessKeyInfoVersionEnum = "2011-06-15"
)

type GetGetAccessKeyInfoQueryParams struct {
	AccessKeyID string                         `queryParam:"style=form,explode=true,name=AccessKeyId"`
	Action      GetGetAccessKeyInfoActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version     GetGetAccessKeyInfoVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetAccessKeyInfoHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetAccessKeyInfoRequest struct {
	QueryParams GetGetAccessKeyInfoQueryParams
	Headers     GetGetAccessKeyInfoHeaders
}

type GetGetAccessKeyInfoResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
