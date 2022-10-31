package operations

type PostModifyEndpointAccessActionEnum string

const (
	PostModifyEndpointAccessActionEnumModifyEndpointAccess PostModifyEndpointAccessActionEnum = "ModifyEndpointAccess"
)

type PostModifyEndpointAccessVersionEnum string

const (
	PostModifyEndpointAccessVersionEnumTwoThousandAndTwelve1201 PostModifyEndpointAccessVersionEnum = "2012-12-01"
)

type PostModifyEndpointAccessQueryParams struct {
	Action  PostModifyEndpointAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyEndpointAccessHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyEndpointAccessRequest struct {
	QueryParams PostModifyEndpointAccessQueryParams
	Headers     PostModifyEndpointAccessHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyEndpointAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
