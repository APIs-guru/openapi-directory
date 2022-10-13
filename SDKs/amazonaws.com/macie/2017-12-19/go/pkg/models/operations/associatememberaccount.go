package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateMemberAccountXAmzTargetEnum string

const (
	AssociateMemberAccountXAmzTargetEnumMacieServiceAssociateMemberAccount AssociateMemberAccountXAmzTargetEnum = "MacieService.AssociateMemberAccount"
)

type AssociateMemberAccountHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateMemberAccountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateMemberAccountRequest struct {
	Headers AssociateMemberAccountHeaders
	Request shared.AssociateMemberAccountRequest `request:"mediaType=application/json"`
}

type AssociateMemberAccountResponse struct {
	ContentType            string
	InternalException      *interface{}
	InvalidInputException  *interface{}
	LimitExceededException *interface{}
	StatusCode             int64
}
