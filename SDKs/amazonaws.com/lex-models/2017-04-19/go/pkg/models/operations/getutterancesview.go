package operations

import (
	"openapi/pkg/models/shared"
)

type GetUtterancesViewPathParams struct {
	Botname string `pathParam:"style=simple,explode=false,name=botname"`
}

type GetUtterancesViewStatusTypeEnum string

const (
	GetUtterancesViewStatusTypeEnumDetected GetUtterancesViewStatusTypeEnum = "Detected"
	GetUtterancesViewStatusTypeEnumMissed   GetUtterancesViewStatusTypeEnum = "Missed"
)

type GetUtterancesViewViewEnum string

const (
	GetUtterancesViewViewEnumAggregation GetUtterancesViewViewEnum = "aggregation"
)

type GetUtterancesViewQueryParams struct {
	BotVersions []string                        `queryParam:"style=form,explode=true,name=bot_versions"`
	StatusType  GetUtterancesViewStatusTypeEnum `queryParam:"style=form,explode=true,name=status_type"`
	View        GetUtterancesViewViewEnum       `queryParam:"style=form,explode=true,name=view"`
}

type GetUtterancesViewHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUtterancesViewRequest struct {
	PathParams  GetUtterancesViewPathParams
	QueryParams GetUtterancesViewQueryParams
	Headers     GetUtterancesViewHeaders
}

type GetUtterancesViewResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	GetUtterancesViewResponse *shared.GetUtterancesViewResponse
	InternalFailureException  *interface{}
	LimitExceededException    *interface{}
	StatusCode                int64
}
