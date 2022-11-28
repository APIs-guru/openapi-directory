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
var ExtensionConfigurationHeaders = /** @class */ (function (_super) {
    __extends(ExtensionConfigurationHeaders, _super);
    function ExtensionConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], ExtensionConfigurationHeaders.prototype, "acceptLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Cache-Control" }),
        __metadata("design:type", String)
    ], ExtensionConfigurationHeaders.prototype, "cacheControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], ExtensionConfigurationHeaders.prototype, "ifNoneMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Request-Timeout" }),
        __metadata("design:type", Number)
    ], ExtensionConfigurationHeaders.prototype, "requestTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=User-Agent" }),
        __metadata("design:type", String)
    ], ExtensionConfigurationHeaders.prototype, "userAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-retry-count" }),
        __metadata("design:type", Number)
    ], ExtensionConfigurationHeaders.prototype, "xApplecloudextensionRetryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-applecloudextension-session-id" }),
        __metadata("design:type", String)
    ], ExtensionConfigurationHeaders.prototype, "xApplecloudextensionSessionId", void 0);
    return ExtensionConfigurationHeaders;
}(SpeakeasyBase));
export { ExtensionConfigurationHeaders };
var ExtensionConfigurationRequest = /** @class */ (function (_super) {
    __extends(ExtensionConfigurationRequest, _super);
    function ExtensionConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtensionConfigurationHeaders)
    ], ExtensionConfigurationRequest.prototype, "headers", void 0);
    return ExtensionConfigurationRequest;
}(SpeakeasyBase));
export { ExtensionConfigurationRequest };
var ExtensionConfigurationResponse = /** @class */ (function (_super) {
    __extends(ExtensionConfigurationResponse, _super);
    function ExtensionConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ExtensionConfigurationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtensionConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ExtensionConfigurationResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExtensionConfigurationResponse.prototype, "statusCode", void 0);
    return ExtensionConfigurationResponse;
}(SpeakeasyBase));
export { ExtensionConfigurationResponse };
