package operations

type GetDeleteHsmConfigurationActionEnum string

const (
	GetDeleteHsmConfigurationActionEnumDeleteHsmConfiguration GetDeleteHsmConfigurationActionEnum = "DeleteHsmConfiguration"
)

type GetDeleteHsmConfigurationVersionEnum string

const (
	GetDeleteHsmConfigurationVersionEnumTwoThousandAndTwelve1201 GetDeleteHsmConfigurationVersionEnum = "2012-12-01"
)

type GetDeleteHsmConfigurationQueryParams struct {
	Action                     GetDeleteHsmConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	HsmConfigurationIdentifier string                               `queryParam:"style=form,explode=true,name=HsmConfigurationIdentifier"`
	Version                    GetDeleteHsmConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteHsmConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteHsmConfigurationRequest struct {
	QueryParams GetDeleteHsmConfigurationQueryParams
	Headers     GetDeleteHsmConfigurationHeaders
}

type GetDeleteHsmConfigurationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
