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
var GetRateTablesQueryParams = /** @class */ (function (_super) {
    __extends(GetRateTablesQueryParams, _super);
    function GetRateTablesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country_code" }),
        __metadata("design:type", String)
    ], GetRateTablesQueryParams.prototype, "countryCode", void 0);
    return GetRateTablesQueryParams;
}(SpeakeasyBase));
export { GetRateTablesQueryParams };
var GetRateTablesSecurity = /** @class */ (function (_super) {
    __extends(GetRateTablesSecurity, _super);
    function GetRateTablesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetRateTablesSecurity.prototype, "apiAuth", void 0);
    return GetRateTablesSecurity;
}(SpeakeasyBase));
export { GetRateTablesSecurity };
var GetRateTablesRequest = /** @class */ (function (_super) {
    __extends(GetRateTablesRequest, _super);
    function GetRateTablesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRateTablesQueryParams)
    ], GetRateTablesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRateTablesSecurity)
    ], GetRateTablesRequest.prototype, "security", void 0);
    return GetRateTablesRequest;
}(SpeakeasyBase));
export { GetRateTablesRequest };
var GetRateTablesResponse = /** @class */ (function (_super) {
    __extends(GetRateTablesResponse, _super);
    function GetRateTablesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRateTablesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RateTableResponse)
    ], GetRateTablesResponse.prototype, "rateTableResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRateTablesResponse.prototype, "statusCode", void 0);
    return GetRateTablesResponse;
}(SpeakeasyBase));
export { GetRateTablesResponse };
