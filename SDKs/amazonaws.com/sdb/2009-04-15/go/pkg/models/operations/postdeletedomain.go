package operations

type PostDeleteDomainActionEnum string

const (
	PostDeleteDomainActionEnumDeleteDomain PostDeleteDomainActionEnum = "DeleteDomain"
)

type PostDeleteDomainVersionEnum string

const (
	PostDeleteDomainVersionEnumTwoThousandAndNine0415 PostDeleteDomainVersionEnum = "2009-04-15"
)

type PostDeleteDomainQueryParams struct {
	AwsAccessKeyID   string                      `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           PostDeleteDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Signature        string                      `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                      `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                      `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                      `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          PostDeleteDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDomainRequest struct {
	QueryParams PostDeleteDomainQueryParams
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
