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
var GetCustomFieldSettingsForPortfolioPathParams = /** @class */ (function (_super) {
    __extends(GetCustomFieldSettingsForPortfolioPathParams, _super);
    function GetCustomFieldSettingsForPortfolioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" }),
        __metadata("design:type", String)
    ], GetCustomFieldSettingsForPortfolioPathParams.prototype, "portfolioGid", void 0);
    return GetCustomFieldSettingsForPortfolioPathParams;
}(SpeakeasyBase));
export { GetCustomFieldSettingsForPortfolioPathParams };
var GetCustomFieldSettingsForPortfolioQueryParams = /** @class */ (function (_super) {
    __extends(GetCustomFieldSettingsForPortfolioQueryParams, _super);
    function GetCustomFieldSettingsForPortfolioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetCustomFieldSettingsForPortfolioQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetCustomFieldSettingsForPortfolioQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetCustomFieldSettingsForPortfolioQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetCustomFieldSettingsForPortfolioQueryParams.prototype, "optPretty", void 0);
    return GetCustomFieldSettingsForPortfolioQueryParams;
}(SpeakeasyBase));
export { GetCustomFieldSettingsForPortfolioQueryParams };
var GetCustomFieldSettingsForPortfolio200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCustomFieldSettingsForPortfolio200ApplicationJson, _super);
    function GetCustomFieldSettingsForPortfolio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.CustomFieldSettingResponse }),
        __metadata("design:type", Array)
    ], GetCustomFieldSettingsForPortfolio200ApplicationJson.prototype, "data", void 0);
    return GetCustomFieldSettingsForPortfolio200ApplicationJson;
}(SpeakeasyBase));
export { GetCustomFieldSettingsForPortfolio200ApplicationJson };
var GetCustomFieldSettingsForPortfolioRequest = /** @class */ (function (_super) {
    __extends(GetCustomFieldSettingsForPortfolioRequest, _super);
    function GetCustomFieldSettingsForPortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomFieldSettingsForPortfolioPathParams)
    ], GetCustomFieldSettingsForPortfolioRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomFieldSettingsForPortfolioQueryParams)
    ], GetCustomFieldSettingsForPortfolioRequest.prototype, "queryParams", void 0);
    return GetCustomFieldSettingsForPortfolioRequest;
}(SpeakeasyBase));
export { GetCustomFieldSettingsForPortfolioRequest };
var GetCustomFieldSettingsForPortfolioResponse = /** @class */ (function (_super) {
    __extends(GetCustomFieldSettingsForPortfolioResponse, _super);
    function GetCustomFieldSettingsForPortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCustomFieldSettingsForPortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetCustomFieldSettingsForPortfolioResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCustomFieldSettingsForPortfolioResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomFieldSettingsForPortfolio200ApplicationJson)
    ], GetCustomFieldSettingsForPortfolioResponse.prototype, "getCustomFieldSettingsForPortfolio200ApplicationJsonObject", void 0);
    return GetCustomFieldSettingsForPortfolioResponse;
}(SpeakeasyBase));
export { GetCustomFieldSettingsForPortfolioResponse };
