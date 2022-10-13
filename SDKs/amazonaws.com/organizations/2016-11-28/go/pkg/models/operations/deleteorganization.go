package operations

type DeleteOrganizationXAmzTargetEnum string

const (
	DeleteOrganizationXAmzTargetEnumAwsOrganizationsV20161128DeleteOrganization DeleteOrganizationXAmzTargetEnum = "AWSOrganizationsV20161128.DeleteOrganization"
)

type DeleteOrganizationHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteOrganizationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteOrganizationRequest struct {
	Headers DeleteOrganizationHeaders
}

type DeleteOrganizationResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ConcurrentModificationException   *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	OrganizationNotEmptyException     *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
