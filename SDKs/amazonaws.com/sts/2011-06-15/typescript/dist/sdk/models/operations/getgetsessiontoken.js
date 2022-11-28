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
export var GetGetSessionTokenActionEnum;
(function (GetGetSessionTokenActionEnum) {
    GetGetSessionTokenActionEnum["GetSessionToken"] = "GetSessionToken";
})(GetGetSessionTokenActionEnum || (GetGetSessionTokenActionEnum = {}));
export var GetGetSessionTokenVersionEnum;
(function (GetGetSessionTokenVersionEnum) {
    GetGetSessionTokenVersionEnum["TwoThousandAndEleven0615"] = "2011-06-15";
})(GetGetSessionTokenVersionEnum || (GetGetSessionTokenVersionEnum = {}));
var GetGetSessionTokenQueryParams = /** @class */ (function (_super) {
    __extends(GetGetSessionTokenQueryParams, _super);
    function GetGetSessionTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetSessionTokenQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DurationSeconds" }),
        __metadata("design:type", Number)
    ], GetGetSessionTokenQueryParams.prototype, "durationSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SerialNumber" }),
        __metadata("design:type", String)
    ], GetGetSessionTokenQueryParams.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TokenCode" }),
        __metadata("design:type", String)
    ], GetGetSessionTokenQueryParams.prototype, "tokenCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetSessionTokenQueryParams.prototype, "version", void 0);
    return GetGetSessionTokenQueryParams;
}(SpeakeasyBase));
export { GetGetSessionTokenQueryParams };
var GetGetSessionTokenHeaders = /** @class */ (function (_super) {
    __extends(GetGetSessionTokenHeaders, _super);
    function GetGetSessionTokenHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetSessionTokenHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetSessionTokenHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetSessionTokenHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetSessionTokenHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetSessionTokenHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetSessionTokenHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetSessionTokenHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetSessionTokenHeaders;
}(SpeakeasyBase));
export { GetGetSessionTokenHeaders };
var GetGetSessionTokenRequest = /** @class */ (function (_super) {
    __extends(GetGetSessionTokenRequest, _super);
    function GetGetSessionTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetSessionTokenQueryParams)
    ], GetGetSessionTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetSessionTokenHeaders)
    ], GetGetSessionTokenRequest.prototype, "headers", void 0);
    return GetGetSessionTokenRequest;
}(SpeakeasyBase));
export { GetGetSessionTokenRequest };
var GetGetSessionTokenResponse = /** @class */ (function (_super) {
    __extends(GetGetSessionTokenResponse, _super);
    function GetGetSessionTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetSessionTokenResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetSessionTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetSessionTokenResponse.prototype, "statusCode", void 0);
    return GetGetSessionTokenResponse;
}(SpeakeasyBase));
export { GetGetSessionTokenResponse };
