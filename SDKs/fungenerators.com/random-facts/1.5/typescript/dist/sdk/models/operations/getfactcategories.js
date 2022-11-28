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
var GetFactCategoriesQueryParams = /** @class */ (function (_super) {
    __extends(GetFactCategoriesQueryParams, _super);
    function GetFactCategoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetFactCategoriesQueryParams.prototype, "start", void 0);
    return GetFactCategoriesQueryParams;
}(SpeakeasyBase));
export { GetFactCategoriesQueryParams };
var GetFactCategoriesSecurity = /** @class */ (function (_super) {
    __extends(GetFactCategoriesSecurity, _super);
    function GetFactCategoriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], GetFactCategoriesSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return GetFactCategoriesSecurity;
}(SpeakeasyBase));
export { GetFactCategoriesSecurity };
var GetFactCategoriesRequest = /** @class */ (function (_super) {
    __extends(GetFactCategoriesRequest, _super);
    function GetFactCategoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFactCategoriesQueryParams)
    ], GetFactCategoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFactCategoriesSecurity)
    ], GetFactCategoriesRequest.prototype, "security", void 0);
    return GetFactCategoriesRequest;
}(SpeakeasyBase));
export { GetFactCategoriesRequest };
var GetFactCategoriesResponse = /** @class */ (function (_super) {
    __extends(GetFactCategoriesResponse, _super);
    function GetFactCategoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFactCategoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFactCategoriesResponse.prototype, "statusCode", void 0);
    return GetFactCategoriesResponse;
}(SpeakeasyBase));
export { GetFactCategoriesResponse };
