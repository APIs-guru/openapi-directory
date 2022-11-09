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
var GetRawMessageContentPathParams = /** @class */ (function (_super) {
    __extends(GetRawMessageContentPathParams, _super);
    function GetRawMessageContentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=messageId" }),
        __metadata("design:type", String)
    ], GetRawMessageContentPathParams.prototype, "messageId", void 0);
    return GetRawMessageContentPathParams;
}(SpeakeasyBase));
export { GetRawMessageContentPathParams };
var GetRawMessageContentHeaders = /** @class */ (function (_super) {
    __extends(GetRawMessageContentHeaders, _super);
    function GetRawMessageContentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRawMessageContentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRawMessageContentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRawMessageContentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRawMessageContentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRawMessageContentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRawMessageContentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRawMessageContentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRawMessageContentHeaders;
}(SpeakeasyBase));
export { GetRawMessageContentHeaders };
var GetRawMessageContentRequest = /** @class */ (function (_super) {
    __extends(GetRawMessageContentRequest, _super);
    function GetRawMessageContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRawMessageContentPathParams)
    ], GetRawMessageContentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRawMessageContentHeaders)
    ], GetRawMessageContentRequest.prototype, "headers", void 0);
    return GetRawMessageContentRequest;
}(SpeakeasyBase));
export { GetRawMessageContentRequest };
var GetRawMessageContentResponse = /** @class */ (function (_super) {
    __extends(GetRawMessageContentResponse, _super);
    function GetRawMessageContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRawMessageContentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetRawMessageContentResponse)
    ], GetRawMessageContentResponse.prototype, "getRawMessageContentResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetRawMessageContentResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRawMessageContentResponse.prototype, "statusCode", void 0);
    return GetRawMessageContentResponse;
}(SpeakeasyBase));
export { GetRawMessageContentResponse };
