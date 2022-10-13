package operations

import (
	"openapi/pkg/models/shared"
)

type ListCodeSigningConfigsQueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64  `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListCodeSigningConfigsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListCodeSigningConfigsRequest struct {
	QueryParams ListCodeSigningConfigsQueryParams
	Headers     ListCodeSigningConfigsHeaders
}

type ListCodeSigningConfigsResponse struct {
	ContentType                    string
	InvalidParameterValueException *interface{}
	ListCodeSigningConfigsResponse *shared.ListCodeSigningConfigsResponse
	ServiceException               *interface{}
	StatusCode                     int64
}
