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
var AdexchangebuyerAccountsGetPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsGetPathParams, _super);
    function AdexchangebuyerAccountsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], AdexchangebuyerAccountsGetPathParams.prototype, "id", void 0);
    return AdexchangebuyerAccountsGetPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsGetPathParams };
var AdexchangebuyerAccountsGetQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsGetQueryParams, _super);
    function AdexchangebuyerAccountsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerAccountsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsGetQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerAccountsGetQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsGetQueryParams };
var AdexchangebuyerAccountsGetSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsGetSecurity, _super);
    function AdexchangebuyerAccountsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerAccountsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerAccountsGetSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerAccountsGetSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsGetSecurity };
var AdexchangebuyerAccountsGetRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsGetRequest, _super);
    function AdexchangebuyerAccountsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerAccountsGetPathParams)
    ], AdexchangebuyerAccountsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerAccountsGetQueryParams)
    ], AdexchangebuyerAccountsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdexchangebuyerAccountsGetSecurity)
    ], AdexchangebuyerAccountsGetRequest.prototype, "security", void 0);
    return AdexchangebuyerAccountsGetRequest;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsGetRequest };
var AdexchangebuyerAccountsGetResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsGetResponse, _super);
    function AdexchangebuyerAccountsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Account)
    ], AdexchangebuyerAccountsGetResponse.prototype, "account", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerAccountsGetResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerAccountsGetResponse;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsGetResponse };
