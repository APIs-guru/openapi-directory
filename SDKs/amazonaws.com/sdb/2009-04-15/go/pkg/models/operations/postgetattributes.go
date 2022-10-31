package operations

type PostGetAttributesActionEnum string

const (
	PostGetAttributesActionEnumGetAttributes PostGetAttributesActionEnum = "GetAttributes"
)

type PostGetAttributesVersionEnum string

const (
	PostGetAttributesVersionEnumTwoThousandAndNine0415 PostGetAttributesVersionEnum = "2009-04-15"
)

type PostGetAttributesQueryParams struct {
	AwsAccessKeyID   string                       `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           PostGetAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Signature        string                       `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                       `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                       `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                       `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          PostGetAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetAttributesRequest struct {
	QueryParams PostGetAttributesQueryParams
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
