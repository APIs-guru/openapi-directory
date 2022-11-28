var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var StartSpeechSynthesisTaskHeaders = /** @class */ (function (_super) {
    __extends(StartSpeechSynthesisTaskHeaders, _super);
    function StartSpeechSynthesisTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartSpeechSynthesisTaskHeaders;
}(SpeakeasyBase));
export { StartSpeechSynthesisTaskHeaders };
export var StartSpeechSynthesisTaskRequestBodyEngineEnum;
(function (StartSpeechSynthesisTaskRequestBodyEngineEnum) {
    StartSpeechSynthesisTaskRequestBodyEngineEnum["Standard"] = "standard";
    StartSpeechSynthesisTaskRequestBodyEngineEnum["Neural"] = "neural";
})(StartSpeechSynthesisTaskRequestBodyEngineEnum || (StartSpeechSynthesisTaskRequestBodyEngineEnum = {}));
export var StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum;
(function (StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum) {
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["Arb"] = "arb";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["CmnCn"] = "cmn-CN";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["CyGb"] = "cy-GB";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["DaDk"] = "da-DK";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["DeDe"] = "de-DE";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["EnAu"] = "en-AU";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["EnGb"] = "en-GB";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["EnGbWls"] = "en-GB-WLS";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["EnIn"] = "en-IN";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["EnUs"] = "en-US";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["EsEs"] = "es-ES";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["EsMx"] = "es-MX";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["EsUs"] = "es-US";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["FrCa"] = "fr-CA";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["FrFr"] = "fr-FR";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["IsIs"] = "is-IS";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["ItIt"] = "it-IT";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["JaJp"] = "ja-JP";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["HiIn"] = "hi-IN";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["KoKr"] = "ko-KR";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["NbNo"] = "nb-NO";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["NlNl"] = "nl-NL";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["PlPl"] = "pl-PL";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["PtBr"] = "pt-BR";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["PtPt"] = "pt-PT";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["RoRo"] = "ro-RO";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["RuRu"] = "ru-RU";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["SvSe"] = "sv-SE";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["TrTr"] = "tr-TR";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["EnNz"] = "en-NZ";
    StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum["EnZa"] = "en-ZA";
})(StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum || (StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum = {}));
export var StartSpeechSynthesisTaskRequestBodyOutputFormatEnum;
(function (StartSpeechSynthesisTaskRequestBodyOutputFormatEnum) {
    StartSpeechSynthesisTaskRequestBodyOutputFormatEnum["Json"] = "json";
    StartSpeechSynthesisTaskRequestBodyOutputFormatEnum["Mp3"] = "mp3";
    StartSpeechSynthesisTaskRequestBodyOutputFormatEnum["OggVorbis"] = "ogg_vorbis";
    StartSpeechSynthesisTaskRequestBodyOutputFormatEnum["Pcm"] = "pcm";
})(StartSpeechSynthesisTaskRequestBodyOutputFormatEnum || (StartSpeechSynthesisTaskRequestBodyOutputFormatEnum = {}));
export var StartSpeechSynthesisTaskRequestBodyTextTypeEnum;
(function (StartSpeechSynthesisTaskRequestBodyTextTypeEnum) {
    StartSpeechSynthesisTaskRequestBodyTextTypeEnum["Ssml"] = "ssml";
    StartSpeechSynthesisTaskRequestBodyTextTypeEnum["Text"] = "text";
})(StartSpeechSynthesisTaskRequestBodyTextTypeEnum || (StartSpeechSynthesisTaskRequestBodyTextTypeEnum = {}));
export var StartSpeechSynthesisTaskRequestBodyVoiceIdEnum;
(function (StartSpeechSynthesisTaskRequestBodyVoiceIdEnum) {
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Aditi"] = "Aditi";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Amy"] = "Amy";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Astrid"] = "Astrid";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Bianca"] = "Bianca";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Brian"] = "Brian";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Camila"] = "Camila";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Carla"] = "Carla";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Carmen"] = "Carmen";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Celine"] = "Celine";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Chantal"] = "Chantal";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Conchita"] = "Conchita";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Cristiano"] = "Cristiano";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Dora"] = "Dora";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Emma"] = "Emma";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Enrique"] = "Enrique";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Ewa"] = "Ewa";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Filiz"] = "Filiz";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Gabrielle"] = "Gabrielle";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Geraint"] = "Geraint";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Giorgio"] = "Giorgio";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Gwyneth"] = "Gwyneth";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Hans"] = "Hans";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Ines"] = "Ines";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Ivy"] = "Ivy";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Jacek"] = "Jacek";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Jan"] = "Jan";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Joanna"] = "Joanna";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Joey"] = "Joey";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Justin"] = "Justin";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Karl"] = "Karl";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Kendra"] = "Kendra";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Kevin"] = "Kevin";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Kimberly"] = "Kimberly";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Lea"] = "Lea";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Liv"] = "Liv";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Lotte"] = "Lotte";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Lucia"] = "Lucia";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Lupe"] = "Lupe";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Mads"] = "Mads";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Maja"] = "Maja";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Marlene"] = "Marlene";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Mathieu"] = "Mathieu";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Matthew"] = "Matthew";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Maxim"] = "Maxim";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Mia"] = "Mia";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Miguel"] = "Miguel";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Mizuki"] = "Mizuki";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Naja"] = "Naja";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Nicole"] = "Nicole";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Olivia"] = "Olivia";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Penelope"] = "Penelope";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Raveena"] = "Raveena";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Ricardo"] = "Ricardo";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Ruben"] = "Ruben";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Russell"] = "Russell";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Salli"] = "Salli";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Seoyeon"] = "Seoyeon";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Takumi"] = "Takumi";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Tatyana"] = "Tatyana";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Vicki"] = "Vicki";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Vitoria"] = "Vitoria";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Zeina"] = "Zeina";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Zhiyu"] = "Zhiyu";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Aria"] = "Aria";
    StartSpeechSynthesisTaskRequestBodyVoiceIdEnum["Ayanda"] = "Ayanda";
})(StartSpeechSynthesisTaskRequestBodyVoiceIdEnum || (StartSpeechSynthesisTaskRequestBodyVoiceIdEnum = {}));
var StartSpeechSynthesisTaskRequestBody = /** @class */ (function (_super) {
    __extends(StartSpeechSynthesisTaskRequestBody, _super);
    function StartSpeechSynthesisTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Engine" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LexiconNames" }),
        __metadata("design:type", Array)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "lexiconNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputFormat" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "outputFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputS3BucketName" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "outputS3BucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputS3KeyPrefix" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "outputS3KeyPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SampleRate" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "sampleRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnsTopicArn" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "snsTopicArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpeechMarkTypes" }),
        __metadata("design:type", Array)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "speechMarkTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Text" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TextType" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "textType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoiceId" }),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskRequestBody.prototype, "voiceId", void 0);
    return StartSpeechSynthesisTaskRequestBody;
}(SpeakeasyBase));
export { StartSpeechSynthesisTaskRequestBody };
var StartSpeechSynthesisTaskRequest = /** @class */ (function (_super) {
    __extends(StartSpeechSynthesisTaskRequest, _super);
    function StartSpeechSynthesisTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartSpeechSynthesisTaskHeaders)
    ], StartSpeechSynthesisTaskRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartSpeechSynthesisTaskRequestBody)
    ], StartSpeechSynthesisTaskRequest.prototype, "request", void 0);
    return StartSpeechSynthesisTaskRequest;
}(SpeakeasyBase));
export { StartSpeechSynthesisTaskRequest };
var StartSpeechSynthesisTaskResponse = /** @class */ (function (_super) {
    __extends(StartSpeechSynthesisTaskResponse, _super);
    function StartSpeechSynthesisTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartSpeechSynthesisTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "engineNotSupportedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "invalidS3BucketException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "invalidS3KeyException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "invalidSampleRateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "invalidSnsTopicArnException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "invalidSsmlException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "languageNotSupportedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "lexiconNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "marksNotSupportedForFormatException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "serviceFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "ssmlMarksNotSupportedForTextTypeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartSpeechSynthesisTaskOutput)
    ], StartSpeechSynthesisTaskResponse.prototype, "startSpeechSynthesisTaskOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartSpeechSynthesisTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSpeechSynthesisTaskResponse.prototype, "textLengthExceededException", void 0);
    return StartSpeechSynthesisTaskResponse;
}(SpeakeasyBase));
export { StartSpeechSynthesisTaskResponse };
