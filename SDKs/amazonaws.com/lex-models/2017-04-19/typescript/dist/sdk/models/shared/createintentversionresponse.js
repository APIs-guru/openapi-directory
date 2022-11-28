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
import { CodeHook } from "./codehook";
import { FollowUpPrompt } from "./followupprompt";
import { FulfillmentActivity } from "./fulfillmentactivity";
import { InputContext } from "./inputcontext";
import { KendraConfiguration } from "./kendraconfiguration";
import { OutputContext } from "./outputcontext";
import { Slot } from "./slot";
var CreateIntentVersionResponse = /** @class */ (function (_super) {
    __extends(CreateIntentVersionResponse, _super);
    function CreateIntentVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checksum" }),
        __metadata("design:type", String)
    ], CreateIntentVersionResponse.prototype, "checksum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conclusionStatement" }),
        __metadata("design:type", Statement)
    ], CreateIntentVersionResponse.prototype, "conclusionStatement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirmationPrompt" }),
        __metadata("design:type", Prompt)
    ], CreateIntentVersionResponse.prototype, "confirmationPrompt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], CreateIntentVersionResponse.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateIntentVersionResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogCodeHook" }),
        __metadata("design:type", CodeHook)
    ], CreateIntentVersionResponse.prototype, "dialogCodeHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followUpPrompt" }),
        __metadata("design:type", FollowUpPrompt)
    ], CreateIntentVersionResponse.prototype, "followUpPrompt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentActivity" }),
        __metadata("design:type", FulfillmentActivity)
    ], CreateIntentVersionResponse.prototype, "fulfillmentActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputContexts", elemType: InputContext }),
        __metadata("design:type", Array)
    ], CreateIntentVersionResponse.prototype, "inputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kendraConfiguration" }),
        __metadata("design:type", KendraConfiguration)
    ], CreateIntentVersionResponse.prototype, "kendraConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" }),
        __metadata("design:type", Date)
    ], CreateIntentVersionResponse.prototype, "lastUpdatedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateIntentVersionResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: OutputContext }),
        __metadata("design:type", Array)
    ], CreateIntentVersionResponse.prototype, "outputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentIntentSignature" }),
        __metadata("design:type", String)
    ], CreateIntentVersionResponse.prototype, "parentIntentSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectionStatement" }),
        __metadata("design:type", Statement)
    ], CreateIntentVersionResponse.prototype, "rejectionStatement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleUtterances" }),
        __metadata("design:type", Array)
    ], CreateIntentVersionResponse.prototype, "sampleUtterances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slots", elemType: Slot }),
        __metadata("design:type", Array)
    ], CreateIntentVersionResponse.prototype, "slots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateIntentVersionResponse.prototype, "version", void 0);
    return CreateIntentVersionResponse;
}(SpeakeasyBase));
export { CreateIntentVersionResponse };
