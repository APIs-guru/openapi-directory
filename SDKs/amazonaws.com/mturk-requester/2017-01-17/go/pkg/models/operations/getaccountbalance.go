package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountBalanceXAmzTargetEnum string

const (
	GetAccountBalanceXAmzTargetEnumMTurkRequesterServiceV20170117GetAccountBalance GetAccountBalanceXAmzTargetEnum = "MTurkRequesterServiceV20170117.GetAccountBalance"
)

type GetAccountBalanceHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAccountBalanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
