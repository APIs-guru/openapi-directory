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
var GetVoucherByIdPathParams = /** @class */ (function (_super) {
    __extends(GetVoucherByIdPathParams, _super);
    function GetVoucherByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=planId" }),
        __metadata("design:type", String)
    ], GetVoucherByIdPathParams.prototype, "planId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=voucherId" }),
        __metadata("design:type", String)
    ], GetVoucherByIdPathParams.prototype, "voucherId", void 0);
    return GetVoucherByIdPathParams;
}(SpeakeasyBase));
export { GetVoucherByIdPathParams };
var GetVoucherByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetVoucherByIdQueryParams, _super);
    function GetVoucherByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetVoucherByIdQueryParams.prototype, "lang", void 0);
    return GetVoucherByIdQueryParams;
}(SpeakeasyBase));
export { GetVoucherByIdQueryParams };
var GetVoucherByIdSecurity = /** @class */ (function (_super) {
    __extends(GetVoucherByIdSecurity, _super);
    function GetVoucherByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], GetVoucherByIdSecurity.prototype, "accountAuth", void 0);
    return GetVoucherByIdSecurity;
}(SpeakeasyBase));
export { GetVoucherByIdSecurity };
var GetVoucherByIdRequest = /** @class */ (function (_super) {
    __extends(GetVoucherByIdRequest, _super);
    function GetVoucherByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVoucherByIdPathParams)
    ], GetVoucherByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVoucherByIdQueryParams)
    ], GetVoucherByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVoucherByIdSecurity)
    ], GetVoucherByIdRequest.prototype, "security", void 0);
    return GetVoucherByIdRequest;
}(SpeakeasyBase));
export { GetVoucherByIdRequest };
var GetVoucherByIdResponse = /** @class */ (function (_super) {
    __extends(GetVoucherByIdResponse, _super);
    function GetVoucherByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVoucherByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItvVoucher)
    ], GetVoucherByIdResponse.prototype, "itvVoucher", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], GetVoucherByIdResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVoucherByIdResponse.prototype, "statusCode", void 0);
    return GetVoucherByIdResponse;
}(SpeakeasyBase));
export { GetVoucherByIdResponse };
