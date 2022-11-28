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
var PostProxyHeaders = /** @class */ (function (_super) {
    __extends(PostProxyHeaders, _super);
    function PostProxyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], PostProxyHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], PostProxyHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-downstream-authorization" }),
        __metadata("design:type", String)
    ], PostProxyHeaders.prototype, "xApideckDownstreamAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-downstream-url" }),
        __metadata("design:type", String)
    ], PostProxyHeaders.prototype, "xApideckDownstreamUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], PostProxyHeaders.prototype, "xApideckServiceId", void 0);
    return PostProxyHeaders;
}(SpeakeasyBase));
export { PostProxyHeaders };
var PostProxySecurity = /** @class */ (function (_super) {
    __extends(PostProxySecurity, _super);
    function PostProxySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PostProxySecurity.prototype, "apiKey", void 0);
    return PostProxySecurity;
}(SpeakeasyBase));
export { PostProxySecurity };
var PostProxy401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostProxy401ApplicationJson, _super);
    function PostProxy401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], PostProxy401ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], PostProxy401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostProxy401ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], PostProxy401ApplicationJson.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_code" }),
        __metadata("design:type", Number)
    ], PostProxy401ApplicationJson.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type_name" }),
        __metadata("design:type", String)
    ], PostProxy401ApplicationJson.prototype, "typeName", void 0);
    return PostProxy401ApplicationJson;
}(SpeakeasyBase));
export { PostProxy401ApplicationJson };
var PostProxyRequest = /** @class */ (function (_super) {
    __extends(PostProxyRequest, _super);
    function PostProxyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProxyHeaders)
    ], PostProxyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=*/*" }),
        __metadata("design:type", Uint8Array)
    ], PostProxyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProxySecurity)
    ], PostProxyRequest.prototype, "security", void 0);
    return PostProxyRequest;
}(SpeakeasyBase));
export { PostProxyRequest };
var PostProxyResponse = /** @class */ (function (_super) {
    __extends(PostProxyResponse, _super);
    function PostProxyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostProxyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostProxyResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostProxyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostProxyResponse.prototype, "postProxy200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostProxy401ApplicationJson)
    ], PostProxyResponse.prototype, "postProxy401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostProxyResponse.prototype, "postProxyDefaultApplicationJsonAny", void 0);
    return PostProxyResponse;
}(SpeakeasyBase));
export { PostProxyResponse };
