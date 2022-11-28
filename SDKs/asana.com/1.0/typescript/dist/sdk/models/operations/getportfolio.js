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
var GetPortfolioPathParams = /** @class */ (function (_super) {
    __extends(GetPortfolioPathParams, _super);
    function GetPortfolioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" }),
        __metadata("design:type", String)
    ], GetPortfolioPathParams.prototype, "portfolioGid", void 0);
    return GetPortfolioPathParams;
}(SpeakeasyBase));
export { GetPortfolioPathParams };
var GetPortfolioQueryParams = /** @class */ (function (_super) {
    __extends(GetPortfolioQueryParams, _super);
    function GetPortfolioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetPortfolioQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetPortfolioQueryParams.prototype, "optPretty", void 0);
    return GetPortfolioQueryParams;
}(SpeakeasyBase));
export { GetPortfolioQueryParams };
var GetPortfolio200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPortfolio200ApplicationJson, _super);
    function GetPortfolio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.PortfolioResponse)
    ], GetPortfolio200ApplicationJson.prototype, "data", void 0);
    return GetPortfolio200ApplicationJson;
}(SpeakeasyBase));
export { GetPortfolio200ApplicationJson };
var GetPortfolioRequest = /** @class */ (function (_super) {
    __extends(GetPortfolioRequest, _super);
    function GetPortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfolioPathParams)
    ], GetPortfolioRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfolioQueryParams)
    ], GetPortfolioRequest.prototype, "queryParams", void 0);
    return GetPortfolioRequest;
}(SpeakeasyBase));
export { GetPortfolioRequest };
var GetPortfolioResponse = /** @class */ (function (_super) {
    __extends(GetPortfolioResponse, _super);
    function GetPortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetPortfolioResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPortfolioResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfolio200ApplicationJson)
    ], GetPortfolioResponse.prototype, "getPortfolio200ApplicationJsonObject", void 0);
    return GetPortfolioResponse;
}(SpeakeasyBase));
export { GetPortfolioResponse };
