package operations

import (
	"openapi/pkg/models/shared"
)

type ListComplianceSummariesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListComplianceSummariesXAmzTargetEnum string

const (
	ListComplianceSummariesXAmzTargetEnumAmazonSsmListComplianceSummaries ListComplianceSummariesXAmzTargetEnum = "AmazonSSM.ListComplianceSummaries"
)

type ListComplianceSummariesHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListComplianceSummariesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListComplianceSummariesRequest struct {
	QueryParams ListComplianceSummariesQueryParams
	Headers     ListComplianceSummariesHeaders
	Request     shared.ListComplianceSummariesRequest `request:"mediaType=application/json"`
}

type ListComplianceSummariesResponse struct {
	ContentType                   string
	InternalServerError           *interface{}
	InvalidFilter                 *interface{}
	InvalidNextToken              *interface{}
	ListComplianceSummariesResult *shared.ListComplianceSummariesResult
	StatusCode                    int64
}
