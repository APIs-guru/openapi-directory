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
var FirmwareRiskFirmwareFirmwareHashRiskGetPathParams = /** @class */ (function (_super) {
    __extends(FirmwareRiskFirmwareFirmwareHashRiskGetPathParams, _super);
    function FirmwareRiskFirmwareFirmwareHashRiskGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" }),
        __metadata("design:type", String)
    ], FirmwareRiskFirmwareFirmwareHashRiskGetPathParams.prototype, "firmwareHash", void 0);
    return FirmwareRiskFirmwareFirmwareHashRiskGetPathParams;
}(SpeakeasyBase));
export { FirmwareRiskFirmwareFirmwareHashRiskGetPathParams };
var FirmwareRiskFirmwareFirmwareHashRiskGetSecurity = /** @class */ (function (_super) {
    __extends(FirmwareRiskFirmwareFirmwareHashRiskGetSecurity, _super);
    function FirmwareRiskFirmwareFirmwareHashRiskGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyHeader)
    ], FirmwareRiskFirmwareFirmwareHashRiskGetSecurity.prototype, "apiKeyHeader", void 0);
    return FirmwareRiskFirmwareFirmwareHashRiskGetSecurity;
}(SpeakeasyBase));
export { FirmwareRiskFirmwareFirmwareHashRiskGetSecurity };
var FirmwareRiskFirmwareFirmwareHashRiskGetRequest = /** @class */ (function (_super) {
    __extends(FirmwareRiskFirmwareFirmwareHashRiskGetRequest, _super);
    function FirmwareRiskFirmwareFirmwareHashRiskGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirmwareRiskFirmwareFirmwareHashRiskGetPathParams)
    ], FirmwareRiskFirmwareFirmwareHashRiskGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirmwareRiskFirmwareFirmwareHashRiskGetSecurity)
    ], FirmwareRiskFirmwareFirmwareHashRiskGetRequest.prototype, "security", void 0);
    return FirmwareRiskFirmwareFirmwareHashRiskGetRequest;
}(SpeakeasyBase));
export { FirmwareRiskFirmwareFirmwareHashRiskGetRequest };
var FirmwareRiskFirmwareFirmwareHashRiskGetResponse = /** @class */ (function (_super) {
    __extends(FirmwareRiskFirmwareFirmwareHashRiskGetResponse, _super);
    function FirmwareRiskFirmwareFirmwareHashRiskGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirmwareRiskFirmwareFirmwareHashRiskGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FirmwareRisk)
    ], FirmwareRiskFirmwareFirmwareHashRiskGetResponse.prototype, "firmwareRisk", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], FirmwareRiskFirmwareFirmwareHashRiskGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirmwareRiskFirmwareFirmwareHashRiskGetResponse.prototype, "statusCode", void 0);
    return FirmwareRiskFirmwareFirmwareHashRiskGetResponse;
}(SpeakeasyBase));
export { FirmwareRiskFirmwareFirmwareHashRiskGetResponse };
