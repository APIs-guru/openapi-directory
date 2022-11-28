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
var GetSaveOfferQueryParams = /** @class */ (function (_super) {
    __extends(GetSaveOfferQueryParams, _super);
    function GetSaveOfferQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetSaveOfferQueryParams.prototype, "lang", void 0);
    return GetSaveOfferQueryParams;
}(SpeakeasyBase));
export { GetSaveOfferQueryParams };
var GetSaveOfferSecurity = /** @class */ (function (_super) {
    __extends(GetSaveOfferSecurity, _super);
    function GetSaveOfferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], GetSaveOfferSecurity.prototype, "accountAuth", void 0);
    return GetSaveOfferSecurity;
}(SpeakeasyBase));
export { GetSaveOfferSecurity };
var GetSaveOfferRequest = /** @class */ (function (_super) {
    __extends(GetSaveOfferRequest, _super);
    function GetSaveOfferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSaveOfferQueryParams)
    ], GetSaveOfferRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSaveOfferSecurity)
    ], GetSaveOfferRequest.prototype, "security", void 0);
    return GetSaveOfferRequest;
}(SpeakeasyBase));
export { GetSaveOfferRequest };
var GetSaveOfferResponse = /** @class */ (function (_super) {
    __extends(GetSaveOfferResponse, _super);
    function GetSaveOfferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSaveOfferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItvGetDiscountResponse)
    ], GetSaveOfferResponse.prototype, "itvGetDiscountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetSaveOfferResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSaveOfferResponse.prototype, "statusCode", void 0);
    return GetSaveOfferResponse;
}(SpeakeasyBase));
export { GetSaveOfferResponse };
