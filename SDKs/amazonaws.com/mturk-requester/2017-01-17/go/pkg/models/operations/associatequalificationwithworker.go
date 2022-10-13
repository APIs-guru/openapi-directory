package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateQualificationWithWorkerXAmzTargetEnum string

const (
	AssociateQualificationWithWorkerXAmzTargetEnumMTurkRequesterServiceV20170117AssociateQualificationWithWorker AssociateQualificationWithWorkerXAmzTargetEnum = "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker"
)

type AssociateQualificationWithWorkerHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateQualificationWithWorkerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateQualificationWithWorkerRequest struct {
	Headers AssociateQualificationWithWorkerHeaders
	Request shared.AssociateQualificationWithWorkerRequest `request:"mediaType=application/json"`
}

type AssociateQualificationWithWorkerResponse struct {
	AssociateQualificationWithWorkerResponse map[string]interface{}
	ContentType                              string
	RequestError                             *interface{}
	ServiceFault                             *interface{}
	StatusCode                               int64
}
