package operations

import (
	"openapi/pkg/models/shared"
)

type ListBonusPaymentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListBonusPaymentsXAmzTargetEnum string

const (
	ListBonusPaymentsXAmzTargetEnumMTurkRequesterServiceV20170117ListBonusPayments ListBonusPaymentsXAmzTargetEnum = "MTurkRequesterServiceV20170117.ListBonusPayments"
)

type ListBonusPaymentsHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListBonusPaymentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListBonusPaymentsRequest struct {
	QueryParams ListBonusPaymentsQueryParams
	Headers     ListBonusPaymentsHeaders
	Request     shared.ListBonusPaymentsRequest `request:"mediaType=application/json"`
}

type ListBonusPaymentsResponse struct {
	ContentType               string
	ListBonusPaymentsResponse *shared.ListBonusPaymentsResponse
	RequestError              *interface{}
	ServiceFault              *interface{}
	StatusCode                int64
}
