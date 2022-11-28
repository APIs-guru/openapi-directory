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
var CompanyIdSuperPathParams = /** @class */ (function (_super) {
    __extends(CompanyIdSuperPathParams, _super);
    function CompanyIdSuperPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], CompanyIdSuperPathParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CompanyIdSuperPathParams.prototype, "id", void 0);
    return CompanyIdSuperPathParams;
}(SpeakeasyBase));
export { CompanyIdSuperPathParams };
export var CompanyIdSuperLangEnum;
(function (CompanyIdSuperLangEnum) {
    CompanyIdSuperLangEnum["Unknown"] = "";
    CompanyIdSuperLangEnum["Og"] = "OG";
    CompanyIdSuperLangEnum["En"] = "EN";
})(CompanyIdSuperLangEnum || (CompanyIdSuperLangEnum = {}));
var CompanyIdSuperQueryParams = /** @class */ (function (_super) {
    __extends(CompanyIdSuperQueryParams, _super);
    function CompanyIdSuperQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], CompanyIdSuperQueryParams.prototype, "lang", void 0);
    return CompanyIdSuperQueryParams;
}(SpeakeasyBase));
export { CompanyIdSuperQueryParams };
var CompanyIdSuperSecurity = /** @class */ (function (_super) {
    __extends(CompanyIdSuperSecurity, _super);
    function CompanyIdSuperSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], CompanyIdSuperSecurity.prototype, "userKey", void 0);
    return CompanyIdSuperSecurity;
}(SpeakeasyBase));
export { CompanyIdSuperSecurity };
var CompanyIdSuperRequest = /** @class */ (function (_super) {
    __extends(CompanyIdSuperRequest, _super);
    function CompanyIdSuperRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyIdSuperPathParams)
    ], CompanyIdSuperRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyIdSuperQueryParams)
    ], CompanyIdSuperRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CompanyIdSuperSecurity)
    ], CompanyIdSuperRequest.prototype, "security", void 0);
    return CompanyIdSuperRequest;
}(SpeakeasyBase));
export { CompanyIdSuperRequest };
var CompanyIdSuperResponse = /** @class */ (function (_super) {
    __extends(CompanyIdSuperResponse, _super);
    function CompanyIdSuperResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], CompanyIdSuperResponse.prototype, "companyIdSuper200ApplicationJsonAnies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CompanyIdSuperResponse.prototype, "companyIdSuperDefaultApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CompanyIdSuperResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CompanyIdSuperResponse.prototype, "statusCode", void 0);
    return CompanyIdSuperResponse;
}(SpeakeasyBase));
export { CompanyIdSuperResponse };
