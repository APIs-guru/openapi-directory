package operations

type GetAddPermissionPathParams struct {
	AccountNumber int64  `pathParam:"style=simple,explode=false,name=AccountNumber"`
	QueueName     string `pathParam:"style=simple,explode=false,name=QueueName"`
}

type GetAddPermissionActionEnum string

const (
	GetAddPermissionActionEnumAddPermission GetAddPermissionActionEnum = "AddPermission"
)

type GetAddPermissionVersionEnum string

const (
	GetAddPermissionVersionEnumTwoThousandAndTwelve1105 GetAddPermissionVersionEnum = "2012-11-05"
)

type GetAddPermissionQueryParams struct {
	AwsAccountIds []string                    `queryParam:"style=form,explode=true,name=AWSAccountIds"`
	Action        GetAddPermissionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Actions       []string                    `queryParam:"style=form,explode=true,name=Actions"`
	Label         string                      `queryParam:"style=form,explode=true,name=Label"`
	Version       GetAddPermissionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAddPermissionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAddPermissionRequest struct {
	PathParams  GetAddPermissionPathParams
	QueryParams GetAddPermissionQueryParams
	Headers     GetAddPermissionHeaders
}

type GetAddPermissionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
