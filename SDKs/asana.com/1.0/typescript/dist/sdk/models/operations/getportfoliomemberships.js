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
var GetPortfolioMembershipsQueryParams = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipsQueryParams, _super);
    function GetPortfolioMembershipsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetPortfolioMembershipsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetPortfolioMembershipsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetPortfolioMembershipsQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetPortfolioMembershipsQueryParams.prototype, "optPretty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=portfolio" }),
        __metadata("design:type", String)
    ], GetPortfolioMembershipsQueryParams.prototype, "portfolio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", String)
    ], GetPortfolioMembershipsQueryParams.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" }),
        __metadata("design:type", String)
    ], GetPortfolioMembershipsQueryParams.prototype, "workspace", void 0);
    return GetPortfolioMembershipsQueryParams;
}(SpeakeasyBase));
export { GetPortfolioMembershipsQueryParams };
var GetPortfolioMemberships200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPortfolioMemberships200ApplicationJson, _super);
    function GetPortfolioMemberships200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.PortfolioMembershipCompact }),
        __metadata("design:type", Array)
    ], GetPortfolioMemberships200ApplicationJson.prototype, "data", void 0);
    return GetPortfolioMemberships200ApplicationJson;
}(SpeakeasyBase));
export { GetPortfolioMemberships200ApplicationJson };
var GetPortfolioMembershipsRequest = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipsRequest, _super);
    function GetPortfolioMembershipsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfolioMembershipsQueryParams)
    ], GetPortfolioMembershipsRequest.prototype, "queryParams", void 0);
    return GetPortfolioMembershipsRequest;
}(SpeakeasyBase));
export { GetPortfolioMembershipsRequest };
var GetPortfolioMembershipsResponse = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipsResponse, _super);
    function GetPortfolioMembershipsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPortfolioMembershipsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetPortfolioMembershipsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPortfolioMembershipsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfolioMemberships200ApplicationJson)
    ], GetPortfolioMembershipsResponse.prototype, "getPortfolioMemberships200ApplicationJsonObject", void 0);
    return GetPortfolioMembershipsResponse;
}(SpeakeasyBase));
export { GetPortfolioMembershipsResponse };
