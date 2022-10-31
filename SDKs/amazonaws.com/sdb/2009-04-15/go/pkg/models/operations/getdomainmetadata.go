package operations

type GetDomainMetadataActionEnum string

const (
	GetDomainMetadataActionEnumDomainMetadata GetDomainMetadataActionEnum = "DomainMetadata"
)

type GetDomainMetadataVersionEnum string

const (
	GetDomainMetadataVersionEnumTwoThousandAndNine0415 GetDomainMetadataVersionEnum = "2009-04-15"
)

type GetDomainMetadataQueryParams struct {
	AwsAccessKeyID   string                       `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           GetDomainMetadataActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName       string                       `queryParam:"style=form,explode=true,name=DomainName"`
	Signature        string                       `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                       `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                       `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                       `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          GetDomainMetadataVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDomainMetadataRequest struct {
	QueryParams GetDomainMetadataQueryParams
}

type GetDomainMetadataResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
