package operations

import (
	"openapi/pkg/models/shared"
)

type TransferDomainToAnotherAwsAccountXAmzTargetEnum string

const (
	TransferDomainToAnotherAwsAccountXAmzTargetEnumRoute53DomainsV20140515TransferDomainToAnotherAwsAccount TransferDomainToAnotherAwsAccountXAmzTargetEnum = "Route53Domains_v20140515.TransferDomainToAnotherAwsAccount"
)

type TransferDomainToAnotherAwsAccountHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TransferDomainToAnotherAwsAccountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TransferDomainToAnotherAwsAccountRequest struct {
	Headers TransferDomainToAnotherAwsAccountHeaders
	Request shared.TransferDomainToAnotherAwsAccountRequest `request:"mediaType=application/json"`
}

type TransferDomainToAnotherAwsAccountResponse struct {
	ContentType                               string
	DuplicateRequest                          *interface{}
	InvalidInput                              *interface{}
	OperationLimitExceeded                    *interface{}
	StatusCode                                int64
	TransferDomainToAnotherAwsAccountResponse *shared.TransferDomainToAnotherAwsAccountResponse
}
