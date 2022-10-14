package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetServiceGraphQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetServiceGraphHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetServiceGraphRequestBody struct {
	EndTime   time.Time `json:"EndTime"`
	GroupArn  *string   `json:"GroupARN,omitempty"`
	GroupName *string   `json:"GroupName,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
	StartTime time.Time `json:"StartTime"`
}

type GetServiceGraphRequest struct {
	QueryParams GetServiceGraphQueryParams
	Headers     GetServiceGraphHeaders
	Request     GetServiceGraphRequestBody `request:"mediaType=application/json"`
}

type GetServiceGraphResponse struct {
	ContentType             string
	GetServiceGraphResult   *shared.GetServiceGraphResult
	InvalidRequestException *interface{}
	StatusCode              int64
	ThrottledException      *interface{}
}
