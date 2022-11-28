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
var GeneralApiCountriesHeaders = /** @class */ (function (_super) {
    __extends(GeneralApiCountriesHeaders, _super);
    function GeneralApiCountriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], GeneralApiCountriesHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], GeneralApiCountriesHeaders.prototype, "xAuthSecret", void 0);
    return GeneralApiCountriesHeaders;
}(SpeakeasyBase));
export { GeneralApiCountriesHeaders };
var GeneralApiCountriesRequest = /** @class */ (function (_super) {
    __extends(GeneralApiCountriesRequest, _super);
    function GeneralApiCountriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GeneralApiCountriesHeaders)
    ], GeneralApiCountriesRequest.prototype, "headers", void 0);
    return GeneralApiCountriesRequest;
}(SpeakeasyBase));
export { GeneralApiCountriesRequest };
var GeneralApiCountriesResponse = /** @class */ (function (_super) {
    __extends(GeneralApiCountriesResponse, _super);
    function GeneralApiCountriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GeneralApiCountriesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GeneralApiCountriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.CountryDetailsApiModel }),
        __metadata("design:type", Array)
    ], GeneralApiCountriesResponse.prototype, "countryDetailsApiModels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GeneralApiCountriesResponse.prototype, "statusCode", void 0);
    return GeneralApiCountriesResponse;
}(SpeakeasyBase));
export { GeneralApiCountriesResponse };
