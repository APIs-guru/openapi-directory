package operations

type GetDescribeHsmConfigurationsActionEnum string

const (
	GetDescribeHsmConfigurationsActionEnumDescribeHsmConfigurations GetDescribeHsmConfigurationsActionEnum = "DescribeHsmConfigurations"
)

type GetDescribeHsmConfigurationsVersionEnum string

const (
	GetDescribeHsmConfigurationsVersionEnumTwoThousandAndTwelve1201 GetDescribeHsmConfigurationsVersionEnum = "2012-12-01"
)

type GetDescribeHsmConfigurationsQueryParams struct {
	Action                     GetDescribeHsmConfigurationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	HsmConfigurationIdentifier *string                                 `queryParam:"style=form,explode=true,name=HsmConfigurationIdentifier"`
	Marker                     *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords                 *int64                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	TagKeys                    []string                                `queryParam:"style=form,explode=true,name=TagKeys"`
	TagValues                  []string                                `queryParam:"style=form,explode=true,name=TagValues"`
	Version                    GetDescribeHsmConfigurationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeHsmConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeHsmConfigurationsRequest struct {
	QueryParams GetDescribeHsmConfigurationsQueryParams
	Headers     GetDescribeHsmConfigurationsHeaders
}

type GetDescribeHsmConfigurationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
