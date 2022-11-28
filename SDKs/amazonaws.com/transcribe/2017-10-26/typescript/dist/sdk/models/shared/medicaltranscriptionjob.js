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
import { MedicalContentIdentificationTypeEnum } from "./medicalcontentidentificationtypeenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { MedicalTranscriptionSetting } from "./medicaltranscriptionsetting";
import { SpecialtyEnum } from "./specialtyenum";
import { Tag } from "./tag";
import { MedicalTranscript } from "./medicaltranscript";
import { TranscriptionJobStatusEnum } from "./transcriptionjobstatusenum";
import { TypeEnum } from "./typeenum";
// MedicalTranscriptionJob
/**
 * The data structure that contains the information for a medical transcription job.
**/
var MedicalTranscriptionJob = /** @class */ (function (_super) {
    __extends(MedicalTranscriptionJob, _super);
    function MedicalTranscriptionJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionTime" }),
        __metadata("design:type", Date)
    ], MedicalTranscriptionJob.prototype, "completionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentIdentificationType" }),
        __metadata("design:type", String)
    ], MedicalTranscriptionJob.prototype, "contentIdentificationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], MedicalTranscriptionJob.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], MedicalTranscriptionJob.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], MedicalTranscriptionJob.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Media" }),
        __metadata("design:type", Media)
    ], MedicalTranscriptionJob.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaFormat" }),
        __metadata("design:type", String)
    ], MedicalTranscriptionJob.prototype, "mediaFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaSampleRateHertz" }),
        __metadata("design:type", Number)
    ], MedicalTranscriptionJob.prototype, "mediaSampleRateHertz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MedicalTranscriptionJobName" }),
        __metadata("design:type", String)
    ], MedicalTranscriptionJob.prototype, "medicalTranscriptionJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Settings" }),
        __metadata("design:type", MedicalTranscriptionSetting)
    ], MedicalTranscriptionJob.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Specialty" }),
        __metadata("design:type", String)
    ], MedicalTranscriptionJob.prototype, "specialty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], MedicalTranscriptionJob.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], MedicalTranscriptionJob.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Transcript" }),
        __metadata("design:type", MedicalTranscript)
    ], MedicalTranscriptionJob.prototype, "transcript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscriptionJobStatus" }),
        __metadata("design:type", String)
    ], MedicalTranscriptionJob.prototype, "transcriptionJobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], MedicalTranscriptionJob.prototype, "type", void 0);
    return MedicalTranscriptionJob;
}(SpeakeasyBase));
export { MedicalTranscriptionJob };
