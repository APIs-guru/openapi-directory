package operations

type GetGetAttributesActionEnum string

const (
	GetGetAttributesActionEnumGetAttributes GetGetAttributesActionEnum = "GetAttributes"
)

type GetGetAttributesVersionEnum string

const (
	GetGetAttributesVersionEnumTwoThousandAndNine0415 GetGetAttributesVersionEnum = "2009-04-15"
)

type GetGetAttributesQueryParams struct {
	AwsAccessKeyID   string                      `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           GetGetAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AttributeNames   []string                    `queryParam:"style=form,explode=true,name=AttributeNames"`
	ConsistentRead   *bool                       `queryParam:"style=form,explode=true,name=ConsistentRead"`
	DomainName       string                      `queryParam:"style=form,explode=true,name=DomainName"`
	ItemName         string                      `queryParam:"style=form,explode=true,name=ItemName"`
	Signature        string                      `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                      `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                      `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                      `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          GetGetAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetAttributesRequest struct {
	QueryParams GetGetAttributesQueryParams
}

type GetGetAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
