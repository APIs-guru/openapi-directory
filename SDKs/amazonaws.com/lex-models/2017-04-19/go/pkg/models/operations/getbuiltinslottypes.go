package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuiltinSlotTypesLocaleEnum string

const (
	GetBuiltinSlotTypesLocaleEnumDeDe  GetBuiltinSlotTypesLocaleEnum = "de-DE"
	GetBuiltinSlotTypesLocaleEnumEnAu  GetBuiltinSlotTypesLocaleEnum = "en-AU"
	GetBuiltinSlotTypesLocaleEnumEnGb  GetBuiltinSlotTypesLocaleEnum = "en-GB"
	GetBuiltinSlotTypesLocaleEnumEnIn  GetBuiltinSlotTypesLocaleEnum = "en-IN"
	GetBuiltinSlotTypesLocaleEnumEnUs  GetBuiltinSlotTypesLocaleEnum = "en-US"
	GetBuiltinSlotTypesLocaleEnumEs419 GetBuiltinSlotTypesLocaleEnum = "es-419"
	GetBuiltinSlotTypesLocaleEnumEsEs  GetBuiltinSlotTypesLocaleEnum = "es-ES"
	GetBuiltinSlotTypesLocaleEnumEsUs  GetBuiltinSlotTypesLocaleEnum = "es-US"
	GetBuiltinSlotTypesLocaleEnumFrFr  GetBuiltinSlotTypesLocaleEnum = "fr-FR"
	GetBuiltinSlotTypesLocaleEnumFrCa  GetBuiltinSlotTypesLocaleEnum = "fr-CA"
	GetBuiltinSlotTypesLocaleEnumItIt  GetBuiltinSlotTypesLocaleEnum = "it-IT"
	GetBuiltinSlotTypesLocaleEnumJaJp  GetBuiltinSlotTypesLocaleEnum = "ja-JP"
	GetBuiltinSlotTypesLocaleEnumKoKr  GetBuiltinSlotTypesLocaleEnum = "ko-KR"
)

type GetBuiltinSlotTypesQueryParams struct {
	Locale            *GetBuiltinSlotTypesLocaleEnum `queryParam:"style=form,explode=true,name=locale"`
	MaxResults        *int64                         `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken         *string                        `queryParam:"style=form,explode=true,name=nextToken"`
	SignatureContains *string                        `queryParam:"style=form,explode=true,name=signatureContains"`
}

type GetBuiltinSlotTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBuiltinSlotTypesRequest struct {
	QueryParams GetBuiltinSlotTypesQueryParams
	Headers     GetBuiltinSlotTypesHeaders
}

type GetBuiltinSlotTypesResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GetBuiltinSlotTypesResponse *shared.GetBuiltinSlotTypesResponse
	InternalFailureException    *interface{}
	LimitExceededException      *interface{}
	StatusCode                  int64
}
