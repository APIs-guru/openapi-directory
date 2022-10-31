package operations

type PostDomainMetadataActionEnum string

const (
	PostDomainMetadataActionEnumDomainMetadata PostDomainMetadataActionEnum = "DomainMetadata"
)

type PostDomainMetadataVersionEnum string

const (
	PostDomainMetadataVersionEnumTwoThousandAndNine0415 PostDomainMetadataVersionEnum = "2009-04-15"
)

type PostDomainMetadataQueryParams struct {
	AwsAccessKeyID   string                        `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           PostDomainMetadataActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Signature        string                        `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                        `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                        `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                        `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          PostDomainMetadataVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDomainMetadataRequest struct {
	QueryParams PostDomainMetadataQueryParams
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDomainMetadataResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
