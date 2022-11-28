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
var GetItemsForPortfolioPathParams = /** @class */ (function (_super) {
    __extends(GetItemsForPortfolioPathParams, _super);
    function GetItemsForPortfolioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" }),
        __metadata("design:type", String)
    ], GetItemsForPortfolioPathParams.prototype, "portfolioGid", void 0);
    return GetItemsForPortfolioPathParams;
}(SpeakeasyBase));
export { GetItemsForPortfolioPathParams };
var GetItemsForPortfolioQueryParams = /** @class */ (function (_super) {
    __extends(GetItemsForPortfolioQueryParams, _super);
    function GetItemsForPortfolioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetItemsForPortfolioQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetItemsForPortfolioQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetItemsForPortfolioQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetItemsForPortfolioQueryParams.prototype, "optPretty", void 0);
    return GetItemsForPortfolioQueryParams;
}(SpeakeasyBase));
export { GetItemsForPortfolioQueryParams };
var GetItemsForPortfolio200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetItemsForPortfolio200ApplicationJson, _super);
    function GetItemsForPortfolio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ProjectCompact }),
        __metadata("design:type", Array)
    ], GetItemsForPortfolio200ApplicationJson.prototype, "data", void 0);
    return GetItemsForPortfolio200ApplicationJson;
}(SpeakeasyBase));
export { GetItemsForPortfolio200ApplicationJson };
var GetItemsForPortfolioRequest = /** @class */ (function (_super) {
    __extends(GetItemsForPortfolioRequest, _super);
    function GetItemsForPortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemsForPortfolioPathParams)
    ], GetItemsForPortfolioRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemsForPortfolioQueryParams)
    ], GetItemsForPortfolioRequest.prototype, "queryParams", void 0);
    return GetItemsForPortfolioRequest;
}(SpeakeasyBase));
export { GetItemsForPortfolioRequest };
var GetItemsForPortfolioResponse = /** @class */ (function (_super) {
    __extends(GetItemsForPortfolioResponse, _super);
    function GetItemsForPortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemsForPortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetItemsForPortfolioResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemsForPortfolioResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemsForPortfolio200ApplicationJson)
    ], GetItemsForPortfolioResponse.prototype, "getItemsForPortfolio200ApplicationJsonObject", void 0);
    return GetItemsForPortfolioResponse;
}(SpeakeasyBase));
export { GetItemsForPortfolioResponse };
