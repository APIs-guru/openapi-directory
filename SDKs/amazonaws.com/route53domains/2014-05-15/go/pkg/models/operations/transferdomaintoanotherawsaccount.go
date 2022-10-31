package operations

import (
	"openapi/pkg/models/shared"
)

type TransferDomainToAnotherAwsAccountXAmzTargetEnum string

const (
	TransferDomainToAnotherAwsAccountXAmzTargetEnumRoute53DomainsV20140515TransferDomainToAnotherAwsAccount TransferDomainToAnotherAwsAccountXAmzTargetEnum = "Route53Domains_v20140515.TransferDomainToAnotherAwsAccount"
)

type TransferDomainToAnotherAwsAccountHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        TransferDomainToAnotherAwsAccountXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
