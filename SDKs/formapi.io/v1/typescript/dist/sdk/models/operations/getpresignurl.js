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
var GetPresignUrlSecurity = /** @class */ (function (_super) {
    __extends(GetPresignUrlSecurity, _super);
    function GetPresignUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], GetPresignUrlSecurity.prototype, "apiTokenBasic", void 0);
    return GetPresignUrlSecurity;
}(SpeakeasyBase));
export { GetPresignUrlSecurity };
var GetPresignUrlUploadPresignFields = /** @class */ (function (_super) {
    __extends(GetPresignUrlUploadPresignFields, _super);
    function GetPresignUrlUploadPresignFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], GetPresignUrlUploadPresignFields.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], GetPresignUrlUploadPresignFields.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x-amz-algorithm" }),
        __metadata("design:type", String)
    ], GetPresignUrlUploadPresignFields.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x-amz-credential" }),
        __metadata("design:type", String)
    ], GetPresignUrlUploadPresignFields.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x-amz-date" }),
        __metadata("design:type", String)
    ], GetPresignUrlUploadPresignFields.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=x-amz-signature" }),
        __metadata("design:type", String)
    ], GetPresignUrlUploadPresignFields.prototype, "xAmzSignature", void 0);
    return GetPresignUrlUploadPresignFields;
}(SpeakeasyBase));
export { GetPresignUrlUploadPresignFields };
export var GetPresignUrlUploadPresignMethodEnum;
(function (GetPresignUrlUploadPresignMethodEnum) {
    GetPresignUrlUploadPresignMethodEnum["Post"] = "post";
})(GetPresignUrlUploadPresignMethodEnum || (GetPresignUrlUploadPresignMethodEnum = {}));
var GetPresignUrlUploadPresign = /** @class */ (function (_super) {
    __extends(GetPresignUrlUploadPresign, _super);
    function GetPresignUrlUploadPresign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", GetPresignUrlUploadPresignFields)
    ], GetPresignUrlUploadPresign.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], GetPresignUrlUploadPresign.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], GetPresignUrlUploadPresign.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetPresignUrlUploadPresign.prototype, "url", void 0);
    return GetPresignUrlUploadPresign;
}(SpeakeasyBase));
export { GetPresignUrlUploadPresign };
var GetPresignUrlRequest = /** @class */ (function (_super) {
    __extends(GetPresignUrlRequest, _super);
    function GetPresignUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPresignUrlSecurity)
    ], GetPresignUrlRequest.prototype, "security", void 0);
    return GetPresignUrlRequest;
}(SpeakeasyBase));
export { GetPresignUrlRequest };
var GetPresignUrlResponse = /** @class */ (function (_super) {
    __extends(GetPresignUrlResponse, _super);
    function GetPresignUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPresignUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPresignUrlResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], GetPresignUrlResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPresignUrlUploadPresign)
    ], GetPresignUrlResponse.prototype, "uploadPresign", void 0);
    return GetPresignUrlResponse;
}(SpeakeasyBase));
export { GetPresignUrlResponse };
