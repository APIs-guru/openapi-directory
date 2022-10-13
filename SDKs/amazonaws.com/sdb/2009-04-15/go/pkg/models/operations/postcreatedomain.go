package operations

type PostCreateDomainActionEnum string

const (
	PostCreateDomainActionEnumCreateDomain PostCreateDomainActionEnum = "CreateDomain"
)

type PostCreateDomainVersionEnum string

const (
	PostCreateDomainVersionEnumTwoThousandAndNine0415 PostCreateDomainVersionEnum = "2009-04-15"
)

type PostCreateDomainQueryParams struct {
	AwsAccessKeyID   string                      `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           PostCreateDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Signature        string                      `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                      `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                      `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                      `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          PostCreateDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDomainRequest struct {
	QueryParams PostCreateDomainQueryParams
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
