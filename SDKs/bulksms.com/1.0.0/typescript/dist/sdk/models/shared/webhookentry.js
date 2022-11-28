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
export var WebhookEntryInvokeOptionEnum;
(function (WebhookEntryInvokeOptionEnum) {
    WebhookEntryInvokeOptionEnum["One"] = "ONE";
    WebhookEntryInvokeOptionEnum["Many"] = "MANY";
})(WebhookEntryInvokeOptionEnum || (WebhookEntryInvokeOptionEnum = {}));
export var WebhookEntryTriggerScopeEnum;
(function (WebhookEntryTriggerScopeEnum) {
    WebhookEntryTriggerScopeEnum["Sent"] = "SENT";
    WebhookEntryTriggerScopeEnum["Received"] = "RECEIVED";
})(WebhookEntryTriggerScopeEnum || (WebhookEntryTriggerScopeEnum = {}));
var WebhookEntry = /** @class */ (function (_super) {
    __extends(WebhookEntry, _super);
    function WebhookEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], WebhookEntry.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactEmailAddress" }),
        __metadata("design:type", String)
    ], WebhookEntry.prototype, "contactEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invokeOption" }),
        __metadata("design:type", String)
    ], WebhookEntry.prototype, "invokeOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebhookEntry.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onWebApp" }),
        __metadata("design:type", Boolean)
    ], WebhookEntry.prototype, "onWebApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerScope" }),
        __metadata("design:type", String)
    ], WebhookEntry.prototype, "triggerScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], WebhookEntry.prototype, "url", void 0);
    return WebhookEntry;
}(SpeakeasyBase));
export { WebhookEntry };
