package operations

import (
	"openapi/pkg/models/shared"
)

type GetParticipantsByConvIDPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type GetParticipantsByConvIDTypeEnum string

const (
	GetParticipantsByConvIDTypeEnumRegular   GetParticipantsByConvIDTypeEnum = "REGULAR"
	GetParticipantsByConvIDTypeEnumModerator GetParticipantsByConvIDTypeEnum = "MODERATOR"
	GetParticipantsByConvIDTypeEnumGuest     GetParticipantsByConvIDTypeEnum = "GUEST"
	GetParticipantsByConvIDTypeEnumFormer    GetParticipantsByConvIDTypeEnum = "FORMER"
	GetParticipantsByConvIDTypeEnumBot       GetParticipantsByConvIDTypeEnum = "BOT"
)

type GetParticipantsByConvIDQueryParams struct {
	Name          *string                          `queryParam:"style=form,explode=true,name=name"`
	PageSize      float64                          `queryParam:"style=form,explode=true,name=pageSize"`
	SearchPointer *string                          `queryParam:"style=form,explode=true,name=searchPointer"`
	Type          *GetParticipantsByConvIDTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetParticipantsByConvIDSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetParticipantsByConvIDRequest struct {
	PathParams  GetParticipantsByConvIDPathParams
	QueryParams GetParticipantsByConvIDQueryParams
	Security    GetParticipantsByConvIDSecurity
}

type GetParticipantsByConvIDResponse struct {
	Body                          []byte
	ContentType                   string
	ConversationParticipantsLists []interface{}
	StatusCode                    int64
}
