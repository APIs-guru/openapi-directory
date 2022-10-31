package operations

import (
"openapi/pkg/models/shared")


type RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum string

const (
    RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnumRoute53DomainsV20140515RejectDomainTransferFromAnotherAwsAccount RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum = "Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount"
)


type RejectDomainTransferFromAnotherAwsAccountHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RejectDomainTransferFromAnotherAwsAccountRequest struct {
    Headers RejectDomainTransferFromAnotherAwsAccountHeaders 
    Request shared.RejectDomainTransferFromAnotherAwsAccountRequest `request:"mediaType=application/json"`
    
}

type RejectDomainTransferFromAnotherAwsAccountResponse struct {
    ContentType string 
    InvalidInput *interface{} 
    OperationLimitExceeded *interface{} 
    RejectDomainTransferFromAnotherAwsAccountResponse *shared.RejectDomainTransferFromAnotherAwsAccountResponse 
    StatusCode int64 
    
}

