package operations

import (
	"openapi/pkg/models/shared"
)

type PutComplianceItemsXAmzTargetEnum string

const (
	PutComplianceItemsXAmzTargetEnumAmazonSsmPutComplianceItems PutComplianceItemsXAmzTargetEnum = "AmazonSSM.PutComplianceItems"
)

type PutComplianceItemsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutComplianceItemsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
