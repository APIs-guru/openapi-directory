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
import { SubtitlesOutput } from "./subtitlesoutput";
import { Tag } from "./tag";
import { Transcript } from "./transcript";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
// TranscriptionJob
/**
 * Describes an asynchronous transcription job that was created with the <code>StartTranscriptionJob</code> operation.
**/
var TranscriptionJob = /** @class */ (function (_super) {
    __extends(TranscriptionJob, _super);
    function TranscriptionJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionTime" }),
        __metadata("design:type", Date)
    ], TranscriptionJob.prototype, "completionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentRedaction" }),
        __metadata("design:type", ContentRedaction)
    ], TranscriptionJob.prototype, "contentRedaction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], TranscriptionJob.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], TranscriptionJob.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdentifiedLanguageScore" }),
        __metadata("design:type", Number)
    ], TranscriptionJob.prototype, "identifiedLanguageScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IdentifyLanguage" }),
        __metadata("design:type", Boolean)
    ], TranscriptionJob.prototype, "identifyLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobExecutionSettings" }),
        __metadata("design:type", JobExecutionSettings)
    ], TranscriptionJob.prototype, "jobExecutionSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], TranscriptionJob.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageOptions" }),
        __metadata("design:type", Array)
    ], TranscriptionJob.prototype, "languageOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Media" }),
        __metadata("design:type", Media)
    ], TranscriptionJob.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaFormat" }),
        __metadata("design:type", String)
    ], TranscriptionJob.prototype, "mediaFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaSampleRateHertz" }),
        __metadata("design:type", Number)
    ], TranscriptionJob.prototype, "mediaSampleRateHertz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelSettings" }),
        __metadata("design:type", ModelSettings)
    ], TranscriptionJob.prototype, "modelSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Settings" }),
        __metadata("design:type", Settings)
    ], TranscriptionJob.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], TranscriptionJob.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subtitles" }),
        __metadata("design:type", SubtitlesOutput)
    ], TranscriptionJob.prototype, "subtitles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], TranscriptionJob.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Transcript" }),
        __metadata("design:type", Transcript)
    ], TranscriptionJob.prototype, "transcript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscriptionJobName" }),
        __metadata("design:type", String)
    ], TranscriptionJob.prototype, "transcriptionJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscriptionJobStatus" }),
        __metadata("design:type", String)
    ], TranscriptionJob.prototype, "transcriptionJobStatus", void 0);
    return TranscriptionJob;
}(SpeakeasyBase));
export { TranscriptionJob };
