package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAssociationXAmzTargetEnum string

const (
	UpdateAssociationXAmzTargetEnumAmazonSsmUpdateAssociation UpdateAssociationXAmzTargetEnum = "AmazonSSM.UpdateAssociation"
)

type UpdateAssociationHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAssociationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAssociationRequest struct {
	Headers UpdateAssociationHeaders
	Request shared.UpdateAssociationRequest `request:"mediaType=application/json"`
}

type UpdateAssociationResponse struct {
	AssociationDoesNotExist         *interface{}
	AssociationVersionLimitExceeded *interface{}
	ContentType                     string
	InternalServerError             *interface{}
	InvalidAssociationVersion       *interface{}
	InvalidDocument                 *interface{}
	InvalidDocumentVersion          *interface{}
	InvalidOutputLocation           *interface{}
	InvalidParameters               *interface{}
	InvalidSchedule                 *interface{}
	InvalidTarget                   *interface{}
	InvalidUpdate                   *interface{}
	StatusCode                      int64
	TooManyUpdates                  *interface{}
	UpdateAssociationResult         *shared.UpdateAssociationResult
}
