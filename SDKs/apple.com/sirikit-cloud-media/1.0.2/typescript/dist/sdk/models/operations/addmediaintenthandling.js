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
var AddMediaIntentHandlingHeaders = /** @class */ (function (_super) {
    __extends(AddMediaIntentHandlingHeaders, _super);
    function AddMediaIntentHandlingHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], AddMediaIntentHandlingHeaders.prototype, "acceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Request-Timeout" }),
        __metadata("design:type", Number)
    ], AddMediaIntentHandlingHeaders.prototype, "requestTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=User-Agent" }),
        __metadata("design:type", String)
    ], AddMediaIntentHandlingHeaders.prototype, "userAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-retry-count" }),
        __metadata("design:type", Number)
    ], AddMediaIntentHandlingHeaders.prototype, "xApplecloudextensionRetryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-session-id" }),
        __metadata("design:type", String)
    ], AddMediaIntentHandlingHeaders.prototype, "xApplecloudextensionSessionId", void 0);
    return AddMediaIntentHandlingHeaders;
}(SpeakeasyBase));
export { AddMediaIntentHandlingHeaders };
var AddMediaIntentHandlingRequest = /** @class */ (function (_super) {
    __extends(AddMediaIntentHandlingRequest, _super);
    function AddMediaIntentHandlingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddMediaIntentHandlingHeaders)
    ], AddMediaIntentHandlingRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.AddMediaIntentHandlingInvocation }),
        __metadata("design:type", Array)
    ], AddMediaIntentHandlingRequest.prototype, "request", void 0);
    return AddMediaIntentHandlingRequest;
}(SpeakeasyBase));
export { AddMediaIntentHandlingRequest };
var AddMediaIntentHandlingResponse = /** @class */ (function (_super) {
    __extends(AddMediaIntentHandlingResponse, _super);
    function AddMediaIntentHandlingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], AddMediaIntentHandlingResponse.prototype, "addMediaIntentHandlingInvocationResponses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddMediaIntentHandlingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AddMediaIntentHandlingResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddMediaIntentHandlingResponse.prototype, "statusCode", void 0);
    return AddMediaIntentHandlingResponse;
}(SpeakeasyBase));
export { AddMediaIntentHandlingResponse };
