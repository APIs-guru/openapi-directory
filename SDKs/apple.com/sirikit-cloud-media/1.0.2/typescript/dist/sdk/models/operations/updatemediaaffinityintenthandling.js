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
var UpdateMediaAffinityIntentHandlingHeaders = /** @class */ (function (_super) {
    __extends(UpdateMediaAffinityIntentHandlingHeaders, _super);
    function UpdateMediaAffinityIntentHandlingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], UpdateMediaAffinityIntentHandlingHeaders.prototype, "acceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Request-Timeout" }),
        __metadata("design:type", Number)
    ], UpdateMediaAffinityIntentHandlingHeaders.prototype, "requestTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=User-Agent" }),
        __metadata("design:type", String)
    ], UpdateMediaAffinityIntentHandlingHeaders.prototype, "userAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-retry-count" }),
        __metadata("design:type", Number)
    ], UpdateMediaAffinityIntentHandlingHeaders.prototype, "xApplecloudextensionRetryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-session-id" }),
        __metadata("design:type", String)
    ], UpdateMediaAffinityIntentHandlingHeaders.prototype, "xApplecloudextensionSessionId", void 0);
    return UpdateMediaAffinityIntentHandlingHeaders;
}(SpeakeasyBase));
export { UpdateMediaAffinityIntentHandlingHeaders };
var UpdateMediaAffinityIntentHandlingRequest = /** @class */ (function (_super) {
    __extends(UpdateMediaAffinityIntentHandlingRequest, _super);
    function UpdateMediaAffinityIntentHandlingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMediaAffinityIntentHandlingHeaders)
    ], UpdateMediaAffinityIntentHandlingRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.UpdateMediaAffinityIntentHandlingInvocation }),
        __metadata("design:type", Array)
    ], UpdateMediaAffinityIntentHandlingRequest.prototype, "request", void 0);
    return UpdateMediaAffinityIntentHandlingRequest;
}(SpeakeasyBase));
export { UpdateMediaAffinityIntentHandlingRequest };
var UpdateMediaAffinityIntentHandlingResponse = /** @class */ (function (_super) {
    __extends(UpdateMediaAffinityIntentHandlingResponse, _super);
    function UpdateMediaAffinityIntentHandlingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMediaAffinityIntentHandlingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateMediaAffinityIntentHandlingResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateMediaAffinityIntentHandlingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], UpdateMediaAffinityIntentHandlingResponse.prototype, "updateMediaAffinityIntentHandlingInvocationResponses", void 0);
    return UpdateMediaAffinityIntentHandlingResponse;
}(SpeakeasyBase));
export { UpdateMediaAffinityIntentHandlingResponse };
