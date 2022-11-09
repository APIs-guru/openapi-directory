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
var CasesSearchQueryParams = /** @class */ (function (_super) {
    __extends(CasesSearchQueryParams, _super);
    function CasesSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CasesSearchQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], CasesSearchQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], CasesSearchQueryParams.prototype, "search", void 0);
    return CasesSearchQueryParams;
}(SpeakeasyBase));
export { CasesSearchQueryParams };
var CasesSearchRequest = /** @class */ (function (_super) {
    __extends(CasesSearchRequest, _super);
    function CasesSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CasesSearchQueryParams)
    ], CasesSearchRequest.prototype, "queryParams", void 0);
    return CasesSearchRequest;
}(SpeakeasyBase));
export { CasesSearchRequest };
var CasesSearch200ApplicationJson = /** @class */ (function (_super) {
    __extends(CasesSearch200ApplicationJson, _super);
    function CasesSearch200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], CasesSearch200ApplicationJson.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], CasesSearch200ApplicationJson.prototype, "next", void 0);
    __decorate([
        Metadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], CasesSearch200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.CountryStats }),
        __metadata("design:type", Array)
    ], CasesSearch200ApplicationJson.prototype, "results", void 0);
    return CasesSearch200ApplicationJson;
}(SpeakeasyBase));
export { CasesSearch200ApplicationJson };
var CasesSearchResponse = /** @class */ (function (_super) {
    __extends(CasesSearchResponse, _super);
    function CasesSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CasesSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CasesSearchResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CasesSearch200ApplicationJson)
    ], CasesSearchResponse.prototype, "casesSearch200ApplicationJsonObject", void 0);
    return CasesSearchResponse;
}(SpeakeasyBase));
export { CasesSearchResponse };
