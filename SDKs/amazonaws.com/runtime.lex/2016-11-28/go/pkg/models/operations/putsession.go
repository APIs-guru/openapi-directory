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
	Accept            *string `header:"name=Accept"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutSessionRequestBodyDialogAction struct {
	FulfillmentState *shared.FulfillmentStateEnum  `json:"fulfillmentState"`
	IntentName       *string                       `json:"intentName"`
	Message          *string                       `json:"message"`
	MessageFormat    *shared.MessageFormatTypeEnum `json:"messageFormat"`
	SlotToElicit     *string                       `json:"slotToElicit"`
	Slots            map[string]string             `json:"slots"`
	Type             *shared.DialogActionTypeEnum  `json:"type"`
}

type PutSessionRequestBody struct {
	ActiveContexts          []shared.ActiveContext             `json:"activeContexts"`
	DialogAction            *PutSessionRequestBodyDialogAction `json:"dialogAction"`
	RecentIntentSummaryView []shared.IntentSummary             `json:"recentIntentSummaryView"`
	SessionAttributes       map[string]string                  `json:"sessionAttributes"`
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
