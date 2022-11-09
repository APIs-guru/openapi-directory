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
var GetRiddleSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetRiddleSearchQueryParams, _super);
    function GetRiddleSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], GetRiddleSearchQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetRiddleSearchQueryParams.prototype, "query", void 0);
    return GetRiddleSearchQueryParams;
}(SpeakeasyBase));
export { GetRiddleSearchQueryParams };
var GetRiddleSearchSecurity = /** @class */ (function (_super) {
    __extends(GetRiddleSearchSecurity, _super);
    function GetRiddleSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], GetRiddleSearchSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return GetRiddleSearchSecurity;
}(SpeakeasyBase));
export { GetRiddleSearchSecurity };
var GetRiddleSearchRequest = /** @class */ (function (_super) {
    __extends(GetRiddleSearchRequest, _super);
    function GetRiddleSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRiddleSearchQueryParams)
    ], GetRiddleSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRiddleSearchSecurity)
    ], GetRiddleSearchRequest.prototype, "security", void 0);
    return GetRiddleSearchRequest;
}(SpeakeasyBase));
export { GetRiddleSearchRequest };
var GetRiddleSearchResponse = /** @class */ (function (_super) {
    __extends(GetRiddleSearchResponse, _super);
    function GetRiddleSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRiddleSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRiddleSearchResponse.prototype, "statusCode", void 0);
    return GetRiddleSearchResponse;
}(SpeakeasyBase));
export { GetRiddleSearchResponse };
