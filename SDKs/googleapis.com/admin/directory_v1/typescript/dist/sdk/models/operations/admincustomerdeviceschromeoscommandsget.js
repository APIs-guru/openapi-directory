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
var AdminCustomerDevicesChromeosCommandsGetPathParams = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosCommandsGetPathParams, _super);
    function AdminCustomerDevicesChromeosCommandsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commandId" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetPathParams.prototype, "commandId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetPathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetPathParams.prototype, "deviceId", void 0);
    return AdminCustomerDevicesChromeosCommandsGetPathParams;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosCommandsGetPathParams };
var AdminCustomerDevicesChromeosCommandsGetQueryParams = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosCommandsGetQueryParams, _super);
    function AdminCustomerDevicesChromeosCommandsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdminCustomerDevicesChromeosCommandsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AdminCustomerDevicesChromeosCommandsGetQueryParams;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosCommandsGetQueryParams };
var AdminCustomerDevicesChromeosCommandsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosCommandsGetSecurityOption1, _super);
    function AdminCustomerDevicesChromeosCommandsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminCustomerDevicesChromeosCommandsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminCustomerDevicesChromeosCommandsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AdminCustomerDevicesChromeosCommandsGetSecurityOption1;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosCommandsGetSecurityOption1 };
var AdminCustomerDevicesChromeosCommandsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosCommandsGetSecurityOption2, _super);
    function AdminCustomerDevicesChromeosCommandsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdminCustomerDevicesChromeosCommandsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdminCustomerDevicesChromeosCommandsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AdminCustomerDevicesChromeosCommandsGetSecurityOption2;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosCommandsGetSecurityOption2 };
var AdminCustomerDevicesChromeosCommandsGetSecurity = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosCommandsGetSecurity, _super);
    function AdminCustomerDevicesChromeosCommandsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdminCustomerDevicesChromeosCommandsGetSecurityOption1)
    ], AdminCustomerDevicesChromeosCommandsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdminCustomerDevicesChromeosCommandsGetSecurityOption2)
    ], AdminCustomerDevicesChromeosCommandsGetSecurity.prototype, "option2", void 0);
    return AdminCustomerDevicesChromeosCommandsGetSecurity;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosCommandsGetSecurity };
var AdminCustomerDevicesChromeosCommandsGetRequest = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosCommandsGetRequest, _super);
    function AdminCustomerDevicesChromeosCommandsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomerDevicesChromeosCommandsGetPathParams)
    ], AdminCustomerDevicesChromeosCommandsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomerDevicesChromeosCommandsGetQueryParams)
    ], AdminCustomerDevicesChromeosCommandsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdminCustomerDevicesChromeosCommandsGetSecurity)
    ], AdminCustomerDevicesChromeosCommandsGetRequest.prototype, "security", void 0);
    return AdminCustomerDevicesChromeosCommandsGetRequest;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosCommandsGetRequest };
var AdminCustomerDevicesChromeosCommandsGetResponse = /** @class */ (function (_super) {
    __extends(AdminCustomerDevicesChromeosCommandsGetResponse, _super);
    function AdminCustomerDevicesChromeosCommandsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdminCustomerDevicesChromeosCommandsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectoryChromeosdevicesCommand)
    ], AdminCustomerDevicesChromeosCommandsGetResponse.prototype, "directoryChromeosdevicesCommand", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdminCustomerDevicesChromeosCommandsGetResponse.prototype, "statusCode", void 0);
    return AdminCustomerDevicesChromeosCommandsGetResponse;
}(SpeakeasyBase));
export { AdminCustomerDevicesChromeosCommandsGetResponse };
