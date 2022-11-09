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
var GetFoodIngredientSearchPhpQueryParams = /** @class */ (function (_super) {
    __extends(GetFoodIngredientSearchPhpQueryParams, _super);
    function GetFoodIngredientSearchPhpQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=find" }),
        __metadata("design:type", String)
    ], GetFoodIngredientSearchPhpQueryParams.prototype, "find", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetFoodIngredientSearchPhpQueryParams.prototype, "limit", void 0);
    return GetFoodIngredientSearchPhpQueryParams;
}(SpeakeasyBase));
export { GetFoodIngredientSearchPhpQueryParams };
var GetFoodIngredientSearchPhpSecurity = /** @class */ (function (_super) {
    __extends(GetFoodIngredientSearchPhpSecurity, _super);
    function GetFoodIngredientSearchPhpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetFoodIngredientSearchPhpSecurity.prototype, "apiKeyAuth", void 0);
    return GetFoodIngredientSearchPhpSecurity;
}(SpeakeasyBase));
export { GetFoodIngredientSearchPhpSecurity };
var GetFoodIngredientSearchPhpRequest = /** @class */ (function (_super) {
    __extends(GetFoodIngredientSearchPhpRequest, _super);
    function GetFoodIngredientSearchPhpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFoodIngredientSearchPhpQueryParams)
    ], GetFoodIngredientSearchPhpRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFoodIngredientSearchPhpSecurity)
    ], GetFoodIngredientSearchPhpRequest.prototype, "security", void 0);
    return GetFoodIngredientSearchPhpRequest;
}(SpeakeasyBase));
export { GetFoodIngredientSearchPhpRequest };
var GetFoodIngredientSearchPhpResponse = /** @class */ (function (_super) {
    __extends(GetFoodIngredientSearchPhpResponse, _super);
    function GetFoodIngredientSearchPhpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFoodIngredientSearchPhpResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.IngredientObject)
    ], GetFoodIngredientSearchPhpResponse.prototype, "ingredientObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFoodIngredientSearchPhpResponse.prototype, "statusCode", void 0);
    return GetFoodIngredientSearchPhpResponse;
}(SpeakeasyBase));
export { GetFoodIngredientSearchPhpResponse };
