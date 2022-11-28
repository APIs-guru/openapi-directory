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
var FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams = /** @class */ (function (_super) {
    __extends(FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams, _super);
    function FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" }),
        __metadata("design:type", String)
    ], FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams.prototype, "firmwareHash", void 0);
    return FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams;
}(SpeakeasyBase));
export { FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams };
var FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity = /** @class */ (function (_super) {
    __extends(FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity, _super);
    function FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyHeader)
    ], FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity.prototype, "apiKeyHeader", void 0);
    return FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity;
}(SpeakeasyBase));
export { FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity };
var FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest = /** @class */ (function (_super) {
    __extends(FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest, _super);
    function FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams)
    ], FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity)
    ], FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest.prototype, "security", void 0);
    return FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest;
}(SpeakeasyBase));
export { FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest };
var FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse = /** @class */ (function (_super) {
    __extends(FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse, _super);
    function FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CryptoKey }),
        __metadata("design:type", Array)
    ], FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse.prototype, "cryptoKeys", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse.prototype, "statusCode", void 0);
    return FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse;
}(SpeakeasyBase));
export { FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse };
