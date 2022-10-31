package operations

type PostEnableAlarmActionsActionEnum string

const (
	PostEnableAlarmActionsActionEnumEnableAlarmActions PostEnableAlarmActionsActionEnum = "EnableAlarmActions"
)

type PostEnableAlarmActionsVersionEnum string

const (
	PostEnableAlarmActionsVersionEnumTwoThousandAndTen0801 PostEnableAlarmActionsVersionEnum = "2010-08-01"
)

type PostEnableAlarmActionsQueryParams struct {
	Action  PostEnableAlarmActionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableAlarmActionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableAlarmActionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostEnableAlarmActionsRequest struct {
	QueryParams PostEnableAlarmActionsQueryParams
	Headers     PostEnableAlarmActionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableAlarmActionsResponse struct {
	ContentType string
	StatusCode  int64
}
