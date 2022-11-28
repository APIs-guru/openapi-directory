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
var DeletePortfolioPathParams = /** @class */ (function (_super) {
    __extends(DeletePortfolioPathParams, _super);
    function DeletePortfolioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" }),
        __metadata("design:type", String)
    ], DeletePortfolioPathParams.prototype, "portfolioGid", void 0);
    return DeletePortfolioPathParams;
}(SpeakeasyBase));
export { DeletePortfolioPathParams };
var DeletePortfolioQueryParams = /** @class */ (function (_super) {
    __extends(DeletePortfolioQueryParams, _super);
    function DeletePortfolioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], DeletePortfolioQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], DeletePortfolioQueryParams.prototype, "optPretty", void 0);
    return DeletePortfolioQueryParams;
}(SpeakeasyBase));
export { DeletePortfolioQueryParams };
var DeletePortfolio200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeletePortfolio200ApplicationJson, _super);
    function DeletePortfolio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeletePortfolio200ApplicationJson.prototype, "data", void 0);
    return DeletePortfolio200ApplicationJson;
}(SpeakeasyBase));
export { DeletePortfolio200ApplicationJson };
var DeletePortfolioRequest = /** @class */ (function (_super) {
    __extends(DeletePortfolioRequest, _super);
    function DeletePortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePortfolioPathParams)
    ], DeletePortfolioRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePortfolioQueryParams)
    ], DeletePortfolioRequest.prototype, "queryParams", void 0);
    return DeletePortfolioRequest;
}(SpeakeasyBase));
export { DeletePortfolioRequest };
var DeletePortfolioResponse = /** @class */ (function (_super) {
    __extends(DeletePortfolioResponse, _super);
    function DeletePortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], DeletePortfolioResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePortfolioResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePortfolio200ApplicationJson)
    ], DeletePortfolioResponse.prototype, "deletePortfolio200ApplicationJsonObject", void 0);
    return DeletePortfolioResponse;
}(SpeakeasyBase));
export { DeletePortfolioResponse };
