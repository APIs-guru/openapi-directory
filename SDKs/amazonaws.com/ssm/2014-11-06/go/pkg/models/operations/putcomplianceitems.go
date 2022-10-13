package operations

import (
	"openapi/pkg/models/shared"
)

type PutComplianceItemsXAmzTargetEnum string

const (
	PutComplianceItemsXAmzTargetEnumAmazonSsmPutComplianceItems PutComplianceItemsXAmzTargetEnum = "AmazonSSM.PutComplianceItems"
)

type PutComplianceItemsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutComplianceItemsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutComplianceItemsRequest struct {
	Headers PutComplianceItemsHeaders
	Request shared.PutComplianceItemsRequest `request:"mediaType=application/json"`
}

type PutComplianceItemsResponse struct {
	ComplianceTypeCountLimitExceededException *interface{}
	ContentType                               string
	InternalServerError                       *interface{}
	InvalidItemContentException               *interface{}
	InvalidResourceID                         *interface{}
	InvalidResourceType                       *interface{}
	ItemSizeLimitExceededException            *interface{}
	PutComplianceItemsResult                  map[string]interface{}
	StatusCode                                int64
	TotalSizeLimitExceededException           *interface{}
}
