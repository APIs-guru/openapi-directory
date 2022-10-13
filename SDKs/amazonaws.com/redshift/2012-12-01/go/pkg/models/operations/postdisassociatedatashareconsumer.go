package operations

type PostDisassociateDataShareConsumerActionEnum string

const (
	PostDisassociateDataShareConsumerActionEnumDisassociateDataShareConsumer PostDisassociateDataShareConsumerActionEnum = "DisassociateDataShareConsumer"
)

type PostDisassociateDataShareConsumerVersionEnum string

const (
	PostDisassociateDataShareConsumerVersionEnumTwoThousandAndTwelve1201 PostDisassociateDataShareConsumerVersionEnum = "2012-12-01"
)

type PostDisassociateDataShareConsumerQueryParams struct {
	Action  PostDisassociateDataShareConsumerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateDataShareConsumerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateDataShareConsumerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisassociateDataShareConsumerRequest struct {
	QueryParams PostDisassociateDataShareConsumerQueryParams
	Headers     PostDisassociateDataShareConsumerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateDataShareConsumerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
