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
var GetServerBlocklistAccountsQueryParams = /** @class */ (function (_super) {
    __extends(GetServerBlocklistAccountsQueryParams, _super);
    function GetServerBlocklistAccountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetServerBlocklistAccountsQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetServerBlocklistAccountsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetServerBlocklistAccountsQueryParams.prototype, "start", void 0);
    return GetServerBlocklistAccountsQueryParams;
}(SpeakeasyBase));
export { GetServerBlocklistAccountsQueryParams };
var GetServerBlocklistAccountsSecurity = /** @class */ (function (_super) {
    __extends(GetServerBlocklistAccountsSecurity, _super);
    function GetServerBlocklistAccountsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetServerBlocklistAccountsSecurity.prototype, "oAuth2", void 0);
    return GetServerBlocklistAccountsSecurity;
}(SpeakeasyBase));
export { GetServerBlocklistAccountsSecurity };
var GetServerBlocklistAccountsRequest = /** @class */ (function (_super) {
    __extends(GetServerBlocklistAccountsRequest, _super);
    function GetServerBlocklistAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServerBlocklistAccountsQueryParams)
    ], GetServerBlocklistAccountsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServerBlocklistAccountsSecurity)
    ], GetServerBlocklistAccountsRequest.prototype, "security", void 0);
    return GetServerBlocklistAccountsRequest;
}(SpeakeasyBase));
export { GetServerBlocklistAccountsRequest };
var GetServerBlocklistAccountsResponse = /** @class */ (function (_super) {
    __extends(GetServerBlocklistAccountsResponse, _super);
    function GetServerBlocklistAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetServerBlocklistAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetServerBlocklistAccountsResponse.prototype, "statusCode", void 0);
    return GetServerBlocklistAccountsResponse;
}(SpeakeasyBase));
export { GetServerBlocklistAccountsResponse };
