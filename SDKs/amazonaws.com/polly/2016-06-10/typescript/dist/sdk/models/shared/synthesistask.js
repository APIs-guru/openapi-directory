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
import { EngineEnum } from "./engineenum";
import { LanguageCodeEnum } from "./languagecodeenum";
import { OutputFormatEnum } from "./outputformatenum";
import { TaskStatusEnum } from "./taskstatusenum";
import { TextTypeEnum } from "./texttypeenum";
import { VoiceIdEnum } from "./voiceidenum";
// SynthesisTask
/**
 * SynthesisTask object that provides information about a speech synthesis task.
**/
var SynthesisTask = /** @class */ (function (_super) {
    __extends(SynthesisTask, _super);
    function SynthesisTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], SynthesisTask.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Engine" }),
        __metadata("design:type", String)
    ], SynthesisTask.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LanguageCode" }),
        __metadata("design:type", String)
    ], SynthesisTask.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LexiconNames" }),
        __metadata("design:type", Array)
    ], SynthesisTask.prototype, "lexiconNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputFormat" }),
        __metadata("design:type", String)
    ], SynthesisTask.prototype, "outputFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputUri" }),
        __metadata("design:type", String)
    ], SynthesisTask.prototype, "outputUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestCharacters" }),
        __metadata("design:type", Number)
    ], SynthesisTask.prototype, "requestCharacters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SampleRate" }),
        __metadata("design:type", String)
    ], SynthesisTask.prototype, "sampleRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnsTopicArn" }),
        __metadata("design:type", String)
    ], SynthesisTask.prototype, "snsTopicArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpeechMarkTypes" }),
        __metadata("design:type", Array)
    ], SynthesisTask.prototype, "speechMarkTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskId" }),
        __metadata("design:type", String)
    ], SynthesisTask.prototype, "taskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskStatus" }),
        __metadata("design:type", String)
    ], SynthesisTask.prototype, "taskStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskStatusReason" }),
        __metadata("design:type", String)
    ], SynthesisTask.prototype, "taskStatusReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TextType" }),
        __metadata("design:type", String)
    ], SynthesisTask.prototype, "textType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoiceId" }),
        __metadata("design:type", String)
    ], SynthesisTask.prototype, "voiceId", void 0);
    return SynthesisTask;
}(SpeakeasyBase));
export { SynthesisTask };
