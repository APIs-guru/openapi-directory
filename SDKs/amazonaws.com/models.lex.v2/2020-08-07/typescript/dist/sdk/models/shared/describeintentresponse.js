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
import { DialogCodeHookSettings } from "./dialogcodehooksettings";
import { FulfillmentCodeHookSettings } from "./fulfillmentcodehooksettings";
import { InputContext } from "./inputcontext";
import { IntentClosingSetting } from "./intentclosingsetting";
import { IntentConfirmationSetting } from "./intentconfirmationsetting";
import { KendraConfiguration } from "./kendraconfiguration";
import { OutputContext } from "./outputcontext";
import { SampleUtterance } from "./sampleutterance";
import { SlotPriority } from "./slotpriority";
var DescribeIntentResponse = /** @class */ (function (_super) {
    __extends(DescribeIntentResponse, _super);
    function DescribeIntentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botId" }),
        __metadata("design:type", String)
    ], DescribeIntentResponse.prototype, "botId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=botVersion" }),
        __metadata("design:type", String)
    ], DescribeIntentResponse.prototype, "botVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDateTime" }),
        __metadata("design:type", Date)
    ], DescribeIntentResponse.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DescribeIntentResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogCodeHook" }),
        __metadata("design:type", DialogCodeHookSettings)
    ], DescribeIntentResponse.prototype, "dialogCodeHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentCodeHook" }),
        __metadata("design:type", FulfillmentCodeHookSettings)
    ], DescribeIntentResponse.prototype, "fulfillmentCodeHook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputContexts", elemType: InputContext }),
        __metadata("design:type", Array)
    ], DescribeIntentResponse.prototype, "inputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentClosingSetting" }),
        __metadata("design:type", IntentClosingSetting)
    ], DescribeIntentResponse.prototype, "intentClosingSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentConfirmationSetting" }),
        __metadata("design:type", IntentConfirmationSetting)
    ], DescribeIntentResponse.prototype, "intentConfirmationSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentId" }),
        __metadata("design:type", String)
    ], DescribeIntentResponse.prototype, "intentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentName" }),
        __metadata("design:type", String)
    ], DescribeIntentResponse.prototype, "intentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kendraConfiguration" }),
        __metadata("design:type", KendraConfiguration)
    ], DescribeIntentResponse.prototype, "kendraConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], DescribeIntentResponse.prototype, "lastUpdatedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localeId" }),
        __metadata("design:type", String)
    ], DescribeIntentResponse.prototype, "localeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: OutputContext }),
        __metadata("design:type", Array)
    ], DescribeIntentResponse.prototype, "outputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentIntentSignature" }),
        __metadata("design:type", String)
    ], DescribeIntentResponse.prototype, "parentIntentSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleUtterances", elemType: SampleUtterance }),
        __metadata("design:type", Array)
    ], DescribeIntentResponse.prototype, "sampleUtterances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotPriorities", elemType: SlotPriority }),
        __metadata("design:type", Array)
    ], DescribeIntentResponse.prototype, "slotPriorities", void 0);
    return DescribeIntentResponse;
}(SpeakeasyBase));
export { DescribeIntentResponse };
