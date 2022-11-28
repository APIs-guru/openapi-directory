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
var AdminCustomerDevicesChromeosIssueCommandPathParams = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosIssueCommandPathParams, _super);
    function AdminCustomerDevicesChromeosIssueCommandPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandPathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandPathParams.prototype, "deviceId", void 0);
    return AdminCustomerDevicesChromeosIssueCommandPathParams;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosIssueCommandPathParams };
var AdminCustomerDevicesChromeosIssueCommandQueryParams = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosIssueCommandQueryParams, _super);
    function AdminCustomerDevicesChromeosIssueCommandQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdminCustomerDevicesChromeosIssueCommandQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandQueryParams.prototype, "uploadProtocol", void 0);
    return AdminCustomerDevicesChromeosIssueCommandQueryParams;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosIssueCommandQueryParams };
var AdminCustomerDevicesChromeosIssueCommandSecurity = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosIssueCommandSecurity, _super);
    function AdminCustomerDevicesChromeosIssueCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminCustomerDevicesChromeosIssueCommandSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminCustomerDevicesChromeosIssueCommandSecurity.prototype, "oauth2c", void 0);
    return AdminCustomerDevicesChromeosIssueCommandSecurity;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosIssueCommandSecurity };
var AdminCustomerDevicesChromeosIssueCommandRequest = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosIssueCommandRequest, _super);
    function AdminCustomerDevicesChromeosIssueCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomerDevicesChromeosIssueCommandPathParams)
    ], AdminCustomerDevicesChromeosIssueCommandRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomerDevicesChromeosIssueCommandQueryParams)
    ], AdminCustomerDevicesChromeosIssueCommandRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DirectoryChromeosdevicesIssueCommandRequest)
    ], AdminCustomerDevicesChromeosIssueCommandRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomerDevicesChromeosIssueCommandSecurity)
    ], AdminCustomerDevicesChromeosIssueCommandRequest.prototype, "security", void 0);
    return AdminCustomerDevicesChromeosIssueCommandRequest;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosIssueCommandRequest };
var AdminCustomerDevicesChromeosIssueCommandResponse = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosIssueCommandResponse, _super);
    function AdminCustomerDevicesChromeosIssueCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosIssueCommandResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryChromeosdevicesIssueCommandResponse)
    ], AdminCustomerDevicesChromeosIssueCommandResponse.prototype, "directoryChromeosdevicesIssueCommandResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminCustomerDevicesChromeosIssueCommandResponse.prototype, "statusCode", void 0);
    return AdminCustomerDevicesChromeosIssueCommandResponse;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosIssueCommandResponse };
