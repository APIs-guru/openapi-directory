package operations

type GetRejectDataShareActionEnum string

const (
	GetRejectDataShareActionEnumRejectDataShare GetRejectDataShareActionEnum = "RejectDataShare"
)

type GetRejectDataShareVersionEnum string

const (
	GetRejectDataShareVersionEnumTwoThousandAndTwelve1201 GetRejectDataShareVersionEnum = "2012-12-01"
)

type GetRejectDataShareQueryParams struct {
	Action       GetRejectDataShareActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DataShareArn string                        `queryParam:"style=form,explode=true,name=DataShareArn"`
	Version      GetRejectDataShareVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRejectDataShareHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRejectDataShareRequest struct {
	QueryParams GetRejectDataShareQueryParams
	Headers     GetRejectDataShareHeaders
}

type GetRejectDataShareResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
