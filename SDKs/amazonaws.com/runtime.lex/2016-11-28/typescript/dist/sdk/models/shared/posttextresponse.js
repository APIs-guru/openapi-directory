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
import { ActiveContext } from "./activecontext";
import { PredictedIntent } from "./predictedintent";
import { DialogStateEnum } from "./dialogstateenum";
import { MessageFormatTypeEnum } from "./messageformattypeenum";
import { IntentConfidence } from "./intentconfidence";
import { ResponseCard } from "./responsecard";
import { SentimentResponse } from "./sentimentresponse";
var PostTextResponse = /** @class */ (function (_super) {
    __extends(PostTextResponse, _super);
    function PostTextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeContexts", elemType: ActiveContext }),
        __metadata("design:type", Array)
    ], PostTextResponse.prototype, "activeContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternativeIntents", elemType: PredictedIntent }),
        __metadata("design:type", Array)
    ], PostTextResponse.prototype, "alternativeIntents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botVersion" }),
        __metadata("design:type", String)
    ], PostTextResponse.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogState" }),
        __metadata("design:type", String)
    ], PostTextResponse.prototype, "dialogState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentName" }),
        __metadata("design:type", String)
    ], PostTextResponse.prototype, "intentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostTextResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageFormat" }),
        __metadata("design:type", String)
    ], PostTextResponse.prototype, "messageFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluIntentConfidence" }),
        __metadata("design:type", IntentConfidence)
    ], PostTextResponse.prototype, "nluIntentConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseCard" }),
        __metadata("design:type", ResponseCard)
    ], PostTextResponse.prototype, "responseCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentimentResponse" }),
        __metadata("design:type", SentimentResponse)
    ], PostTextResponse.prototype, "sentimentResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionAttributes" }),
        __metadata("design:type", Map)
    ], PostTextResponse.prototype, "sessionAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], PostTextResponse.prototype, "sessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotToElicit" }),
        __metadata("design:type", String)
    ], PostTextResponse.prototype, "slotToElicit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slots" }),
        __metadata("design:type", Map)
    ], PostTextResponse.prototype, "slots", void 0);
    return PostTextResponse;
}(SpeakeasyBase));
export { PostTextResponse };
