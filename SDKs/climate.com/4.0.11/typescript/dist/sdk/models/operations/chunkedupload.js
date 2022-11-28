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
var ChunkedUploadPathParams = /** @class */ (function (_super) {
    __extends(ChunkedUploadPathParams, _super);
    function ChunkedUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uploadId" }),
        __metadata("design:type", String)
    ], ChunkedUploadPathParams.prototype, "uploadId", void 0);
    return ChunkedUploadPathParams;
}(SpeakeasyBase));
export { ChunkedUploadPathParams };
var ChunkedUploadHeaders = /** @class */ (function (_super) {
    __extends(ChunkedUploadHeaders, _super);
    function ChunkedUploadHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" }),
        __metadata("design:type", String)
    ], ChunkedUploadHeaders.prototype, "contentRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], ChunkedUploadHeaders.prototype, "contentType", void 0);
    return ChunkedUploadHeaders;
}(SpeakeasyBase));
export { ChunkedUploadHeaders };
var ChunkedUploadSecurity = /** @class */ (function (_super) {
    __extends(ChunkedUploadSecurity, _super);
    function ChunkedUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ChunkedUploadSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], ChunkedUploadSecurity.prototype, "oauth2AuthorizationCode", void 0);
    return ChunkedUploadSecurity;
}(SpeakeasyBase));
export { ChunkedUploadSecurity };
var ChunkedUploadRequest = /** @class */ (function (_super) {
    __extends(ChunkedUploadRequest, _super);
    function ChunkedUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChunkedUploadPathParams)
    ], ChunkedUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChunkedUploadHeaders)
    ], ChunkedUploadRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChunkedUploadSecurity)
    ], ChunkedUploadRequest.prototype, "security", void 0);
    return ChunkedUploadRequest;
}(SpeakeasyBase));
export { ChunkedUploadRequest };
var ChunkedUploadResponse = /** @class */ (function (_super) {
    __extends(ChunkedUploadResponse, _super);
    function ChunkedUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChunkedUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], ChunkedUploadResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ChunkedUploadResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChunkedUploadResponse.prototype, "statusCode", void 0);
    return ChunkedUploadResponse;
}(SpeakeasyBase));
export { ChunkedUploadResponse };
