package operations

import (
	"openapi/pkg/models/shared"
)

type CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum string

const (
	CancelDomainTransferToAnotherAwsAccountXAmzTargetEnumRoute53DomainsV20140515CancelDomainTransferToAnotherAwsAccount CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum = "Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount"
)

type CancelDomainTransferToAnotherAwsAccountHeaders struct {
	XAmzAlgorithm     *string                                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CancelDomainTransferToAnotherAwsAccountRequest struct {
	Headers CancelDomainTransferToAnotherAwsAccountHeaders
	Request shared.CancelDomainTransferToAnotherAwsAccountRequest `request:"mediaType=application/json"`
}

type CancelDomainTransferToAnotherAwsAccountResponse struct {
	CancelDomainTransferToAnotherAwsAccountResponse *shared.CancelDomainTransferToAnotherAwsAccountResponse
	ContentType                                     string
	InvalidInput                                    *interface{}
	OperationLimitExceeded                          *interface{}
	StatusCode                                      int64
}
