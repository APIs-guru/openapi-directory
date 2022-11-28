package operations

import (
	"openapi/pkg/models/shared"
)

type PutSessionPathParams struct {
	BotAlias string `pathParam:"style=simple,explode=false,name=botAlias"`
	BotName  string `pathParam:"style=simple,explode=false,name=botName"`
	UserID   string `pathParam:"style=simple,explode=false,name=userId"`
}

type PutSessionHeaders struct {
	Accept            *string `header:"style=simple,explode=false,name=Accept"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// PutSessionRequestBodyDialogAction
// Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
type PutSessionRequestBodyDialogAction struct {
	FulfillmentState *shared.FulfillmentStateEnum  `json:"fulfillmentState,omitempty"`
	IntentName       *string                       `json:"intentName,omitempty"`
	Message          *string                       `json:"message,omitempty"`
	MessageFormat    *shared.MessageFormatTypeEnum `json:"messageFormat,omitempty"`
	SlotToElicit     *string                       `json:"slotToElicit,omitempty"`
	Slots            map[string]string             `json:"slots,omitempty"`
	Type             *shared.DialogActionTypeEnum  `json:"type,omitempty"`
}

type PutSessionRequestBody struct {
	ActiveContexts          []shared.ActiveContext             `json:"activeContexts,omitempty"`
	DialogAction            *PutSessionRequestBodyDialogAction `json:"dialogAction,omitempty"`
	RecentIntentSummaryView []shared.IntentSummary             `json:"recentIntentSummaryView,omitempty"`
	SessionAttributes       map[string]string                  `json:"sessionAttributes,omitempty"`
}

type PutSessionRequest struct {
	PathParams PutSessionPathParams
	Headers    PutSessionHeaders
	Request    PutSessionRequestBody `request:"mediaType=application/json"`
}

type PutSessionResponse struct {
	BadGatewayException       *interface{}
	BadRequestException       *interface{}
	ConflictException         *interface{}
	ContentType               string
	DependencyFailedException *interface{}
	InternalFailureException  *interface{}
	LimitExceededException    *interface{}
	NotAcceptableException    *interface{}
	NotFoundException         *interface{}
	PutSessionResponse        *shared.PutSessionResponse
	StatusCode                int64
}
