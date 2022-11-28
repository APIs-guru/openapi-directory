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
var FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams = /** @class */ (function (_super) {
    __extends(FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams, _super);
    function FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" }),
        __metadata("design:type", String)
    ], FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams.prototype, "firmwareHash", void 0);
    return FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams;
}(SpeakeasyBase));
export { FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams };
var FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity = /** @class */ (function (_super) {
    __extends(FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity, _super);
    function FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyHeader)
    ], FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity.prototype, "apiKeyHeader", void 0);
    return FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity;
}(SpeakeasyBase));
export { FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity };
var FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest = /** @class */ (function (_super) {
    __extends(FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest, _super);
    function FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams)
    ], FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity)
    ], FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest.prototype, "security", void 0);
    return FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest;
}(SpeakeasyBase));
export { FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest };
var FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse = /** @class */ (function (_super) {
    __extends(FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse, _super);
    function FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CryptoKey }),
        __metadata("design:type", Array)
    ], FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse.prototype, "cryptoKeys", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse.prototype, "statusCode", void 0);
    return FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse;
}(SpeakeasyBase));
export { FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse };
