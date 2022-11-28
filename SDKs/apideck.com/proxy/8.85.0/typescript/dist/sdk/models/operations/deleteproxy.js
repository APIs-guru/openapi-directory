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
var DeleteProxyHeaders = /** @class */ (function (_super) {
    __extends(DeleteProxyHeaders, _super);
    function DeleteProxyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], DeleteProxyHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], DeleteProxyHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-downstream-authorization" }),
        __metadata("design:type", String)
    ], DeleteProxyHeaders.prototype, "xApideckDownstreamAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-downstream-url" }),
        __metadata("design:type", String)
    ], DeleteProxyHeaders.prototype, "xApideckDownstreamUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], DeleteProxyHeaders.prototype, "xApideckServiceId", void 0);
    return DeleteProxyHeaders;
}(SpeakeasyBase));
export { DeleteProxyHeaders };
var DeleteProxySecurity = /** @class */ (function (_super) {
    __extends(DeleteProxySecurity, _super);
    function DeleteProxySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DeleteProxySecurity.prototype, "apiKey", void 0);
    return DeleteProxySecurity;
}(SpeakeasyBase));
export { DeleteProxySecurity };
var DeleteProxy401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteProxy401ApplicationJson, _super);
    function DeleteProxy401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], DeleteProxy401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], DeleteProxy401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteProxy401ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], DeleteProxy401ApplicationJson.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_code" }),
        __metadata("design:type", Number)
    ], DeleteProxy401ApplicationJson.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type_name" }),
        __metadata("design:type", String)
    ], DeleteProxy401ApplicationJson.prototype, "typeName", void 0);
    return DeleteProxy401ApplicationJson;
}(SpeakeasyBase));
export { DeleteProxy401ApplicationJson };
var DeleteProxyRequest = /** @class */ (function (_super) {
    __extends(DeleteProxyRequest, _super);
    function DeleteProxyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProxyHeaders)
    ], DeleteProxyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProxySecurity)
    ], DeleteProxyRequest.prototype, "security", void 0);
    return DeleteProxyRequest;
}(SpeakeasyBase));
export { DeleteProxyRequest };
var DeleteProxyResponse = /** @class */ (function (_super) {
    __extends(DeleteProxyResponse, _super);
    function DeleteProxyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProxyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteProxyResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteProxyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProxyResponse.prototype, "deleteProxy200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProxy401ApplicationJson)
    ], DeleteProxyResponse.prototype, "deleteProxy401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteProxyResponse.prototype, "deleteProxyDefaultApplicationJsonAny", void 0);
    return DeleteProxyResponse;
}(SpeakeasyBase));
export { DeleteProxyResponse };
