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
export var GetFoodBrandedSearchPhpDietEnum;
(function (GetFoodBrandedSearchPhpDietEnum) {
    GetFoodBrandedSearchPhpDietEnum["Vegan"] = "Vegan";
    GetFoodBrandedSearchPhpDietEnum["Vegetarian"] = "Vegetarian";
    GetFoodBrandedSearchPhpDietEnum["GlutenFree"] = "Gluten Free";
})(GetFoodBrandedSearchPhpDietEnum || (GetFoodBrandedSearchPhpDietEnum = {}));
var GetFoodBrandedSearchPhpQueryParams = /** @class */ (function (_super) {
    __extends(GetFoodBrandedSearchPhpQueryParams, _super);
    function GetFoodBrandedSearchPhpQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=allergen" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "allergen", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=brand" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "brand", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=diet" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "diet", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ingredient" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "ingredient", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=keyword" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "keyword", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mineral" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "mineral", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nutrient" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "nutrient", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=palm_oil" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "palmOil", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=trace" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "trace", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=vitamin" }),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpQueryParams.prototype, "vitamin", void 0);
    return GetFoodBrandedSearchPhpQueryParams;
}(SpeakeasyBase));
export { GetFoodBrandedSearchPhpQueryParams };
var GetFoodBrandedSearchPhpSecurity = /** @class */ (function (_super) {
    __extends(GetFoodBrandedSearchPhpSecurity, _super);
    function GetFoodBrandedSearchPhpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetFoodBrandedSearchPhpSecurity.prototype, "apiKeyAuth", void 0);
    return GetFoodBrandedSearchPhpSecurity;
}(SpeakeasyBase));
export { GetFoodBrandedSearchPhpSecurity };
var GetFoodBrandedSearchPhpRequest = /** @class */ (function (_super) {
    __extends(GetFoodBrandedSearchPhpRequest, _super);
    function GetFoodBrandedSearchPhpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFoodBrandedSearchPhpQueryParams)
    ], GetFoodBrandedSearchPhpRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFoodBrandedSearchPhpSecurity)
    ], GetFoodBrandedSearchPhpRequest.prototype, "security", void 0);
    return GetFoodBrandedSearchPhpRequest;
}(SpeakeasyBase));
export { GetFoodBrandedSearchPhpRequest };
var GetFoodBrandedSearchPhpResponse = /** @class */ (function (_super) {
    __extends(GetFoodBrandedSearchPhpResponse, _super);
    function GetFoodBrandedSearchPhpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BrandedFoodObject)
    ], GetFoodBrandedSearchPhpResponse.prototype, "brandedFoodObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFoodBrandedSearchPhpResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFoodBrandedSearchPhpResponse.prototype, "statusCode", void 0);
    return GetFoodBrandedSearchPhpResponse;
}(SpeakeasyBase));
export { GetFoodBrandedSearchPhpResponse };
