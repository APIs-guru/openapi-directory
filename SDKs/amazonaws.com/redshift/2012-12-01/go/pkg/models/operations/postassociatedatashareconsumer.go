package operations

type PostAssociateDataShareConsumerActionEnum string

const (
	PostAssociateDataShareConsumerActionEnumAssociateDataShareConsumer PostAssociateDataShareConsumerActionEnum = "AssociateDataShareConsumer"
)

type PostAssociateDataShareConsumerVersionEnum string

const (
	PostAssociateDataShareConsumerVersionEnumTwoThousandAndTwelve1201 PostAssociateDataShareConsumerVersionEnum = "2012-12-01"
)

type PostAssociateDataShareConsumerQueryParams struct {
	Action  PostAssociateDataShareConsumerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateDataShareConsumerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateDataShareConsumerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateDataShareConsumerRequest struct {
	QueryParams PostAssociateDataShareConsumerQueryParams
	Headers     PostAssociateDataShareConsumerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateDataShareConsumerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
