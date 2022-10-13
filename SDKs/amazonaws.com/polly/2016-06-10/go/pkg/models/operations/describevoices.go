package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVoicesEngineEnum string

const (
	DescribeVoicesEngineEnumStandard DescribeVoicesEngineEnum = "standard"
	DescribeVoicesEngineEnumNeural   DescribeVoicesEngineEnum = "neural"
)

type DescribeVoicesLanguageCodeEnum string

const (
	DescribeVoicesLanguageCodeEnumArb     DescribeVoicesLanguageCodeEnum = "arb"
	DescribeVoicesLanguageCodeEnumCmnCn   DescribeVoicesLanguageCodeEnum = "cmn-CN"
	DescribeVoicesLanguageCodeEnumCyGb    DescribeVoicesLanguageCodeEnum = "cy-GB"
	DescribeVoicesLanguageCodeEnumDaDk    DescribeVoicesLanguageCodeEnum = "da-DK"
	DescribeVoicesLanguageCodeEnumDeDe    DescribeVoicesLanguageCodeEnum = "de-DE"
	DescribeVoicesLanguageCodeEnumEnAu    DescribeVoicesLanguageCodeEnum = "en-AU"
	DescribeVoicesLanguageCodeEnumEnGb    DescribeVoicesLanguageCodeEnum = "en-GB"
	DescribeVoicesLanguageCodeEnumEnGbWls DescribeVoicesLanguageCodeEnum = "en-GB-WLS"
	DescribeVoicesLanguageCodeEnumEnIn    DescribeVoicesLanguageCodeEnum = "en-IN"
	DescribeVoicesLanguageCodeEnumEnUs    DescribeVoicesLanguageCodeEnum = "en-US"
	DescribeVoicesLanguageCodeEnumEsEs    DescribeVoicesLanguageCodeEnum = "es-ES"
	DescribeVoicesLanguageCodeEnumEsMx    DescribeVoicesLanguageCodeEnum = "es-MX"
	DescribeVoicesLanguageCodeEnumEsUs    DescribeVoicesLanguageCodeEnum = "es-US"
	DescribeVoicesLanguageCodeEnumFrCa    DescribeVoicesLanguageCodeEnum = "fr-CA"
	DescribeVoicesLanguageCodeEnumFrFr    DescribeVoicesLanguageCodeEnum = "fr-FR"
	DescribeVoicesLanguageCodeEnumIsIs    DescribeVoicesLanguageCodeEnum = "is-IS"
	DescribeVoicesLanguageCodeEnumItIt    DescribeVoicesLanguageCodeEnum = "it-IT"
	DescribeVoicesLanguageCodeEnumJaJp    DescribeVoicesLanguageCodeEnum = "ja-JP"
	DescribeVoicesLanguageCodeEnumHiIn    DescribeVoicesLanguageCodeEnum = "hi-IN"
	DescribeVoicesLanguageCodeEnumKoKr    DescribeVoicesLanguageCodeEnum = "ko-KR"
	DescribeVoicesLanguageCodeEnumNbNo    DescribeVoicesLanguageCodeEnum = "nb-NO"
	DescribeVoicesLanguageCodeEnumNlNl    DescribeVoicesLanguageCodeEnum = "nl-NL"
	DescribeVoicesLanguageCodeEnumPlPl    DescribeVoicesLanguageCodeEnum = "pl-PL"
	DescribeVoicesLanguageCodeEnumPtBr    DescribeVoicesLanguageCodeEnum = "pt-BR"
	DescribeVoicesLanguageCodeEnumPtPt    DescribeVoicesLanguageCodeEnum = "pt-PT"
	DescribeVoicesLanguageCodeEnumRoRo    DescribeVoicesLanguageCodeEnum = "ro-RO"
	DescribeVoicesLanguageCodeEnumRuRu    DescribeVoicesLanguageCodeEnum = "ru-RU"
	DescribeVoicesLanguageCodeEnumSvSe    DescribeVoicesLanguageCodeEnum = "sv-SE"
	DescribeVoicesLanguageCodeEnumTrTr    DescribeVoicesLanguageCodeEnum = "tr-TR"
	DescribeVoicesLanguageCodeEnumEnNz    DescribeVoicesLanguageCodeEnum = "en-NZ"
	DescribeVoicesLanguageCodeEnumEnZa    DescribeVoicesLanguageCodeEnum = "en-ZA"
)

type DescribeVoicesQueryParams struct {
	Engine                         *DescribeVoicesEngineEnum       `queryParam:"style=form,explode=true,name=Engine"`
	IncludeAdditionalLanguageCodes *bool                           `queryParam:"style=form,explode=true,name=IncludeAdditionalLanguageCodes"`
	LanguageCode                   *DescribeVoicesLanguageCodeEnum `queryParam:"style=form,explode=true,name=LanguageCode"`
	NextToken                      *string                         `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeVoicesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeVoicesRequest struct {
	QueryParams DescribeVoicesQueryParams
	Headers     DescribeVoicesHeaders
}

type DescribeVoicesResponse struct {
	ContentType               string
	DescribeVoicesOutput      *shared.DescribeVoicesOutput
	InvalidNextTokenException *interface{}
	ServiceFailureException   *interface{}
	StatusCode                int64
}
