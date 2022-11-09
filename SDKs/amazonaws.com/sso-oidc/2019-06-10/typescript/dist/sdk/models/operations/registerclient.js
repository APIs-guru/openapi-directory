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
var RegisterClientHeaders = /** @class */ (function (_super) {
    __extends(RegisterClientHeaders, _super);
    function RegisterClientHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RegisterClientHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RegisterClientHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RegisterClientHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RegisterClientHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RegisterClientHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RegisterClientHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RegisterClientHeaders.prototype, "xAmzSignedHeaders", void 0);
    return RegisterClientHeaders;
}(SpeakeasyBase));
export { RegisterClientHeaders };
var RegisterClientRequestBody = /** @class */ (function (_super) {
    __extends(RegisterClientRequestBody, _super);
    function RegisterClientRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=clientName" }),
        __metadata("design:type", String)
    ], RegisterClientRequestBody.prototype, "clientName", void 0);
    __decorate([
        Metadata({ data: "json, name=clientType" }),
        __metadata("design:type", String)
    ], RegisterClientRequestBody.prototype, "clientType", void 0);
    __decorate([
        Metadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], RegisterClientRequestBody.prototype, "scopes", void 0);
    return RegisterClientRequestBody;
}(SpeakeasyBase));
export { RegisterClientRequestBody };
var RegisterClientRequest = /** @class */ (function (_super) {
    __extends(RegisterClientRequest, _super);
    function RegisterClientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RegisterClientHeaders)
    ], RegisterClientRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RegisterClientRequestBody)
    ], RegisterClientRequest.prototype, "request", void 0);
    return RegisterClientRequest;
}(SpeakeasyBase));
export { RegisterClientRequest };
var RegisterClientResponse = /** @class */ (function (_super) {
    __extends(RegisterClientResponse, _super);
    function RegisterClientResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RegisterClientResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegisterClientResponse.prototype, "internalServerException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegisterClientResponse.prototype, "invalidClientMetadataException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegisterClientResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], RegisterClientResponse.prototype, "invalidScopeException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RegisterClientResponse)
    ], RegisterClientResponse.prototype, "registerClientResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RegisterClientResponse.prototype, "statusCode", void 0);
    return RegisterClientResponse;
}(SpeakeasyBase));
export { RegisterClientResponse };
