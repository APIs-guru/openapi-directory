package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateQualificationFromWorkerXAmzTargetEnum string

const (
	DisassociateQualificationFromWorkerXAmzTargetEnumMTurkRequesterServiceV20170117DisassociateQualificationFromWorker DisassociateQualificationFromWorkerXAmzTargetEnum = "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker"
)

type DisassociateQualificationFromWorkerHeaders struct {
	XAmzAlgorithm     *string                                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateQualificationFromWorkerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
