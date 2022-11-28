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
var CompanySearchNumberPathParams = /** @class */ (function (_super) {
    __extends(CompanySearchNumberPathParams, _super);
    function CompanySearchNumberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], CompanySearchNumberPathParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], CompanySearchNumberPathParams.prototype, "number", void 0);
    return CompanySearchNumberPathParams;
}(SpeakeasyBase));
export { CompanySearchNumberPathParams };
var CompanySearchNumberQueryParams = /** @class */ (function (_super) {
    __extends(CompanySearchNumberQueryParams, _super);
    function CompanySearchNumberQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CompanySearchNumberQueryParams.prototype, "limit", void 0);
    return CompanySearchNumberQueryParams;
}(SpeakeasyBase));
export { CompanySearchNumberQueryParams };
var CompanySearchNumberSecurity = /** @class */ (function (_super) {
    __extends(CompanySearchNumberSecurity, _super);
    function CompanySearchNumberSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], CompanySearchNumberSecurity.prototype, "userKey", void 0);
    return CompanySearchNumberSecurity;
}(SpeakeasyBase));
export { CompanySearchNumberSecurity };
var CompanySearchNumberRequest = /** @class */ (function (_super) {
    __extends(CompanySearchNumberRequest, _super);
    function CompanySearchNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanySearchNumberPathParams)
    ], CompanySearchNumberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanySearchNumberQueryParams)
    ], CompanySearchNumberRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanySearchNumberSecurity)
    ], CompanySearchNumberRequest.prototype, "security", void 0);
    return CompanySearchNumberRequest;
}(SpeakeasyBase));
export { CompanySearchNumberRequest };
var CompanySearchNumberResponse = /** @class */ (function (_super) {
    __extends(CompanySearchNumberResponse, _super);
    function CompanySearchNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], CompanySearchNumberResponse.prototype, "companySearchNumber200ApplicationJsonAnies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CompanySearchNumberResponse.prototype, "companySearchNumberDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompanySearchNumberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompanySearchNumberResponse.prototype, "statusCode", void 0);
    return CompanySearchNumberResponse;
}(SpeakeasyBase));
export { CompanySearchNumberResponse };
