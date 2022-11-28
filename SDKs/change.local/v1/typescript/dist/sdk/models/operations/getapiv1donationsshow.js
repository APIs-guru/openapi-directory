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
var GetApiV1DonationsShowQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsShowQueryParams, _super);
    function GetApiV1DonationsShowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetApiV1DonationsShowQueryParams.prototype, "id", void 0);
    return GetApiV1DonationsShowQueryParams;
}(SpeakeasyBase));
export { GetApiV1DonationsShowQueryParams };
var GetApiV1DonationsShowSecurity = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsShowSecurity, _super);
    function GetApiV1DonationsShowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetApiV1DonationsShowSecurity.prototype, "basicAuth", void 0);
    return GetApiV1DonationsShowSecurity;
}(SpeakeasyBase));
export { GetApiV1DonationsShowSecurity };
var GetApiV1DonationsShowRequest = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsShowRequest, _super);
    function GetApiV1DonationsShowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1DonationsShowQueryParams)
    ], GetApiV1DonationsShowRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1DonationsShowSecurity)
    ], GetApiV1DonationsShowRequest.prototype, "security", void 0);
    return GetApiV1DonationsShowRequest;
}(SpeakeasyBase));
export { GetApiV1DonationsShowRequest };
var GetApiV1DonationsShowResponse = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsShowResponse, _super);
    function GetApiV1DonationsShowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV1DonationsShowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV1DonationsShowResponse.prototype, "statusCode", void 0);
    return GetApiV1DonationsShowResponse;
}(SpeakeasyBase));
export { GetApiV1DonationsShowResponse };
