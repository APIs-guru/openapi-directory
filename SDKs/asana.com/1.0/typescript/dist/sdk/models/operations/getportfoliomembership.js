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
var GetPortfolioMembershipPathParams = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipPathParams, _super);
    function GetPortfolioMembershipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_membership_gid" }),
        __metadata("design:type", String)
    ], GetPortfolioMembershipPathParams.prototype, "portfolioMembershipGid", void 0);
    return GetPortfolioMembershipPathParams;
}(SpeakeasyBase));
export { GetPortfolioMembershipPathParams };
var GetPortfolioMembershipQueryParams = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipQueryParams, _super);
    function GetPortfolioMembershipQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetPortfolioMembershipQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetPortfolioMembershipQueryParams.prototype, "optPretty", void 0);
    return GetPortfolioMembershipQueryParams;
}(SpeakeasyBase));
export { GetPortfolioMembershipQueryParams };
var GetPortfolioMembership200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPortfolioMembership200ApplicationJson, _super);
    function GetPortfolioMembership200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.PortfolioMembershipResponse)
    ], GetPortfolioMembership200ApplicationJson.prototype, "data", void 0);
    return GetPortfolioMembership200ApplicationJson;
}(SpeakeasyBase));
export { GetPortfolioMembership200ApplicationJson };
var GetPortfolioMembershipRequest = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipRequest, _super);
    function GetPortfolioMembershipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfolioMembershipPathParams)
    ], GetPortfolioMembershipRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfolioMembershipQueryParams)
    ], GetPortfolioMembershipRequest.prototype, "queryParams", void 0);
    return GetPortfolioMembershipRequest;
}(SpeakeasyBase));
export { GetPortfolioMembershipRequest };
var GetPortfolioMembershipResponse = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipResponse, _super);
    function GetPortfolioMembershipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPortfolioMembershipResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetPortfolioMembershipResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPortfolioMembershipResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPortfolioMembership200ApplicationJson)
    ], GetPortfolioMembershipResponse.prototype, "getPortfolioMembership200ApplicationJsonObject", void 0);
    return GetPortfolioMembershipResponse;
}(SpeakeasyBase));
export { GetPortfolioMembershipResponse };
