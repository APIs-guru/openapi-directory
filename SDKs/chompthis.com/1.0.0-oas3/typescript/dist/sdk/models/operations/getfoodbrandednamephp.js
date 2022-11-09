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
var GetFoodBrandedNamePhpQueryParams = /** @class */ (function (_super) {
    __extends(GetFoodBrandedNamePhpQueryParams, _super);
    function GetFoodBrandedNamePhpQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetFoodBrandedNamePhpQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetFoodBrandedNamePhpQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFoodBrandedNamePhpQueryParams.prototype, "page", void 0);
    return GetFoodBrandedNamePhpQueryParams;
}(SpeakeasyBase));
export { GetFoodBrandedNamePhpQueryParams };
var GetFoodBrandedNamePhpSecurity = /** @class */ (function (_super) {
    __extends(GetFoodBrandedNamePhpSecurity, _super);
    function GetFoodBrandedNamePhpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetFoodBrandedNamePhpSecurity.prototype, "apiKeyAuth", void 0);
    return GetFoodBrandedNamePhpSecurity;
}(SpeakeasyBase));
export { GetFoodBrandedNamePhpSecurity };
var GetFoodBrandedNamePhpRequest = /** @class */ (function (_super) {
    __extends(GetFoodBrandedNamePhpRequest, _super);
    function GetFoodBrandedNamePhpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFoodBrandedNamePhpQueryParams)
    ], GetFoodBrandedNamePhpRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFoodBrandedNamePhpSecurity)
    ], GetFoodBrandedNamePhpRequest.prototype, "security", void 0);
    return GetFoodBrandedNamePhpRequest;
}(SpeakeasyBase));
export { GetFoodBrandedNamePhpRequest };
var GetFoodBrandedNamePhpResponse = /** @class */ (function (_super) {
    __extends(GetFoodBrandedNamePhpResponse, _super);
    function GetFoodBrandedNamePhpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BrandedFoodObject)
    ], GetFoodBrandedNamePhpResponse.prototype, "brandedFoodObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFoodBrandedNamePhpResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFoodBrandedNamePhpResponse.prototype, "statusCode", void 0);
    return GetFoodBrandedNamePhpResponse;
}(SpeakeasyBase));
export { GetFoodBrandedNamePhpResponse };
