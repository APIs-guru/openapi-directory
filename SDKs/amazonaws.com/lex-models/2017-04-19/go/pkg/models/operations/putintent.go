package operations

import (
	"openapi/pkg/models/shared"
)

type PutIntentPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PutIntentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// PutIntentRequestBodyConclusionStatement
// A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
type PutIntentRequestBodyConclusionStatement struct {
	Messages     []shared.Message `json:"messages,omitempty"`
	ResponseCard *string          `json:"responseCard,omitempty"`
}

// PutIntentRequestBodyConfirmationPrompt
// Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
type PutIntentRequestBodyConfirmationPrompt struct {
	MaxAttempts  *int64           `json:"maxAttempts,omitempty"`
	Messages     []shared.Message `json:"messages,omitempty"`
	ResponseCard *string          `json:"responseCard,omitempty"`
}

// PutIntentRequestBodyDialogCodeHook
// Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
type PutIntentRequestBodyDialogCodeHook struct {
	MessageVersion *string `json:"messageVersion,omitempty"`
	URI            *string `json:"uri,omitempty"`
}

// PutIntentRequestBodyFollowUpPrompt
// A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
type PutIntentRequestBodyFollowUpPrompt struct {
	Prompt             *shared.Prompt    `json:"prompt,omitempty"`
	RejectionStatement *shared.Statement `json:"rejectionStatement,omitempty"`
}

// PutIntentRequestBodyFulfillmentActivity
// <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul>
type PutIntentRequestBodyFulfillmentActivity struct {
	CodeHook *shared.CodeHook                    `json:"codeHook,omitempty"`
	Type     *shared.FulfillmentActivityTypeEnum `json:"type,omitempty"`
}

// PutIntentRequestBodyKendraConfiguration
// Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html"> AMAZON.KendraSearchIntent</a>.
type PutIntentRequestBodyKendraConfiguration struct {
	KendraIndex       *string `json:"kendraIndex,omitempty"`
	QueryFilterString *string `json:"queryFilterString,omitempty"`
	Role              *string `json:"role,omitempty"`
}

// PutIntentRequestBodyRejectionStatement
// A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
type PutIntentRequestBodyRejectionStatement struct {
	Messages     []shared.Message `json:"messages,omitempty"`
	ResponseCard *string          `json:"responseCard,omitempty"`
}

type PutIntentRequestBody struct {
	Checksum              *string                                  `json:"checksum,omitempty"`
	ConclusionStatement   *PutIntentRequestBodyConclusionStatement `json:"conclusionStatement,omitempty"`
	ConfirmationPrompt    *PutIntentRequestBodyConfirmationPrompt  `json:"confirmationPrompt,omitempty"`
	CreateVersion         *bool                                    `json:"createVersion,omitempty"`
	Description           *string                                  `json:"description,omitempty"`
	DialogCodeHook        *PutIntentRequestBodyDialogCodeHook      `json:"dialogCodeHook,omitempty"`
	FollowUpPrompt        *PutIntentRequestBodyFollowUpPrompt      `json:"followUpPrompt,omitempty"`
	FulfillmentActivity   *PutIntentRequestBodyFulfillmentActivity `json:"fulfillmentActivity,omitempty"`
	InputContexts         []shared.InputContext                    `json:"inputContexts,omitempty"`
	KendraConfiguration   *PutIntentRequestBodyKendraConfiguration `json:"kendraConfiguration,omitempty"`
	OutputContexts        []shared.OutputContext                   `json:"outputContexts,omitempty"`
	ParentIntentSignature *string                                  `json:"parentIntentSignature,omitempty"`
	RejectionStatement    *PutIntentRequestBodyRejectionStatement  `json:"rejectionStatement,omitempty"`
	SampleUtterances      []string                                 `json:"sampleUtterances,omitempty"`
	Slots                 []shared.Slot                            `json:"slots,omitempty"`
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
