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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
