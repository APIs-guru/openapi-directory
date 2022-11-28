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
var GetFactSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetFactSearchQueryParams, _super);
    function GetFactSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], GetFactSearchQueryParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetFactSearchQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subcategory" }),
        __metadata("design:type", String)
    ], GetFactSearchQueryParams.prototype, "subcategory", void 0);
    return GetFactSearchQueryParams;
}(SpeakeasyBase));
export { GetFactSearchQueryParams };
var GetFactSearchSecurity = /** @class */ (function (_super) {
    __extends(GetFactSearchSecurity, _super);
    function GetFactSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], GetFactSearchSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return GetFactSearchSecurity;
}(SpeakeasyBase));
export { GetFactSearchSecurity };
var GetFactSearchRequest = /** @class */ (function (_super) {
    __extends(GetFactSearchRequest, _super);
    function GetFactSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFactSearchQueryParams)
    ], GetFactSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFactSearchSecurity)
    ], GetFactSearchRequest.prototype, "security", void 0);
    return GetFactSearchRequest;
}(SpeakeasyBase));
export { GetFactSearchRequest };
var GetFactSearchResponse = /** @class */ (function (_super) {
    __extends(GetFactSearchResponse, _super);
    function GetFactSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFactSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFactSearchResponse.prototype, "statusCode", void 0);
    return GetFactSearchResponse;
}(SpeakeasyBase));
export { GetFactSearchResponse };
