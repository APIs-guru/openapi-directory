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
var CompanySearchNamePathParams = /** @class */ (function (_super) {
    __extends(CompanySearchNamePathParams, _super);
    function CompanySearchNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], CompanySearchNamePathParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CompanySearchNamePathParams.prototype, "name", void 0);
    return CompanySearchNamePathParams;
}(SpeakeasyBase));
export { CompanySearchNamePathParams };
var CompanySearchNameQueryParams = /** @class */ (function (_super) {
    __extends(CompanySearchNameQueryParams, _super);
    function CompanySearchNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CompanySearchNameQueryParams.prototype, "limit", void 0);
    return CompanySearchNameQueryParams;
}(SpeakeasyBase));
export { CompanySearchNameQueryParams };
var CompanySearchNameSecurity = /** @class */ (function (_super) {
    __extends(CompanySearchNameSecurity, _super);
    function CompanySearchNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], CompanySearchNameSecurity.prototype, "userKey", void 0);
    return CompanySearchNameSecurity;
}(SpeakeasyBase));
export { CompanySearchNameSecurity };
var CompanySearchNameRequest = /** @class */ (function (_super) {
    __extends(CompanySearchNameRequest, _super);
    function CompanySearchNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanySearchNamePathParams)
    ], CompanySearchNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanySearchNameQueryParams)
    ], CompanySearchNameRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanySearchNameSecurity)
    ], CompanySearchNameRequest.prototype, "security", void 0);
    return CompanySearchNameRequest;
}(SpeakeasyBase));
export { CompanySearchNameRequest };
var CompanySearchNameResponse = /** @class */ (function (_super) {
    __extends(CompanySearchNameResponse, _super);
    function CompanySearchNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], CompanySearchNameResponse.prototype, "companySearchName200ApplicationJsonAnies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CompanySearchNameResponse.prototype, "companySearchNameDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompanySearchNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompanySearchNameResponse.prototype, "statusCode", void 0);
    return CompanySearchNameResponse;
}(SpeakeasyBase));
export { CompanySearchNameResponse };
