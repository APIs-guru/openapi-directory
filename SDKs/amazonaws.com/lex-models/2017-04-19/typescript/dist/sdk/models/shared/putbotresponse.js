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
import { Statement } from "./statement";
import { Prompt } from "./prompt";
import { Intent } from "./intent";
import { LocaleEnum } from "./localeenum";
import { StatusEnum } from "./statusenum";
import { Tag } from "./tag";
var PutBotResponse = /** @class */ (function (_super) {
    __extends(PutBotResponse, _super);
    function PutBotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abortStatement" }),
        __metadata("design:type", Statement)
    ], PutBotResponse.prototype, "abortStatement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checksum" }),
        __metadata("design:type", String)
    ], PutBotResponse.prototype, "checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childDirected" }),
        __metadata("design:type", Boolean)
    ], PutBotResponse.prototype, "childDirected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clarificationPrompt" }),
        __metadata("design:type", Prompt)
    ], PutBotResponse.prototype, "clarificationPrompt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createVersion" }),
        __metadata("design:type", Boolean)
    ], PutBotResponse.prototype, "createVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], PutBotResponse.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutBotResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectSentiment" }),
        __metadata("design:type", Boolean)
    ], PutBotResponse.prototype, "detectSentiment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableModelImprovements" }),
        __metadata("design:type", Boolean)
    ], PutBotResponse.prototype, "enableModelImprovements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], PutBotResponse.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idleSessionTTLInSeconds" }),
        __metadata("design:type", Number)
    ], PutBotResponse.prototype, "idleSessionTtlInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intents", elemType: Intent }),
        __metadata("design:type", Array)
    ], PutBotResponse.prototype, "intents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" }),
        __metadata("design:type", Date)
    ], PutBotResponse.prototype, "lastUpdatedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], PutBotResponse.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutBotResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluIntentConfidenceThreshold" }),
        __metadata("design:type", Number)
    ], PutBotResponse.prototype, "nluIntentConfidenceThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutBotResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], PutBotResponse.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], PutBotResponse.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceId" }),
        __metadata("design:type", String)
    ], PutBotResponse.prototype, "voiceId", void 0);
    return PutBotResponse;
}(SpeakeasyBase));
export { PutBotResponse };
