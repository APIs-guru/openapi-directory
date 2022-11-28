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
import { BotLocaleStatusEnum } from "./botlocalestatusenum";
import { VoiceSettings } from "./voicesettings";
var CreateBotLocaleResponse = /** @class */ (function (_super) {
    __extends(CreateBotLocaleResponse, _super);
    function CreateBotLocaleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botId" }),
        __metadata("design:type", String)
    ], CreateBotLocaleResponse.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botLocaleStatus" }),
        __metadata("design:type", String)
    ], CreateBotLocaleResponse.prototype, "botLocaleStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botVersion" }),
        __metadata("design:type", String)
    ], CreateBotLocaleResponse.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDateTime" }),
        __metadata("design:type", Date)
    ], CreateBotLocaleResponse.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateBotLocaleResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localeId" }),
        __metadata("design:type", String)
    ], CreateBotLocaleResponse.prototype, "localeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localeName" }),
        __metadata("design:type", String)
    ], CreateBotLocaleResponse.prototype, "localeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluIntentConfidenceThreshold" }),
        __metadata("design:type", Number)
    ], CreateBotLocaleResponse.prototype, "nluIntentConfidenceThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceSettings" }),
        __metadata("design:type", VoiceSettings)
    ], CreateBotLocaleResponse.prototype, "voiceSettings", void 0);
    return CreateBotLocaleResponse;
}(SpeakeasyBase));
export { CreateBotLocaleResponse };
