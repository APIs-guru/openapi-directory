package operations

type PostBatchDeleteAttributesActionEnum string

const (
	PostBatchDeleteAttributesActionEnumBatchDeleteAttributes PostBatchDeleteAttributesActionEnum = "BatchDeleteAttributes"
)

type PostBatchDeleteAttributesVersionEnum string

const (
	PostBatchDeleteAttributesVersionEnumTwoThousandAndNine0415 PostBatchDeleteAttributesVersionEnum = "2009-04-15"
)

type PostBatchDeleteAttributesQueryParams struct {
	AwsAccessKeyID   string                               `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           PostBatchDeleteAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Signature        string                               `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                               `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                               `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                               `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          PostBatchDeleteAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostBatchDeleteAttributesRequest struct {
	QueryParams PostBatchDeleteAttributesQueryParams
	Request     []byte `request:"mediaType=text/xml"`
}

type PostBatchDeleteAttributesResponse struct {
	ContentType string
	StatusCode  int64
}
