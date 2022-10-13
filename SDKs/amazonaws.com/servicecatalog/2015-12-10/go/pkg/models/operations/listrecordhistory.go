package operations

import (
	"openapi/pkg/models/shared"
)

type ListRecordHistoryXAmzTargetEnum string

const (
	ListRecordHistoryXAmzTargetEnumAws242ServiceCatalogServiceListRecordHistory ListRecordHistoryXAmzTargetEnum = "AWS242ServiceCatalogService.ListRecordHistory"
)

type ListRecordHistoryHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRecordHistoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRecordHistoryRequest struct {
	Headers ListRecordHistoryHeaders
	Request shared.ListRecordHistoryInput `request:"mediaType=application/json"`
}

type ListRecordHistoryResponse struct {
	ContentType                string
	InvalidParametersException *interface{}
	ListRecordHistoryOutput    *shared.ListRecordHistoryOutput
	StatusCode                 int64
}
