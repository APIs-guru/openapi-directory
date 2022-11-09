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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AdexchangebuyerAccountsListQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsListQueryParams, _super);
    function AdexchangebuyerAccountsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerAccountsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsListQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerAccountsListQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsListQueryParams };
var AdexchangebuyerAccountsListSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsListSecurity, _super);
    function AdexchangebuyerAccountsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerAccountsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerAccountsListSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerAccountsListSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsListSecurity };
var AdexchangebuyerAccountsListRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsListRequest, _super);
    function AdexchangebuyerAccountsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerAccountsListQueryParams)
    ], AdexchangebuyerAccountsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerAccountsListSecurity)
    ], AdexchangebuyerAccountsListRequest.prototype, "security", void 0);
    return AdexchangebuyerAccountsListRequest;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsListRequest };
var AdexchangebuyerAccountsListResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsListResponse, _super);
    function AdexchangebuyerAccountsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AccountsList)
    ], AdexchangebuyerAccountsListResponse.prototype, "accountsList", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerAccountsListResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerAccountsListResponse;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsListResponse };
