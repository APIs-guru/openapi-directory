package operations

import (
	"openapi/pkg/models/shared"
)

type PutRecordPathParams struct {
	FeatureGroupName string `pathParam:"style=simple,explode=false,name=FeatureGroupName"`
}

type PutRecordHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
