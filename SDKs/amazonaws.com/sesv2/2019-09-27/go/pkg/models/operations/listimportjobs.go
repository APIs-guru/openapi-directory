package operations

import (
	"openapi/pkg/models/shared"
)

type ListImportJobsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListImportJobsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListImportJobsRequestBodyImportDestinationTypeEnum string

const (
	ListImportJobsRequestBodyImportDestinationTypeEnumSuppressionList ListImportJobsRequestBodyImportDestinationTypeEnum = "SUPPRESSION_LIST"
	ListImportJobsRequestBodyImportDestinationTypeEnumContactList     ListImportJobsRequestBodyImportDestinationTypeEnum = "CONTACT_LIST"
)

type ListImportJobsRequestBody struct {
	ImportDestinationType *ListImportJobsRequestBodyImportDestinationTypeEnum `json:"ImportDestinationType"`
}

type ListImportJobsRequest struct {
	QueryParams ListImportJobsQueryParams
	Headers     ListImportJobsHeaders
	Request     ListImportJobsRequestBody `request:"mediaType=application/json"`
}

type ListImportJobsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	ListImportJobsResponse   *shared.ListImportJobsResponse
	StatusCode               int64
	TooManyRequestsException *interface{}
}
