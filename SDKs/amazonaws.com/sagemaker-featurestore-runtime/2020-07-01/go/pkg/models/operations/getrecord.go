package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecordPathParams struct {
	FeatureGroupName string `pathParam:"style=simple,explode=false,name=FeatureGroupName"`
}

type GetRecordQueryParams struct {
	FeatureName                   []string `queryParam:"style=form,explode=true,name=FeatureName"`
	RecordIdentifierValueAsString string   `queryParam:"style=form,explode=true,name=RecordIdentifierValueAsString"`
}

type GetRecordHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRecordRequest struct {
	PathParams  GetRecordPathParams
	QueryParams GetRecordQueryParams
	Headers     GetRecordHeaders
}

type GetRecordResponse struct {
	AccessForbidden    *interface{}
	ContentType        string
	GetRecordResponse  *shared.GetRecordResponse
	InternalFailure    *interface{}
	ResourceNotFound   *interface{}
	ServiceUnavailable *interface{}
	StatusCode         int64
	ValidationError    *interface{}
}
