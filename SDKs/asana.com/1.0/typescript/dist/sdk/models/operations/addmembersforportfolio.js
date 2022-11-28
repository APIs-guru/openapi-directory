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
var AddMembersForPortfolioPathParams = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolioPathParams, _super);
    function AddMembersForPortfolioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" }),
        __metadata("design:type", String)
    ], AddMembersForPortfolioPathParams.prototype, "portfolioGid", void 0);
    return AddMembersForPortfolioPathParams;
}(SpeakeasyBase));
export { AddMembersForPortfolioPathParams };
var AddMembersForPortfolioQueryParams = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolioQueryParams, _super);
    function AddMembersForPortfolioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddMembersForPortfolioQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddMembersForPortfolioQueryParams.prototype, "optPretty", void 0);
    return AddMembersForPortfolioQueryParams;
}(SpeakeasyBase));
export { AddMembersForPortfolioQueryParams };
var AddMembersForPortfolioRequestBody = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolioRequestBody, _super);
    function AddMembersForPortfolioRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.AddMembersRequest)
    ], AddMembersForPortfolioRequestBody.prototype, "data", void 0);
    return AddMembersForPortfolioRequestBody;
}(SpeakeasyBase));
export { AddMembersForPortfolioRequestBody };
var AddMembersForPortfolio200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolio200ApplicationJson, _super);
    function AddMembersForPortfolio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], AddMembersForPortfolio200ApplicationJson.prototype, "data", void 0);
    return AddMembersForPortfolio200ApplicationJson;
}(SpeakeasyBase));
export { AddMembersForPortfolio200ApplicationJson };
var AddMembersForPortfolioRequest = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolioRequest, _super);
    function AddMembersForPortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddMembersForPortfolioPathParams)
    ], AddMembersForPortfolioRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddMembersForPortfolioQueryParams)
    ], AddMembersForPortfolioRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddMembersForPortfolioRequestBody)
    ], AddMembersForPortfolioRequest.prototype, "request", void 0);
    return AddMembersForPortfolioRequest;
}(SpeakeasyBase));
export { AddMembersForPortfolioRequest };
var AddMembersForPortfolioResponse = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolioResponse, _super);
    function AddMembersForPortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddMembersForPortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddMembersForPortfolioResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddMembersForPortfolioResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddMembersForPortfolio200ApplicationJson)
    ], AddMembersForPortfolioResponse.prototype, "addMembersForPortfolio200ApplicationJsonObject", void 0);
    return AddMembersForPortfolioResponse;
}(SpeakeasyBase));
export { AddMembersForPortfolioResponse };
