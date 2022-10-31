package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateSavingsPlanHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateSavingsPlanRequestBody struct {
	ClientToken           *string           `json:"clientToken,omitempty"`
	Commitment            string            `json:"commitment"`
	PurchaseTime          *time.Time        `json:"purchaseTime,omitempty"`
	SavingsPlanOfferingID string            `json:"savingsPlanOfferingId"`
	Tags                  map[string]string `json:"tags,omitempty"`
	UpfrontPaymentAmount  *string           `json:"upfrontPaymentAmount,omitempty"`
}

type CreateSavingsPlanRequest struct {
	Headers CreateSavingsPlanHeaders
	Request CreateSavingsPlanRequestBody `request:"mediaType=application/json"`
}

type CreateSavingsPlanResponse struct {
	ContentType                   string
	CreateSavingsPlanResponse     *shared.CreateSavingsPlanResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
