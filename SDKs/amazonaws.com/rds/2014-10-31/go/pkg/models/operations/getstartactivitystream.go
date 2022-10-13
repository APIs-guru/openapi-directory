package operations

type GetStartActivityStreamActionEnum string

const (
	GetStartActivityStreamActionEnumStartActivityStream GetStartActivityStreamActionEnum = "StartActivityStream"
)

type GetStartActivityStreamModeEnum string

const (
	GetStartActivityStreamModeEnumSync  GetStartActivityStreamModeEnum = "sync"
	GetStartActivityStreamModeEnumAsync GetStartActivityStreamModeEnum = "async"
)

type GetStartActivityStreamVersionEnum string

const (
	GetStartActivityStreamVersionEnumTwoThousandAndFourteen1031 GetStartActivityStreamVersionEnum = "2014-10-31"
)

type GetStartActivityStreamQueryParams struct {
	Action                          GetStartActivityStreamActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ApplyImmediately                *bool                             `queryParam:"style=form,explode=true,name=ApplyImmediately"`
	EngineNativeAuditFieldsIncluded *bool                             `queryParam:"style=form,explode=true,name=EngineNativeAuditFieldsIncluded"`
	KmsKeyID                        string                            `queryParam:"style=form,explode=true,name=KmsKeyId"`
	Mode                            GetStartActivityStreamModeEnum    `queryParam:"style=form,explode=true,name=Mode"`
	ResourceArn                     string                            `queryParam:"style=form,explode=true,name=ResourceArn"`
	Version                         GetStartActivityStreamVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStartActivityStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStartActivityStreamRequest struct {
	QueryParams GetStartActivityStreamQueryParams
	Headers     GetStartActivityStreamHeaders
}

type GetStartActivityStreamResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
