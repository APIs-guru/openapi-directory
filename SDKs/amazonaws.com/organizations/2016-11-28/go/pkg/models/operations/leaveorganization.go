package operations

type LeaveOrganizationXAmzTargetEnum string

const (
	LeaveOrganizationXAmzTargetEnumAwsOrganizationsV20161128LeaveOrganization LeaveOrganizationXAmzTargetEnum = "AWSOrganizationsV20161128.LeaveOrganization"
)

type LeaveOrganizationHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        LeaveOrganizationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type LeaveOrganizationRequest struct {
	Headers LeaveOrganizationHeaders
}

type LeaveOrganizationResponse struct {
	AwsOrganizationsNotInUseException      *interface{}
	AccessDeniedException                  *interface{}
	AccountNotFoundException               *interface{}
	ConcurrentModificationException        *interface{}
	ConstraintViolationException           *interface{}
	ContentType                            string
	InvalidInputException                  *interface{}
	MasterCannotLeaveOrganizationException *interface{}
	ServiceException                       *interface{}
	StatusCode                             int64
	TooManyRequestsException               *interface{}
}
