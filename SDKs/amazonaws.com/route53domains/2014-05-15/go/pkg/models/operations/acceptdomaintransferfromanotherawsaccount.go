package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum string

const (
	AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnumRoute53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccount AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum = "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount"
)

type AcceptDomainTransferFromAnotherAwsAccountHeaders struct {
	XAmzAlgorithm     *string                                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AcceptDomainTransferFromAnotherAwsAccountRequest struct {
	Headers AcceptDomainTransferFromAnotherAwsAccountHeaders
	Request shared.AcceptDomainTransferFromAnotherAwsAccountRequest `request:"mediaType=application/json"`
}

type AcceptDomainTransferFromAnotherAwsAccountResponse struct {
	AcceptDomainTransferFromAnotherAwsAccountResponse *shared.AcceptDomainTransferFromAnotherAwsAccountResponse
	ContentType                                       string
	DomainLimitExceeded                               *interface{}
	InvalidInput                                      *interface{}
	OperationLimitExceeded                            *interface{}
	StatusCode                                        int64
}
