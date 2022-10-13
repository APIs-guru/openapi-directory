package operations

type PostListDomainsActionEnum string

const (
	PostListDomainsActionEnumListDomains PostListDomainsActionEnum = "ListDomains"
)

type PostListDomainsVersionEnum string

const (
	PostListDomainsVersionEnumTwoThousandAndNine0415 PostListDomainsVersionEnum = "2009-04-15"
)

type PostListDomainsQueryParams struct {
	AwsAccessKeyID     string                     `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action             PostListDomainsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxNumberOfDomains *string                    `queryParam:"style=form,explode=true,name=MaxNumberOfDomains"`
	NextToken          *string                    `queryParam:"style=form,explode=true,name=NextToken"`
	Signature          string                     `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod    string                     `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion   string                     `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp          string                     `queryParam:"style=form,explode=true,name=Timestamp"`
	Version            PostListDomainsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListDomainsRequest struct {
	QueryParams PostListDomainsQueryParams
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListDomainsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
