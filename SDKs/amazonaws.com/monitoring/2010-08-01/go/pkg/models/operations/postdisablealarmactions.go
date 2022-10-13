package operations

type PostDisableAlarmActionsActionEnum string

const (
	PostDisableAlarmActionsActionEnumDisableAlarmActions PostDisableAlarmActionsActionEnum = "DisableAlarmActions"
)

type PostDisableAlarmActionsVersionEnum string

const (
	PostDisableAlarmActionsVersionEnumTwoThousandAndTen0801 PostDisableAlarmActionsVersionEnum = "2010-08-01"
)

type PostDisableAlarmActionsQueryParams struct {
	Action  PostDisableAlarmActionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisableAlarmActionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisableAlarmActionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisableAlarmActionsRequest struct {
	QueryParams PostDisableAlarmActionsQueryParams
	Headers     PostDisableAlarmActionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisableAlarmActionsResponse struct {
	ContentType string
	StatusCode  int64
}
