package operations

import (
	"openapi/pkg/models/shared"
)

type StartSpeechSynthesisTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartSpeechSynthesisTaskRequestBodyEngineEnum string

const (
	StartSpeechSynthesisTaskRequestBodyEngineEnumStandard StartSpeechSynthesisTaskRequestBodyEngineEnum = "standard"
	StartSpeechSynthesisTaskRequestBodyEngineEnumNeural   StartSpeechSynthesisTaskRequestBodyEngineEnum = "neural"
)

type StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum string

const (
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumArb     StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "arb"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumCmnCn   StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "cmn-CN"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumCyGb    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "cy-GB"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumDaDk    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "da-DK"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumDeDe    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "de-DE"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumEnAu    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "en-AU"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumEnGb    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "en-GB"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumEnGbWls StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "en-GB-WLS"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumEnIn    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "en-IN"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumEnUs    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "en-US"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumEsEs    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "es-ES"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumEsMx    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "es-MX"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumEsUs    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "es-US"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumFrCa    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "fr-CA"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumFrFr    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "fr-FR"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumIsIs    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "is-IS"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumItIt    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "it-IT"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumJaJp    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "ja-JP"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumHiIn    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "hi-IN"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumKoKr    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "ko-KR"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumNbNo    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "nb-NO"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumNlNl    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "nl-NL"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumPlPl    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "pl-PL"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumPtBr    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "pt-BR"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumPtPt    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "pt-PT"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumRoRo    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "ro-RO"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumRuRu    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "ru-RU"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumSvSe    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "sv-SE"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumTrTr    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "tr-TR"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumEnNz    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "en-NZ"
	StartSpeechSynthesisTaskRequestBodyLanguageCodeEnumEnZa    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = "en-ZA"
)

type StartSpeechSynthesisTaskRequestBodyOutputFormatEnum string

const (
	StartSpeechSynthesisTaskRequestBodyOutputFormatEnumJSON      StartSpeechSynthesisTaskRequestBodyOutputFormatEnum = "json"
	StartSpeechSynthesisTaskRequestBodyOutputFormatEnumMp3       StartSpeechSynthesisTaskRequestBodyOutputFormatEnum = "mp3"
	StartSpeechSynthesisTaskRequestBodyOutputFormatEnumOggVorbis StartSpeechSynthesisTaskRequestBodyOutputFormatEnum = "ogg_vorbis"
	StartSpeechSynthesisTaskRequestBodyOutputFormatEnumPcm       StartSpeechSynthesisTaskRequestBodyOutputFormatEnum = "pcm"
)

type StartSpeechSynthesisTaskRequestBodyTextTypeEnum string

const (
	StartSpeechSynthesisTaskRequestBodyTextTypeEnumSsml StartSpeechSynthesisTaskRequestBodyTextTypeEnum = "ssml"
	StartSpeechSynthesisTaskRequestBodyTextTypeEnumText StartSpeechSynthesisTaskRequestBodyTextTypeEnum = "text"
)

type StartSpeechSynthesisTaskRequestBodyVoiceIDEnum string

const (
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumAditi     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Aditi"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumAmy       StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Amy"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumAstrid    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Astrid"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumBianca    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Bianca"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumBrian     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Brian"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumCamila    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Camila"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumCarla     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Carla"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumCarmen    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Carmen"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumCeline    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Celine"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumChantal   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Chantal"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumConchita  StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Conchita"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumCristiano StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Cristiano"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumDora      StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Dora"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumEmma      StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Emma"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumEnrique   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Enrique"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumEwa       StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Ewa"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumFiliz     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Filiz"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumGabrielle StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Gabrielle"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumGeraint   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Geraint"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumGiorgio   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Giorgio"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumGwyneth   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Gwyneth"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumHans      StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Hans"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumInes      StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Ines"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumIvy       StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Ivy"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumJacek     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Jacek"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumJan       StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Jan"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumJoanna    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Joanna"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumJoey      StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Joey"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumJustin    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Justin"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumKarl      StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Karl"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumKendra    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Kendra"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumKevin     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Kevin"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumKimberly  StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Kimberly"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumLea       StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Lea"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumLiv       StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Liv"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumLotte     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Lotte"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumLucia     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Lucia"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumLupe      StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Lupe"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumMads      StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Mads"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumMaja      StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Maja"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumMarlene   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Marlene"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumMathieu   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Mathieu"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumMatthew   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Matthew"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumMaxim     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Maxim"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumMia       StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Mia"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumMiguel    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Miguel"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumMizuki    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Mizuki"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumNaja      StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Naja"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumNicole    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Nicole"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumOlivia    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Olivia"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumPenelope  StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Penelope"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumRaveena   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Raveena"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumRicardo   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Ricardo"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumRuben     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Ruben"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumRussell   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Russell"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumSalli     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Salli"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumSeoyeon   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Seoyeon"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumTakumi    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Takumi"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumTatyana   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Tatyana"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumVicki     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Vicki"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumVitoria   StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Vitoria"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumZeina     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Zeina"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumZhiyu     StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Zhiyu"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumAria      StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Aria"
	StartSpeechSynthesisTaskRequestBodyVoiceIDEnumAyanda    StartSpeechSynthesisTaskRequestBodyVoiceIDEnum = "Ayanda"
)

type StartSpeechSynthesisTaskRequestBody struct {
	Engine             *StartSpeechSynthesisTaskRequestBodyEngineEnum       `json:"Engine"`
	LanguageCode       *StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum `json:"LanguageCode"`
	LexiconNames       []string                                             `json:"LexiconNames"`
	OutputFormat       StartSpeechSynthesisTaskRequestBodyOutputFormatEnum  `json:"OutputFormat"`
	OutputS3BucketName string                                               `json:"OutputS3BucketName"`
	OutputS3KeyPrefix  *string                                              `json:"OutputS3KeyPrefix"`
	SampleRate         *string                                              `json:"SampleRate"`
	SnsTopicArn        *string                                              `json:"SnsTopicArn"`
	SpeechMarkTypes    []shared.SpeechMarkTypeEnum                          `json:"SpeechMarkTypes"`
	Text               string                                               `json:"Text"`
	TextType           *StartSpeechSynthesisTaskRequestBodyTextTypeEnum     `json:"TextType"`
	VoiceID            StartSpeechSynthesisTaskRequestBodyVoiceIDEnum       `json:"VoiceId"`
}

type StartSpeechSynthesisTaskRequest struct {
	Headers StartSpeechSynthesisTaskHeaders
	Request StartSpeechSynthesisTaskRequestBody `request:"mediaType=application/json"`
}

type StartSpeechSynthesisTaskResponse struct {
	ContentType                               string
	EngineNotSupportedException               *interface{}
	InvalidS3BucketException                  *interface{}
	InvalidS3KeyException                     *interface{}
	InvalidSampleRateException                *interface{}
	InvalidSnsTopicArnException               *interface{}
	InvalidSsmlException                      *interface{}
	LanguageNotSupportedException             *interface{}
	LexiconNotFoundException                  *interface{}
	MarksNotSupportedForFormatException       *interface{}
	ServiceFailureException                   *interface{}
	SsmlMarksNotSupportedForTextTypeException *interface{}
	StartSpeechSynthesisTaskOutput            *shared.StartSpeechSynthesisTaskOutput
	StatusCode                                int64
	TextLengthExceededException               *interface{}
}
