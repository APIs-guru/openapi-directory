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
var AdexchangebuyerAccountsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsUpdatePathParams, _super);
    function AdexchangebuyerAccountsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], AdexchangebuyerAccountsUpdatePathParams.prototype, "id", void 0);
    return AdexchangebuyerAccountsUpdatePathParams;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsUpdatePathParams };
var AdexchangebuyerAccountsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsUpdateQueryParams, _super);
    function AdexchangebuyerAccountsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=confirmUnsafeAccountChange" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerAccountsUpdateQueryParams.prototype, "confirmUnsafeAccountChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerAccountsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsUpdateQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerAccountsUpdateQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsUpdateQueryParams };
var AdexchangebuyerAccountsUpdateSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsUpdateSecurity, _super);
    function AdexchangebuyerAccountsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerAccountsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerAccountsUpdateSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerAccountsUpdateSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsUpdateSecurity };
var AdexchangebuyerAccountsUpdateRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsUpdateRequest, _super);
    function AdexchangebuyerAccountsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerAccountsUpdatePathParams)
    ], AdexchangebuyerAccountsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerAccountsUpdateQueryParams)
    ], AdexchangebuyerAccountsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Account)
    ], AdexchangebuyerAccountsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerAccountsUpdateSecurity)
    ], AdexchangebuyerAccountsUpdateRequest.prototype, "security", void 0);
    return AdexchangebuyerAccountsUpdateRequest;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsUpdateRequest };
var AdexchangebuyerAccountsUpdateResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerAccountsUpdateResponse, _super);
    function AdexchangebuyerAccountsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Account)
    ], AdexchangebuyerAccountsUpdateResponse.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerAccountsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerAccountsUpdateResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerAccountsUpdateResponse;
}(SpeakeasyBase));
export { AdexchangebuyerAccountsUpdateResponse };
