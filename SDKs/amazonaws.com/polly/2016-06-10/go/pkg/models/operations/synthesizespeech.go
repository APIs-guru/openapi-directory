package operations

import (
	"openapi/pkg/models/shared"
)

type SynthesizeSpeechHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SynthesizeSpeechRequestBodyEngineEnum string

const (
	SynthesizeSpeechRequestBodyEngineEnumStandard SynthesizeSpeechRequestBodyEngineEnum = "standard"
	SynthesizeSpeechRequestBodyEngineEnumNeural   SynthesizeSpeechRequestBodyEngineEnum = "neural"
)

type SynthesizeSpeechRequestBodyLanguageCodeEnum string

const (
	SynthesizeSpeechRequestBodyLanguageCodeEnumArb     SynthesizeSpeechRequestBodyLanguageCodeEnum = "arb"
	SynthesizeSpeechRequestBodyLanguageCodeEnumCmnCn   SynthesizeSpeechRequestBodyLanguageCodeEnum = "cmn-CN"
	SynthesizeSpeechRequestBodyLanguageCodeEnumCyGb    SynthesizeSpeechRequestBodyLanguageCodeEnum = "cy-GB"
	SynthesizeSpeechRequestBodyLanguageCodeEnumDaDk    SynthesizeSpeechRequestBodyLanguageCodeEnum = "da-DK"
	SynthesizeSpeechRequestBodyLanguageCodeEnumDeDe    SynthesizeSpeechRequestBodyLanguageCodeEnum = "de-DE"
	SynthesizeSpeechRequestBodyLanguageCodeEnumEnAu    SynthesizeSpeechRequestBodyLanguageCodeEnum = "en-AU"
	SynthesizeSpeechRequestBodyLanguageCodeEnumEnGb    SynthesizeSpeechRequestBodyLanguageCodeEnum = "en-GB"
	SynthesizeSpeechRequestBodyLanguageCodeEnumEnGbWls SynthesizeSpeechRequestBodyLanguageCodeEnum = "en-GB-WLS"
	SynthesizeSpeechRequestBodyLanguageCodeEnumEnIn    SynthesizeSpeechRequestBodyLanguageCodeEnum = "en-IN"
	SynthesizeSpeechRequestBodyLanguageCodeEnumEnUs    SynthesizeSpeechRequestBodyLanguageCodeEnum = "en-US"
	SynthesizeSpeechRequestBodyLanguageCodeEnumEsEs    SynthesizeSpeechRequestBodyLanguageCodeEnum = "es-ES"
	SynthesizeSpeechRequestBodyLanguageCodeEnumEsMx    SynthesizeSpeechRequestBodyLanguageCodeEnum = "es-MX"
	SynthesizeSpeechRequestBodyLanguageCodeEnumEsUs    SynthesizeSpeechRequestBodyLanguageCodeEnum = "es-US"
	SynthesizeSpeechRequestBodyLanguageCodeEnumFrCa    SynthesizeSpeechRequestBodyLanguageCodeEnum = "fr-CA"
	SynthesizeSpeechRequestBodyLanguageCodeEnumFrFr    SynthesizeSpeechRequestBodyLanguageCodeEnum = "fr-FR"
	SynthesizeSpeechRequestBodyLanguageCodeEnumIsIs    SynthesizeSpeechRequestBodyLanguageCodeEnum = "is-IS"
	SynthesizeSpeechRequestBodyLanguageCodeEnumItIt    SynthesizeSpeechRequestBodyLanguageCodeEnum = "it-IT"
	SynthesizeSpeechRequestBodyLanguageCodeEnumJaJp    SynthesizeSpeechRequestBodyLanguageCodeEnum = "ja-JP"
	SynthesizeSpeechRequestBodyLanguageCodeEnumHiIn    SynthesizeSpeechRequestBodyLanguageCodeEnum = "hi-IN"
	SynthesizeSpeechRequestBodyLanguageCodeEnumKoKr    SynthesizeSpeechRequestBodyLanguageCodeEnum = "ko-KR"
	SynthesizeSpeechRequestBodyLanguageCodeEnumNbNo    SynthesizeSpeechRequestBodyLanguageCodeEnum = "nb-NO"
	SynthesizeSpeechRequestBodyLanguageCodeEnumNlNl    SynthesizeSpeechRequestBodyLanguageCodeEnum = "nl-NL"
	SynthesizeSpeechRequestBodyLanguageCodeEnumPlPl    SynthesizeSpeechRequestBodyLanguageCodeEnum = "pl-PL"
	SynthesizeSpeechRequestBodyLanguageCodeEnumPtBr    SynthesizeSpeechRequestBodyLanguageCodeEnum = "pt-BR"
	SynthesizeSpeechRequestBodyLanguageCodeEnumPtPt    SynthesizeSpeechRequestBodyLanguageCodeEnum = "pt-PT"
	SynthesizeSpeechRequestBodyLanguageCodeEnumRoRo    SynthesizeSpeechRequestBodyLanguageCodeEnum = "ro-RO"
	SynthesizeSpeechRequestBodyLanguageCodeEnumRuRu    SynthesizeSpeechRequestBodyLanguageCodeEnum = "ru-RU"
	SynthesizeSpeechRequestBodyLanguageCodeEnumSvSe    SynthesizeSpeechRequestBodyLanguageCodeEnum = "sv-SE"
	SynthesizeSpeechRequestBodyLanguageCodeEnumTrTr    SynthesizeSpeechRequestBodyLanguageCodeEnum = "tr-TR"
	SynthesizeSpeechRequestBodyLanguageCodeEnumEnNz    SynthesizeSpeechRequestBodyLanguageCodeEnum = "en-NZ"
	SynthesizeSpeechRequestBodyLanguageCodeEnumEnZa    SynthesizeSpeechRequestBodyLanguageCodeEnum = "en-ZA"
)

type SynthesizeSpeechRequestBodyOutputFormatEnum string

const (
	SynthesizeSpeechRequestBodyOutputFormatEnumJSON      SynthesizeSpeechRequestBodyOutputFormatEnum = "json"
	SynthesizeSpeechRequestBodyOutputFormatEnumMp3       SynthesizeSpeechRequestBodyOutputFormatEnum = "mp3"
	SynthesizeSpeechRequestBodyOutputFormatEnumOggVorbis SynthesizeSpeechRequestBodyOutputFormatEnum = "ogg_vorbis"
	SynthesizeSpeechRequestBodyOutputFormatEnumPcm       SynthesizeSpeechRequestBodyOutputFormatEnum = "pcm"
)

type SynthesizeSpeechRequestBodyTextTypeEnum string

const (
	SynthesizeSpeechRequestBodyTextTypeEnumSsml SynthesizeSpeechRequestBodyTextTypeEnum = "ssml"
	SynthesizeSpeechRequestBodyTextTypeEnumText SynthesizeSpeechRequestBodyTextTypeEnum = "text"
)

type SynthesizeSpeechRequestBodyVoiceIDEnum string

const (
	SynthesizeSpeechRequestBodyVoiceIDEnumAditi     SynthesizeSpeechRequestBodyVoiceIDEnum = "Aditi"
	SynthesizeSpeechRequestBodyVoiceIDEnumAmy       SynthesizeSpeechRequestBodyVoiceIDEnum = "Amy"
	SynthesizeSpeechRequestBodyVoiceIDEnumAstrid    SynthesizeSpeechRequestBodyVoiceIDEnum = "Astrid"
	SynthesizeSpeechRequestBodyVoiceIDEnumBianca    SynthesizeSpeechRequestBodyVoiceIDEnum = "Bianca"
	SynthesizeSpeechRequestBodyVoiceIDEnumBrian     SynthesizeSpeechRequestBodyVoiceIDEnum = "Brian"
	SynthesizeSpeechRequestBodyVoiceIDEnumCamila    SynthesizeSpeechRequestBodyVoiceIDEnum = "Camila"
	SynthesizeSpeechRequestBodyVoiceIDEnumCarla     SynthesizeSpeechRequestBodyVoiceIDEnum = "Carla"
	SynthesizeSpeechRequestBodyVoiceIDEnumCarmen    SynthesizeSpeechRequestBodyVoiceIDEnum = "Carmen"
	SynthesizeSpeechRequestBodyVoiceIDEnumCeline    SynthesizeSpeechRequestBodyVoiceIDEnum = "Celine"
	SynthesizeSpeechRequestBodyVoiceIDEnumChantal   SynthesizeSpeechRequestBodyVoiceIDEnum = "Chantal"
	SynthesizeSpeechRequestBodyVoiceIDEnumConchita  SynthesizeSpeechRequestBodyVoiceIDEnum = "Conchita"
	SynthesizeSpeechRequestBodyVoiceIDEnumCristiano SynthesizeSpeechRequestBodyVoiceIDEnum = "Cristiano"
	SynthesizeSpeechRequestBodyVoiceIDEnumDora      SynthesizeSpeechRequestBodyVoiceIDEnum = "Dora"
	SynthesizeSpeechRequestBodyVoiceIDEnumEmma      SynthesizeSpeechRequestBodyVoiceIDEnum = "Emma"
	SynthesizeSpeechRequestBodyVoiceIDEnumEnrique   SynthesizeSpeechRequestBodyVoiceIDEnum = "Enrique"
	SynthesizeSpeechRequestBodyVoiceIDEnumEwa       SynthesizeSpeechRequestBodyVoiceIDEnum = "Ewa"
	SynthesizeSpeechRequestBodyVoiceIDEnumFiliz     SynthesizeSpeechRequestBodyVoiceIDEnum = "Filiz"
	SynthesizeSpeechRequestBodyVoiceIDEnumGabrielle SynthesizeSpeechRequestBodyVoiceIDEnum = "Gabrielle"
	SynthesizeSpeechRequestBodyVoiceIDEnumGeraint   SynthesizeSpeechRequestBodyVoiceIDEnum = "Geraint"
	SynthesizeSpeechRequestBodyVoiceIDEnumGiorgio   SynthesizeSpeechRequestBodyVoiceIDEnum = "Giorgio"
	SynthesizeSpeechRequestBodyVoiceIDEnumGwyneth   SynthesizeSpeechRequestBodyVoiceIDEnum = "Gwyneth"
	SynthesizeSpeechRequestBodyVoiceIDEnumHans      SynthesizeSpeechRequestBodyVoiceIDEnum = "Hans"
	SynthesizeSpeechRequestBodyVoiceIDEnumInes      SynthesizeSpeechRequestBodyVoiceIDEnum = "Ines"
	SynthesizeSpeechRequestBodyVoiceIDEnumIvy       SynthesizeSpeechRequestBodyVoiceIDEnum = "Ivy"
	SynthesizeSpeechRequestBodyVoiceIDEnumJacek     SynthesizeSpeechRequestBodyVoiceIDEnum = "Jacek"
	SynthesizeSpeechRequestBodyVoiceIDEnumJan       SynthesizeSpeechRequestBodyVoiceIDEnum = "Jan"
	SynthesizeSpeechRequestBodyVoiceIDEnumJoanna    SynthesizeSpeechRequestBodyVoiceIDEnum = "Joanna"
	SynthesizeSpeechRequestBodyVoiceIDEnumJoey      SynthesizeSpeechRequestBodyVoiceIDEnum = "Joey"
	SynthesizeSpeechRequestBodyVoiceIDEnumJustin    SynthesizeSpeechRequestBodyVoiceIDEnum = "Justin"
	SynthesizeSpeechRequestBodyVoiceIDEnumKarl      SynthesizeSpeechRequestBodyVoiceIDEnum = "Karl"
	SynthesizeSpeechRequestBodyVoiceIDEnumKendra    SynthesizeSpeechRequestBodyVoiceIDEnum = "Kendra"
	SynthesizeSpeechRequestBodyVoiceIDEnumKevin     SynthesizeSpeechRequestBodyVoiceIDEnum = "Kevin"
	SynthesizeSpeechRequestBodyVoiceIDEnumKimberly  SynthesizeSpeechRequestBodyVoiceIDEnum = "Kimberly"
	SynthesizeSpeechRequestBodyVoiceIDEnumLea       SynthesizeSpeechRequestBodyVoiceIDEnum = "Lea"
	SynthesizeSpeechRequestBodyVoiceIDEnumLiv       SynthesizeSpeechRequestBodyVoiceIDEnum = "Liv"
	SynthesizeSpeechRequestBodyVoiceIDEnumLotte     SynthesizeSpeechRequestBodyVoiceIDEnum = "Lotte"
	SynthesizeSpeechRequestBodyVoiceIDEnumLucia     SynthesizeSpeechRequestBodyVoiceIDEnum = "Lucia"
	SynthesizeSpeechRequestBodyVoiceIDEnumLupe      SynthesizeSpeechRequestBodyVoiceIDEnum = "Lupe"
	SynthesizeSpeechRequestBodyVoiceIDEnumMads      SynthesizeSpeechRequestBodyVoiceIDEnum = "Mads"
	SynthesizeSpeechRequestBodyVoiceIDEnumMaja      SynthesizeSpeechRequestBodyVoiceIDEnum = "Maja"
	SynthesizeSpeechRequestBodyVoiceIDEnumMarlene   SynthesizeSpeechRequestBodyVoiceIDEnum = "Marlene"
	SynthesizeSpeechRequestBodyVoiceIDEnumMathieu   SynthesizeSpeechRequestBodyVoiceIDEnum = "Mathieu"
	SynthesizeSpeechRequestBodyVoiceIDEnumMatthew   SynthesizeSpeechRequestBodyVoiceIDEnum = "Matthew"
	SynthesizeSpeechRequestBodyVoiceIDEnumMaxim     SynthesizeSpeechRequestBodyVoiceIDEnum = "Maxim"
	SynthesizeSpeechRequestBodyVoiceIDEnumMia       SynthesizeSpeechRequestBodyVoiceIDEnum = "Mia"
	SynthesizeSpeechRequestBodyVoiceIDEnumMiguel    SynthesizeSpeechRequestBodyVoiceIDEnum = "Miguel"
	SynthesizeSpeechRequestBodyVoiceIDEnumMizuki    SynthesizeSpeechRequestBodyVoiceIDEnum = "Mizuki"
	SynthesizeSpeechRequestBodyVoiceIDEnumNaja      SynthesizeSpeechRequestBodyVoiceIDEnum = "Naja"
	SynthesizeSpeechRequestBodyVoiceIDEnumNicole    SynthesizeSpeechRequestBodyVoiceIDEnum = "Nicole"
	SynthesizeSpeechRequestBodyVoiceIDEnumOlivia    SynthesizeSpeechRequestBodyVoiceIDEnum = "Olivia"
	SynthesizeSpeechRequestBodyVoiceIDEnumPenelope  SynthesizeSpeechRequestBodyVoiceIDEnum = "Penelope"
	SynthesizeSpeechRequestBodyVoiceIDEnumRaveena   SynthesizeSpeechRequestBodyVoiceIDEnum = "Raveena"
	SynthesizeSpeechRequestBodyVoiceIDEnumRicardo   SynthesizeSpeechRequestBodyVoiceIDEnum = "Ricardo"
	SynthesizeSpeechRequestBodyVoiceIDEnumRuben     SynthesizeSpeechRequestBodyVoiceIDEnum = "Ruben"
	SynthesizeSpeechRequestBodyVoiceIDEnumRussell   SynthesizeSpeechRequestBodyVoiceIDEnum = "Russell"
	SynthesizeSpeechRequestBodyVoiceIDEnumSalli     SynthesizeSpeechRequestBodyVoiceIDEnum = "Salli"
	SynthesizeSpeechRequestBodyVoiceIDEnumSeoyeon   SynthesizeSpeechRequestBodyVoiceIDEnum = "Seoyeon"
	SynthesizeSpeechRequestBodyVoiceIDEnumTakumi    SynthesizeSpeechRequestBodyVoiceIDEnum = "Takumi"
	SynthesizeSpeechRequestBodyVoiceIDEnumTatyana   SynthesizeSpeechRequestBodyVoiceIDEnum = "Tatyana"
	SynthesizeSpeechRequestBodyVoiceIDEnumVicki     SynthesizeSpeechRequestBodyVoiceIDEnum = "Vicki"
	SynthesizeSpeechRequestBodyVoiceIDEnumVitoria   SynthesizeSpeechRequestBodyVoiceIDEnum = "Vitoria"
	SynthesizeSpeechRequestBodyVoiceIDEnumZeina     SynthesizeSpeechRequestBodyVoiceIDEnum = "Zeina"
	SynthesizeSpeechRequestBodyVoiceIDEnumZhiyu     SynthesizeSpeechRequestBodyVoiceIDEnum = "Zhiyu"
	SynthesizeSpeechRequestBodyVoiceIDEnumAria      SynthesizeSpeechRequestBodyVoiceIDEnum = "Aria"
	SynthesizeSpeechRequestBodyVoiceIDEnumAyanda    SynthesizeSpeechRequestBodyVoiceIDEnum = "Ayanda"
)

type SynthesizeSpeechRequestBody struct {
	Engine          *SynthesizeSpeechRequestBodyEngineEnum       `json:"Engine"`
	LanguageCode    *SynthesizeSpeechRequestBodyLanguageCodeEnum `json:"LanguageCode"`
	LexiconNames    []string                                     `json:"LexiconNames"`
	OutputFormat    SynthesizeSpeechRequestBodyOutputFormatEnum  `json:"OutputFormat"`
	SampleRate      *string                                      `json:"SampleRate"`
	SpeechMarkTypes []shared.SpeechMarkTypeEnum                  `json:"SpeechMarkTypes"`
	Text            string                                       `json:"Text"`
	TextType        *SynthesizeSpeechRequestBodyTextTypeEnum     `json:"TextType"`
	VoiceID         SynthesizeSpeechRequestBodyVoiceIDEnum       `json:"VoiceId"`
}

type SynthesizeSpeechRequest struct {
	Headers SynthesizeSpeechHeaders
	Request SynthesizeSpeechRequestBody `request:"mediaType=application/json"`
}

type SynthesizeSpeechResponse struct {
	ContentType                               string
	EngineNotSupportedException               *interface{}
	InvalidSampleRateException                *interface{}
	InvalidSsmlException                      *interface{}
	LanguageNotSupportedException             *interface{}
	LexiconNotFoundException                  *interface{}
	MarksNotSupportedForFormatException       *interface{}
	ServiceFailureException                   *interface{}
	SsmlMarksNotSupportedForTextTypeException *interface{}
	StatusCode                                int64
	SynthesizeSpeechOutput                    *shared.SynthesizeSpeechOutput
	TextLengthExceededException               *interface{}
}
