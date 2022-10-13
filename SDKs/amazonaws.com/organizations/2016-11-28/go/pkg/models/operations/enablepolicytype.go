package operations

import (
	"openapi/pkg/models/shared"
)

type EnablePolicyTypeXAmzTargetEnum string

const (
	EnablePolicyTypeXAmzTargetEnumAwsOrganizationsV20161128EnablePolicyType EnablePolicyTypeXAmzTargetEnum = "AWSOrganizationsV20161128.EnablePolicyType"
)

type EnablePolicyTypeHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnablePolicyTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnablePolicyTypeRequest struct {
	Headers EnablePolicyTypeHeaders
	Request shared.EnablePolicyTypeRequest `request:"mediaType=application/json"`
}

type EnablePolicyTypeResponse struct {
	AwsOrganizationsNotInUseException              *interface{}
	AccessDeniedException                          *interface{}
	ConcurrentModificationException                *interface{}
	ConstraintViolationException                   *interface{}
	ContentType                                    string
	EnablePolicyTypeResponse                       *shared.EnablePolicyTypeResponse
	InvalidInputException                          *interface{}
	PolicyChangesInProgressException               *interface{}
	PolicyTypeAlreadyEnabledException              *interface{}
	PolicyTypeNotAvailableForOrganizationException *interface{}
	RootNotFoundException                          *interface{}
	ServiceException                               *interface{}
	StatusCode                                     int64
	TooManyRequestsException                       *interface{}
	UnsupportedAPIEndpointException                *interface{}
}
