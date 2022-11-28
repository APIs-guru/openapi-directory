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
import * as shared from "../shared";
var PlayMediaIntentHandlingHeaders = /** @class */ (function (_super) {
    __extends(PlayMediaIntentHandlingHeaders, _super);
    function PlayMediaIntentHandlingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], PlayMediaIntentHandlingHeaders.prototype, "acceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Request-Timeout" }),
        __metadata("design:type", Number)
    ], PlayMediaIntentHandlingHeaders.prototype, "requestTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=User-Agent" }),
        __metadata("design:type", String)
    ], PlayMediaIntentHandlingHeaders.prototype, "userAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-retry-count" }),
        __metadata("design:type", Number)
    ], PlayMediaIntentHandlingHeaders.prototype, "xApplecloudextensionRetryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-session-id" }),
        __metadata("design:type", String)
    ], PlayMediaIntentHandlingHeaders.prototype, "xApplecloudextensionSessionId", void 0);
    return PlayMediaIntentHandlingHeaders;
}(SpeakeasyBase));
export { PlayMediaIntentHandlingHeaders };
var PlayMediaIntentHandlingRequest = /** @class */ (function (_super) {
    __extends(PlayMediaIntentHandlingRequest, _super);
    function PlayMediaIntentHandlingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlayMediaIntentHandlingHeaders)
    ], PlayMediaIntentHandlingRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.PlayMediaIntentHandlingInvocation }),
        __metadata("design:type", Array)
    ], PlayMediaIntentHandlingRequest.prototype, "request", void 0);
    return PlayMediaIntentHandlingRequest;
}(SpeakeasyBase));
export { PlayMediaIntentHandlingRequest };
var PlayMediaIntentHandlingResponse = /** @class */ (function (_super) {
    __extends(PlayMediaIntentHandlingResponse, _super);
    function PlayMediaIntentHandlingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlayMediaIntentHandlingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PlayMediaIntentHandlingResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], PlayMediaIntentHandlingResponse.prototype, "playMediaIntentHandlingInvocationResponses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlayMediaIntentHandlingResponse.prototype, "statusCode", void 0);
    return PlayMediaIntentHandlingResponse;
}(SpeakeasyBase));
export { PlayMediaIntentHandlingResponse };
