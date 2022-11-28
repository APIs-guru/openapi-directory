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
var GetBotResponse = /** @class */ (function (_super) {
    __extends(GetBotResponse, _super);
    function GetBotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abortStatement" }),
        __metadata("design:type", Statement)
    ], GetBotResponse.prototype, "abortStatement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checksum" }),
        __metadata("design:type", String)
    ], GetBotResponse.prototype, "checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childDirected" }),
        __metadata("design:type", Boolean)
    ], GetBotResponse.prototype, "childDirected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clarificationPrompt" }),
        __metadata("design:type", Prompt)
    ], GetBotResponse.prototype, "clarificationPrompt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], GetBotResponse.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBotResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectSentiment" }),
        __metadata("design:type", Boolean)
    ], GetBotResponse.prototype, "detectSentiment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableModelImprovements" }),
        __metadata("design:type", Boolean)
    ], GetBotResponse.prototype, "enableModelImprovements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], GetBotResponse.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idleSessionTTLInSeconds" }),
        __metadata("design:type", Number)
    ], GetBotResponse.prototype, "idleSessionTtlInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intents", elemType: Intent }),
        __metadata("design:type", Array)
    ], GetBotResponse.prototype, "intents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" }),
        __metadata("design:type", Date)
    ], GetBotResponse.prototype, "lastUpdatedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], GetBotResponse.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetBotResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluIntentConfidenceThreshold" }),
        __metadata("design:type", Number)
    ], GetBotResponse.prototype, "nluIntentConfidenceThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBotResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], GetBotResponse.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceId" }),
        __metadata("design:type", String)
    ], GetBotResponse.prototype, "voiceId", void 0);
    return GetBotResponse;
}(SpeakeasyBase));
export { GetBotResponse };
