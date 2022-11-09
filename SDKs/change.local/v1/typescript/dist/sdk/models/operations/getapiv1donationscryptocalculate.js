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
export var GetApiV1DonationsCryptoCalculateCurrencyEnum;
(function (GetApiV1DonationsCryptoCalculateCurrencyEnum) {
    GetApiV1DonationsCryptoCalculateCurrencyEnum["Eth"] = "eth";
    GetApiV1DonationsCryptoCalculateCurrencyEnum["Btc"] = "btc";
})(GetApiV1DonationsCryptoCalculateCurrencyEnum || (GetApiV1DonationsCryptoCalculateCurrencyEnum = {}));
var GetApiV1DonationsCryptoCalculateQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCryptoCalculateQueryParams, _super);
    function GetApiV1DonationsCryptoCalculateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCryptoCalculateQueryParams.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetApiV1DonationsCryptoCalculateQueryParams.prototype, "currency", void 0);
    return GetApiV1DonationsCryptoCalculateQueryParams;
}(SpeakeasyBase));
export { GetApiV1DonationsCryptoCalculateQueryParams };
var GetApiV1DonationsCryptoCalculateSecurity = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCryptoCalculateSecurity, _super);
    function GetApiV1DonationsCryptoCalculateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetApiV1DonationsCryptoCalculateSecurity.prototype, "basicAuth", void 0);
    return GetApiV1DonationsCryptoCalculateSecurity;
}(SpeakeasyBase));
export { GetApiV1DonationsCryptoCalculateSecurity };
var GetApiV1DonationsCryptoCalculateRequest = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCryptoCalculateRequest, _super);
    function GetApiV1DonationsCryptoCalculateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiV1DonationsCryptoCalculateQueryParams)
    ], GetApiV1DonationsCryptoCalculateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiV1DonationsCryptoCalculateSecurity)
    ], GetApiV1DonationsCryptoCalculateRequest.prototype, "security", void 0);
    return GetApiV1DonationsCryptoCalculateRequest;
}(SpeakeasyBase));
export { GetApiV1DonationsCryptoCalculateRequest };
var GetApiV1DonationsCryptoCalculateResponse = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCryptoCalculateResponse, _super);
    function GetApiV1DonationsCryptoCalculateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiV1DonationsCryptoCalculateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCryptoCalculateResponse.prototype, "statusCode", void 0);
    return GetApiV1DonationsCryptoCalculateResponse;
}(SpeakeasyBase));
export { GetApiV1DonationsCryptoCalculateResponse };
