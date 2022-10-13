package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateQualificationFromWorkerXAmzTargetEnum string

const (
	DisassociateQualificationFromWorkerXAmzTargetEnumMTurkRequesterServiceV20170117DisassociateQualificationFromWorker DisassociateQualificationFromWorkerXAmzTargetEnum = "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker"
)

type DisassociateQualificationFromWorkerHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateQualificationFromWorkerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateQualificationFromWorkerRequest struct {
	Headers DisassociateQualificationFromWorkerHeaders
	Request shared.DisassociateQualificationFromWorkerRequest `request:"mediaType=application/json"`
}

type DisassociateQualificationFromWorkerResponse struct {
	ContentType                                 string
	DisassociateQualificationFromWorkerResponse map[string]interface{}
	RequestError                                *interface{}
	ServiceFault                                *interface{}
	StatusCode                                  int64
}
