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
import { ContentRedaction } from "./contentredaction";
import { JobExecutionSettings } from "./jobexecutionsettings";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { ModelSettings } from "./modelsettings";
import { Settings } from "./settings";
import { Subtitles } from "./subtitles";
import { Tag } from "./tag";
var StartTranscriptionJobRequest = /** @class */ (function (_super) {
    __extends(StartTranscriptionJobRequest, _super);
    function StartTranscriptionJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentRedaction" }),
        __metadata("design:type", ContentRedaction)
    ], StartTranscriptionJobRequest.prototype, "contentRedaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdentifyLanguage" }),
        __metadata("design:type", Boolean)
    ], StartTranscriptionJobRequest.prototype, "identifyLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobExecutionSettings" }),
        __metadata("design:type", JobExecutionSettings)
    ], StartTranscriptionJobRequest.prototype, "jobExecutionSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KMSEncryptionContext" }),
        __metadata("design:type", Map)
    ], StartTranscriptionJobRequest.prototype, "kmsEncryptionContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], StartTranscriptionJobRequest.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageOptions" }),
        __metadata("design:type", Array)
    ], StartTranscriptionJobRequest.prototype, "languageOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Media" }),
        __metadata("design:type", Media)
    ], StartTranscriptionJobRequest.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaFormat" }),
        __metadata("design:type", String)
    ], StartTranscriptionJobRequest.prototype, "mediaFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaSampleRateHertz" }),
        __metadata("design:type", Number)
    ], StartTranscriptionJobRequest.prototype, "mediaSampleRateHertz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelSettings" }),
        __metadata("design:type", ModelSettings)
    ], StartTranscriptionJobRequest.prototype, "modelSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputBucketName" }),
        __metadata("design:type", String)
    ], StartTranscriptionJobRequest.prototype, "outputBucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputEncryptionKMSKeyId" }),
        __metadata("design:type", String)
    ], StartTranscriptionJobRequest.prototype, "outputEncryptionKmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputKey" }),
        __metadata("design:type", String)
    ], StartTranscriptionJobRequest.prototype, "outputKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Settings" }),
        __metadata("design:type", Settings)
    ], StartTranscriptionJobRequest.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subtitles" }),
        __metadata("design:type", Subtitles)
    ], StartTranscriptionJobRequest.prototype, "subtitles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], StartTranscriptionJobRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscriptionJobName" }),
        __metadata("design:type", String)
    ], StartTranscriptionJobRequest.prototype, "transcriptionJobName", void 0);
    return StartTranscriptionJobRequest;
}(SpeakeasyBase));
export { StartTranscriptionJobRequest };
