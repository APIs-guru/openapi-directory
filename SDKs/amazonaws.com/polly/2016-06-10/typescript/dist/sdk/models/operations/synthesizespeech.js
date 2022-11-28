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
var SynthesizeSpeechHeaders = /** @class */ (function (_super) {
    __extends(SynthesizeSpeechHeaders, _super);
    function SynthesizeSpeechHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SynthesizeSpeechHeaders;
}(SpeakeasyBase));
export { SynthesizeSpeechHeaders };
export var SynthesizeSpeechRequestBodyEngineEnum;
(function (SynthesizeSpeechRequestBodyEngineEnum) {
    SynthesizeSpeechRequestBodyEngineEnum["Standard"] = "standard";
    SynthesizeSpeechRequestBodyEngineEnum["Neural"] = "neural";
})(SynthesizeSpeechRequestBodyEngineEnum || (SynthesizeSpeechRequestBodyEngineEnum = {}));
export var SynthesizeSpeechRequestBodyLanguageCodeEnum;
(function (SynthesizeSpeechRequestBodyLanguageCodeEnum) {
    SynthesizeSpeechRequestBodyLanguageCodeEnum["Arb"] = "arb";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["CmnCn"] = "cmn-CN";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["CyGb"] = "cy-GB";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["DaDk"] = "da-DK";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["DeDe"] = "de-DE";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["EnAu"] = "en-AU";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["EnGb"] = "en-GB";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["EnGbWls"] = "en-GB-WLS";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["EnIn"] = "en-IN";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["EnUs"] = "en-US";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["EsEs"] = "es-ES";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["EsMx"] = "es-MX";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["EsUs"] = "es-US";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["FrCa"] = "fr-CA";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["FrFr"] = "fr-FR";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["IsIs"] = "is-IS";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["ItIt"] = "it-IT";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["JaJp"] = "ja-JP";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["HiIn"] = "hi-IN";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["KoKr"] = "ko-KR";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["NbNo"] = "nb-NO";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["NlNl"] = "nl-NL";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["PlPl"] = "pl-PL";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["PtBr"] = "pt-BR";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["PtPt"] = "pt-PT";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["RoRo"] = "ro-RO";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["RuRu"] = "ru-RU";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["SvSe"] = "sv-SE";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["TrTr"] = "tr-TR";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["EnNz"] = "en-NZ";
    SynthesizeSpeechRequestBodyLanguageCodeEnum["EnZa"] = "en-ZA";
})(SynthesizeSpeechRequestBodyLanguageCodeEnum || (SynthesizeSpeechRequestBodyLanguageCodeEnum = {}));
export var SynthesizeSpeechRequestBodyOutputFormatEnum;
(function (SynthesizeSpeechRequestBodyOutputFormatEnum) {
    SynthesizeSpeechRequestBodyOutputFormatEnum["Json"] = "json";
    SynthesizeSpeechRequestBodyOutputFormatEnum["Mp3"] = "mp3";
    SynthesizeSpeechRequestBodyOutputFormatEnum["OggVorbis"] = "ogg_vorbis";
    SynthesizeSpeechRequestBodyOutputFormatEnum["Pcm"] = "pcm";
})(SynthesizeSpeechRequestBodyOutputFormatEnum || (SynthesizeSpeechRequestBodyOutputFormatEnum = {}));
export var SynthesizeSpeechRequestBodyTextTypeEnum;
(function (SynthesizeSpeechRequestBodyTextTypeEnum) {
    SynthesizeSpeechRequestBodyTextTypeEnum["Ssml"] = "ssml";
    SynthesizeSpeechRequestBodyTextTypeEnum["Text"] = "text";
})(SynthesizeSpeechRequestBodyTextTypeEnum || (SynthesizeSpeechRequestBodyTextTypeEnum = {}));
export var SynthesizeSpeechRequestBodyVoiceIdEnum;
(function (SynthesizeSpeechRequestBodyVoiceIdEnum) {
    SynthesizeSpeechRequestBodyVoiceIdEnum["Aditi"] = "Aditi";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Amy"] = "Amy";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Astrid"] = "Astrid";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Bianca"] = "Bianca";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Brian"] = "Brian";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Camila"] = "Camila";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Carla"] = "Carla";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Carmen"] = "Carmen";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Celine"] = "Celine";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Chantal"] = "Chantal";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Conchita"] = "Conchita";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Cristiano"] = "Cristiano";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Dora"] = "Dora";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Emma"] = "Emma";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Enrique"] = "Enrique";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Ewa"] = "Ewa";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Filiz"] = "Filiz";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Gabrielle"] = "Gabrielle";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Geraint"] = "Geraint";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Giorgio"] = "Giorgio";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Gwyneth"] = "Gwyneth";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Hans"] = "Hans";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Ines"] = "Ines";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Ivy"] = "Ivy";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Jacek"] = "Jacek";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Jan"] = "Jan";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Joanna"] = "Joanna";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Joey"] = "Joey";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Justin"] = "Justin";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Karl"] = "Karl";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Kendra"] = "Kendra";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Kevin"] = "Kevin";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Kimberly"] = "Kimberly";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Lea"] = "Lea";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Liv"] = "Liv";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Lotte"] = "Lotte";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Lucia"] = "Lucia";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Lupe"] = "Lupe";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Mads"] = "Mads";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Maja"] = "Maja";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Marlene"] = "Marlene";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Mathieu"] = "Mathieu";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Matthew"] = "Matthew";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Maxim"] = "Maxim";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Mia"] = "Mia";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Miguel"] = "Miguel";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Mizuki"] = "Mizuki";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Naja"] = "Naja";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Nicole"] = "Nicole";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Olivia"] = "Olivia";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Penelope"] = "Penelope";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Raveena"] = "Raveena";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Ricardo"] = "Ricardo";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Ruben"] = "Ruben";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Russell"] = "Russell";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Salli"] = "Salli";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Seoyeon"] = "Seoyeon";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Takumi"] = "Takumi";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Tatyana"] = "Tatyana";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Vicki"] = "Vicki";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Vitoria"] = "Vitoria";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Zeina"] = "Zeina";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Zhiyu"] = "Zhiyu";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Aria"] = "Aria";
    SynthesizeSpeechRequestBodyVoiceIdEnum["Ayanda"] = "Ayanda";
})(SynthesizeSpeechRequestBodyVoiceIdEnum || (SynthesizeSpeechRequestBodyVoiceIdEnum = {}));
var SynthesizeSpeechRequestBody = /** @class */ (function (_super) {
    __extends(SynthesizeSpeechRequestBody, _super);
    function SynthesizeSpeechRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Engine" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechRequestBody.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechRequestBody.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LexiconNames" }),
        __metadata("design:type", Array)
    ], SynthesizeSpeechRequestBody.prototype, "lexiconNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputFormat" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechRequestBody.prototype, "outputFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SampleRate" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechRequestBody.prototype, "sampleRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpeechMarkTypes" }),
        __metadata("design:type", Array)
    ], SynthesizeSpeechRequestBody.prototype, "speechMarkTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Text" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechRequestBody.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TextType" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechRequestBody.prototype, "textType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoiceId" }),
        __metadata("design:type", String)
    ], SynthesizeSpeechRequestBody.prototype, "voiceId", void 0);
    return SynthesizeSpeechRequestBody;
}(SpeakeasyBase));
export { SynthesizeSpeechRequestBody };
var SynthesizeSpeechRequest = /** @class */ (function (_super) {
    __extends(SynthesizeSpeechRequest, _super);
    function SynthesizeSpeechRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SynthesizeSpeechHeaders)
    ], SynthesizeSpeechRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", SynthesizeSpeechRequestBody)
    ], SynthesizeSpeechRequest.prototype, "request", void 0);
    return SynthesizeSpeechRequest;
}(SpeakeasyBase));
export { SynthesizeSpeechRequest };
var SynthesizeSpeechResponse = /** @class */ (function (_super) {
    __extends(SynthesizeSpeechResponse, _super);
    function SynthesizeSpeechResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SynthesizeSpeechResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SynthesizeSpeechResponse.prototype, "engineNotSupportedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SynthesizeSpeechResponse.prototype, "invalidSampleRateException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SynthesizeSpeechResponse.prototype, "invalidSsmlException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SynthesizeSpeechResponse.prototype, "languageNotSupportedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SynthesizeSpeechResponse.prototype, "lexiconNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SynthesizeSpeechResponse.prototype, "marksNotSupportedForFormatException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SynthesizeSpeechResponse.prototype, "serviceFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SynthesizeSpeechResponse.prototype, "ssmlMarksNotSupportedForTextTypeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SynthesizeSpeechResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SynthesizeSpeechOutput)
    ], SynthesizeSpeechResponse.prototype, "synthesizeSpeechOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], SynthesizeSpeechResponse.prototype, "textLengthExceededException", void 0);
    return SynthesizeSpeechResponse;
}(SpeakeasyBase));
export { SynthesizeSpeechResponse };
