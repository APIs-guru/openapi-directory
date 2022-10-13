package operations

type PostModifyAquaConfigurationActionEnum string

const (
	PostModifyAquaConfigurationActionEnumModifyAquaConfiguration PostModifyAquaConfigurationActionEnum = "ModifyAquaConfiguration"
)

type PostModifyAquaConfigurationVersionEnum string

const (
	PostModifyAquaConfigurationVersionEnumTwoThousandAndTwelve1201 PostModifyAquaConfigurationVersionEnum = "2012-12-01"
)

type PostModifyAquaConfigurationQueryParams struct {
	Action  PostModifyAquaConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyAquaConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyAquaConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyAquaConfigurationRequest struct {
	QueryParams PostModifyAquaConfigurationQueryParams
	Headers     PostModifyAquaConfigurationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyAquaConfigurationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
