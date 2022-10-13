package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountBalanceXAmzTargetEnum string

const (
	GetAccountBalanceXAmzTargetEnumMTurkRequesterServiceV20170117GetAccountBalance GetAccountBalanceXAmzTargetEnum = "MTurkRequesterServiceV20170117.GetAccountBalance"
)

type GetAccountBalanceHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAccountBalanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAccountBalanceRequest struct {
	Headers GetAccountBalanceHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetAccountBalanceResponse struct {
	ContentType               string
	GetAccountBalanceResponse *shared.GetAccountBalanceResponse
	RequestError              *interface{}
	ServiceFault              *interface{}
	StatusCode                int64
}
