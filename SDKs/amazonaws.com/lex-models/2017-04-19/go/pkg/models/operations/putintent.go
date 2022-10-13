package operations

import (
	"openapi/pkg/models/shared"
)

type PutIntentPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PutIntentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutIntentRequestBodyConclusionStatement struct {
	Messages     []shared.Message `json:"messages"`
	ResponseCard *string          `json:"responseCard"`
}

type PutIntentRequestBodyConfirmationPrompt struct {
	MaxAttempts  *int64           `json:"maxAttempts"`
	Messages     []shared.Message `json:"messages"`
	ResponseCard *string          `json:"responseCard"`
}

type PutIntentRequestBodyDialogCodeHook struct {
	MessageVersion *string `json:"messageVersion"`
	URI            *string `json:"uri"`
}

type PutIntentRequestBodyFollowUpPrompt struct {
	Prompt             *shared.Prompt    `json:"prompt"`
	RejectionStatement *shared.Statement `json:"rejectionStatement"`
}

type PutIntentRequestBodyFulfillmentActivity struct {
	CodeHook *shared.CodeHook                    `json:"codeHook"`
	Type     *shared.FulfillmentActivityTypeEnum `json:"type"`
}

type PutIntentRequestBodyKendraConfiguration struct {
	KendraIndex       *string `json:"kendraIndex"`
	QueryFilterString *string `json:"queryFilterString"`
	Role              *string `json:"role"`
}

type PutIntentRequestBodyRejectionStatement struct {
	Messages     []shared.Message `json:"messages"`
	ResponseCard *string          `json:"responseCard"`
}

type PutIntentRequestBody struct {
	Checksum              *string                                  `json:"checksum"`
	ConclusionStatement   *PutIntentRequestBodyConclusionStatement `json:"conclusionStatement"`
	ConfirmationPrompt    *PutIntentRequestBodyConfirmationPrompt  `json:"confirmationPrompt"`
	CreateVersion         *bool                                    `json:"createVersion"`
	Description           *string                                  `json:"description"`
	DialogCodeHook        *PutIntentRequestBodyDialogCodeHook      `json:"dialogCodeHook"`
	FollowUpPrompt        *PutIntentRequestBodyFollowUpPrompt      `json:"followUpPrompt"`
	FulfillmentActivity   *PutIntentRequestBodyFulfillmentActivity `json:"fulfillmentActivity"`
	InputContexts         []shared.InputContext                    `json:"inputContexts"`
	KendraConfiguration   *PutIntentRequestBodyKendraConfiguration `json:"kendraConfiguration"`
	OutputContexts        []shared.OutputContext                   `json:"outputContexts"`
	ParentIntentSignature *string                                  `json:"parentIntentSignature"`
	RejectionStatement    *PutIntentRequestBodyRejectionStatement  `json:"rejectionStatement"`
	SampleUtterances      []string                                 `json:"sampleUtterances"`
	Slots                 []shared.Slot                            `json:"slots"`
}

type PutIntentRequest struct {
	PathParams PutIntentPathParams
	Headers    PutIntentHeaders
	Request    PutIntentRequestBody `request:"mediaType=application/json"`
}

type PutIntentResponse struct {
	BadRequestException         *interface{}
	ConflictException           *interface{}
	ContentType                 string
	InternalFailureException    *interface{}
	LimitExceededException      *interface{}
	PreconditionFailedException *interface{}
	PutIntentResponse           *shared.PutIntentResponse
	StatusCode                  int64
}
