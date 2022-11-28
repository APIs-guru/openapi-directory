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
export var GetRotateEncryptionKeyActionEnum;
(function (GetRotateEncryptionKeyActionEnum) {
    GetRotateEncryptionKeyActionEnum["RotateEncryptionKey"] = "RotateEncryptionKey";
})(GetRotateEncryptionKeyActionEnum || (GetRotateEncryptionKeyActionEnum = {}));
export var GetRotateEncryptionKeyVersionEnum;
(function (GetRotateEncryptionKeyVersionEnum) {
    GetRotateEncryptionKeyVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetRotateEncryptionKeyVersionEnum || (GetRotateEncryptionKeyVersionEnum = {}));
var GetRotateEncryptionKeyQueryParams = /** @class */ (function (_super) {
    __extends(GetRotateEncryptionKeyQueryParams, _super);
    function GetRotateEncryptionKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRotateEncryptionKeyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetRotateEncryptionKeyQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRotateEncryptionKeyQueryParams.prototype, "version", void 0);
    return GetRotateEncryptionKeyQueryParams;
}(SpeakeasyBase));
export { GetRotateEncryptionKeyQueryParams };
var GetRotateEncryptionKeyHeaders = /** @class */ (function (_super) {
    __extends(GetRotateEncryptionKeyHeaders, _super);
    function GetRotateEncryptionKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRotateEncryptionKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRotateEncryptionKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRotateEncryptionKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRotateEncryptionKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRotateEncryptionKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRotateEncryptionKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRotateEncryptionKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRotateEncryptionKeyHeaders;
}(SpeakeasyBase));
export { GetRotateEncryptionKeyHeaders };
var GetRotateEncryptionKeyRequest = /** @class */ (function (_super) {
    __extends(GetRotateEncryptionKeyRequest, _super);
    function GetRotateEncryptionKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRotateEncryptionKeyQueryParams)
    ], GetRotateEncryptionKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRotateEncryptionKeyHeaders)
    ], GetRotateEncryptionKeyRequest.prototype, "headers", void 0);
    return GetRotateEncryptionKeyRequest;
}(SpeakeasyBase));
export { GetRotateEncryptionKeyRequest };
var GetRotateEncryptionKeyResponse = /** @class */ (function (_super) {
    __extends(GetRotateEncryptionKeyResponse, _super);
    function GetRotateEncryptionKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRotateEncryptionKeyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRotateEncryptionKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRotateEncryptionKeyResponse.prototype, "statusCode", void 0);
    return GetRotateEncryptionKeyResponse;
}(SpeakeasyBase));
export { GetRotateEncryptionKeyResponse };
