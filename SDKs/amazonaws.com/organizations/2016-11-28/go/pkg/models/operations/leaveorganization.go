package operations




type LeaveOrganizationXAmzTargetEnum string

const (
    LeaveOrganizationXAmzTargetEnumAwsOrganizationsV20161128LeaveOrganization LeaveOrganizationXAmzTargetEnum = "AWSOrganizationsV20161128.LeaveOrganization"
)


type LeaveOrganizationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget LeaveOrganizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type LeaveOrganizationRequest struct {
    Headers LeaveOrganizationHeaders 
    
}

type LeaveOrganizationResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    AccountNotFoundException *interface{} 
    ConcurrentModificationException *interface{} 
    ConstraintViolationException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    MasterCannotLeaveOrganizationException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

