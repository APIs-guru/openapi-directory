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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PutProxyHeaders = /** @class */ (function (_super) {
    __extends(PutProxyHeaders, _super);
    function PutProxyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], PutProxyHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], PutProxyHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-downstream-authorization" }),
        __metadata("design:type", String)
    ], PutProxyHeaders.prototype, "xApideckDownstreamAuthorization", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-downstream-url" }),
        __metadata("design:type", String)
    ], PutProxyHeaders.prototype, "xApideckDownstreamUrl", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], PutProxyHeaders.prototype, "xApideckServiceId", void 0);
    return PutProxyHeaders;
}(SpeakeasyBase));
export { PutProxyHeaders };
var PutProxySecurity = /** @class */ (function (_super) {
    __extends(PutProxySecurity, _super);
    function PutProxySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PutProxySecurity.prototype, "apiKey", void 0);
    return PutProxySecurity;
}(SpeakeasyBase));
export { PutProxySecurity };
var PutProxyRequest = /** @class */ (function (_super) {
    __extends(PutProxyRequest, _super);
    function PutProxyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutProxyHeaders)
    ], PutProxyRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=*/*" }),
        __metadata("design:type", Uint8Array)
    ], PutProxyRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutProxySecurity)
    ], PutProxyRequest.prototype, "security", void 0);
    return PutProxyRequest;
}(SpeakeasyBase));
export { PutProxyRequest };
var PutProxy401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutProxy401ApplicationJson, _super);
    function PutProxy401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PutProxy401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PutProxy401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutProxy401ApplicationJson.prototype, "message", void 0);
    __decorate([
        Metadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], PutProxy401ApplicationJson.prototype, "ref", void 0);
    __decorate([
        Metadata({ data: "json, name=status_code" }),
        __metadata("design:type", Number)
    ], PutProxy401ApplicationJson.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ data: "json, name=type_name" }),
        __metadata("design:type", String)
    ], PutProxy401ApplicationJson.prototype, "typeName", void 0);
    return PutProxy401ApplicationJson;
}(SpeakeasyBase));
export { PutProxy401ApplicationJson };
var PutProxyResponse = /** @class */ (function (_super) {
    __extends(PutProxyResponse, _super);
    function PutProxyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutProxyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PutProxyResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutProxyResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutProxyResponse.prototype, "putProxy200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutProxy401ApplicationJson)
    ], PutProxyResponse.prototype, "putProxy401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutProxyResponse.prototype, "putProxyDefaultApplicationJsonAny", void 0);
    return PutProxyResponse;
}(SpeakeasyBase));
export { PutProxyResponse };
