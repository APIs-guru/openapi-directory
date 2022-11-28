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
var RemoveCustomFieldSettingForPortfolioPathParams = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForPortfolioPathParams, _super);
    function RemoveCustomFieldSettingForPortfolioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" }),
        __metadata("design:type", String)
    ], RemoveCustomFieldSettingForPortfolioPathParams.prototype, "portfolioGid", void 0);
    return RemoveCustomFieldSettingForPortfolioPathParams;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForPortfolioPathParams };
var RemoveCustomFieldSettingForPortfolioQueryParams = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForPortfolioQueryParams, _super);
    function RemoveCustomFieldSettingForPortfolioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveCustomFieldSettingForPortfolioQueryParams.prototype, "optPretty", void 0);
    return RemoveCustomFieldSettingForPortfolioQueryParams;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForPortfolioQueryParams };
var RemoveCustomFieldSettingForPortfolioRequestBody = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForPortfolioRequestBody, _super);
    function RemoveCustomFieldSettingForPortfolioRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.RemoveCustomFieldSettingRequest)
    ], RemoveCustomFieldSettingForPortfolioRequestBody.prototype, "data", void 0);
    return RemoveCustomFieldSettingForPortfolioRequestBody;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForPortfolioRequestBody };
var RemoveCustomFieldSettingForPortfolio200ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForPortfolio200ApplicationJson, _super);
    function RemoveCustomFieldSettingForPortfolio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RemoveCustomFieldSettingForPortfolio200ApplicationJson.prototype, "data", void 0);
    return RemoveCustomFieldSettingForPortfolio200ApplicationJson;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForPortfolio200ApplicationJson };
var RemoveCustomFieldSettingForPortfolioRequest = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForPortfolioRequest, _super);
    function RemoveCustomFieldSettingForPortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveCustomFieldSettingForPortfolioPathParams)
    ], RemoveCustomFieldSettingForPortfolioRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveCustomFieldSettingForPortfolioQueryParams)
    ], RemoveCustomFieldSettingForPortfolioRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveCustomFieldSettingForPortfolioRequestBody)
    ], RemoveCustomFieldSettingForPortfolioRequest.prototype, "request", void 0);
    return RemoveCustomFieldSettingForPortfolioRequest;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForPortfolioRequest };
var RemoveCustomFieldSettingForPortfolioResponse = /** @class */ (function (_super) {
    __extends(RemoveCustomFieldSettingForPortfolioResponse, _super);
    function RemoveCustomFieldSettingForPortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveCustomFieldSettingForPortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveCustomFieldSettingForPortfolioResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveCustomFieldSettingForPortfolioResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveCustomFieldSettingForPortfolio200ApplicationJson)
    ], RemoveCustomFieldSettingForPortfolioResponse.prototype, "removeCustomFieldSettingForPortfolio200ApplicationJsonObject", void 0);
    return RemoveCustomFieldSettingForPortfolioResponse;
}(SpeakeasyBase));
export { RemoveCustomFieldSettingForPortfolioResponse };
