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
var GetTokensQueryParams = /** @class */ (function (_super) {
    __extends(GetTokensQueryParams, _super);
    function GetTokensQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$gte]" }),
        __metadata("design:type", Date)
    ], GetTokensQueryParams.prototype, "createdAtDollarGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$lte]" }),
        __metadata("design:type", Date)
    ], GetTokensQueryParams.prototype, "createdAtDollarLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_driver" }),
        __metadata("design:type", Boolean)
    ], GetTokensQueryParams.prototype, "includeDriver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" }),
        __metadata("design:type", Boolean)
    ], GetTokensQueryParams.prototype, "includeOrganization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_enabled" }),
        __metadata("design:type", Boolean)
    ], GetTokensQueryParams.prototype, "paginateEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_limit" }),
        __metadata("design:type", Number)
    ], GetTokensQueryParams.prototype, "paginateLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_page" }),
        __metadata("design:type", String)
    ], GetTokensQueryParams.prototype, "paginatePage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", String)
    ], GetTokensQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetTokensQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$gte]" }),
        __metadata("design:type", Date)
    ], GetTokensQueryParams.prototype, "updatedAtDollarGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$lte]" }),
        __metadata("design:type", Date)
    ], GetTokensQueryParams.prototype, "updatedAtDollarLte", void 0);
    return GetTokensQueryParams;
}(SpeakeasyBase));
export { GetTokensQueryParams };
var GetTokens200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTokens200ApplicationJson, _super);
    function GetTokens200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTokens200ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], GetTokens200ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], GetTokens200ApplicationJson.prototype, "result", void 0);
    return GetTokens200ApplicationJson;
}(SpeakeasyBase));
export { GetTokens200ApplicationJson };
var GetTokensRequest = /** @class */ (function (_super) {
    __extends(GetTokensRequest, _super);
    function GetTokensRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTokensQueryParams)
    ], GetTokensRequest.prototype, "queryParams", void 0);
    return GetTokensRequest;
}(SpeakeasyBase));
export { GetTokensRequest };
var GetTokensResponse = /** @class */ (function (_super) {
    __extends(GetTokensResponse, _super);
    function GetTokensResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTokensResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTokensResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTokens200ApplicationJson)
    ], GetTokensResponse.prototype, "getTokens200ApplicationJsonObject", void 0);
    return GetTokensResponse;
}(SpeakeasyBase));
export { GetTokensResponse };
