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
var RemoveMembersForPortfolioPathParams = /** @class */ (function (_super) {
    __extends(RemoveMembersForPortfolioPathParams, _super);
    function RemoveMembersForPortfolioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" }),
        __metadata("design:type", String)
    ], RemoveMembersForPortfolioPathParams.prototype, "portfolioGid", void 0);
    return RemoveMembersForPortfolioPathParams;
}(SpeakeasyBase));
export { RemoveMembersForPortfolioPathParams };
var RemoveMembersForPortfolioQueryParams = /** @class */ (function (_super) {
    __extends(RemoveMembersForPortfolioQueryParams, _super);
    function RemoveMembersForPortfolioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveMembersForPortfolioQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveMembersForPortfolioQueryParams.prototype, "optPretty", void 0);
    return RemoveMembersForPortfolioQueryParams;
}(SpeakeasyBase));
export { RemoveMembersForPortfolioQueryParams };
var RemoveMembersForPortfolioRequestBody = /** @class */ (function (_super) {
    __extends(RemoveMembersForPortfolioRequestBody, _super);
    function RemoveMembersForPortfolioRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.RemoveMembersRequest)
    ], RemoveMembersForPortfolioRequestBody.prototype, "data", void 0);
    return RemoveMembersForPortfolioRequestBody;
}(SpeakeasyBase));
export { RemoveMembersForPortfolioRequestBody };
var RemoveMembersForPortfolio200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveMembersForPortfolio200ApplicationJson, _super);
    function RemoveMembersForPortfolio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RemoveMembersForPortfolio200ApplicationJson.prototype, "data", void 0);
    return RemoveMembersForPortfolio200ApplicationJson;
}(SpeakeasyBase));
export { RemoveMembersForPortfolio200ApplicationJson };
var RemoveMembersForPortfolioRequest = /** @class */ (function (_super) {
    __extends(RemoveMembersForPortfolioRequest, _super);
    function RemoveMembersForPortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveMembersForPortfolioPathParams)
    ], RemoveMembersForPortfolioRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveMembersForPortfolioQueryParams)
    ], RemoveMembersForPortfolioRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveMembersForPortfolioRequestBody)
    ], RemoveMembersForPortfolioRequest.prototype, "request", void 0);
    return RemoveMembersForPortfolioRequest;
}(SpeakeasyBase));
export { RemoveMembersForPortfolioRequest };
var RemoveMembersForPortfolioResponse = /** @class */ (function (_super) {
    __extends(RemoveMembersForPortfolioResponse, _super);
    function RemoveMembersForPortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveMembersForPortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveMembersForPortfolioResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveMembersForPortfolioResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveMembersForPortfolio200ApplicationJson)
    ], RemoveMembersForPortfolioResponse.prototype, "removeMembersForPortfolio200ApplicationJsonObject", void 0);
    return RemoveMembersForPortfolioResponse;
}(SpeakeasyBase));
export { RemoveMembersForPortfolioResponse };
