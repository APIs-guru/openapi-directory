package operations

import (
	"openapi/pkg/models/shared"
)

type PutRecordPathParams struct {
	FeatureGroupName string `pathParam:"style=simple,explode=false,name=FeatureGroupName"`
}

type PutRecordHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutRecordRequestBody struct {
	Record []shared.FeatureValue `json:"Record"`
}

type PutRecordRequest struct {
	PathParams PutRecordPathParams
	Headers    PutRecordHeaders
	Request    PutRecordRequestBody `request:"mediaType=application/json"`
}

type PutRecordResponse struct {
	AccessForbidden    *interface{}
	ContentType        string
	InternalFailure    *interface{}
	ServiceUnavailable *interface{}
	StatusCode         int64
	ValidationError    *interface{}
}
