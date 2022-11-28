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
var DirectoryChromeosdevicesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesUpdatePathParams, _super);
    function DirectoryChromeosdevicesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdatePathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdatePathParams.prototype, "deviceId", void 0);
    return DirectoryChromeosdevicesUpdatePathParams;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesUpdatePathParams };
export var DirectoryChromeosdevicesUpdateProjectionEnum;
(function (DirectoryChromeosdevicesUpdateProjectionEnum) {
    DirectoryChromeosdevicesUpdateProjectionEnum["Basic"] = "BASIC";
    DirectoryChromeosdevicesUpdateProjectionEnum["Full"] = "FULL";
})(DirectoryChromeosdevicesUpdateProjectionEnum || (DirectoryChromeosdevicesUpdateProjectionEnum = {}));
var DirectoryChromeosdevicesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesUpdateQueryParams, _super);
    function DirectoryChromeosdevicesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryChromeosdevicesUpdateQueryParams;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesUpdateQueryParams };
var DirectoryChromeosdevicesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesUpdateSecurity, _super);
    function DirectoryChromeosdevicesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryChromeosdevicesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryChromeosdevicesUpdateSecurity.prototype, "oauth2c", void 0);
    return DirectoryChromeosdevicesUpdateSecurity;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesUpdateSecurity };
var DirectoryChromeosdevicesUpdateRequest = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesUpdateRequest, _super);
    function DirectoryChromeosdevicesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesUpdatePathParams)
    ], DirectoryChromeosdevicesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesUpdateQueryParams)
    ], DirectoryChromeosdevicesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChromeOsDevice)
    ], DirectoryChromeosdevicesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesUpdateSecurity)
    ], DirectoryChromeosdevicesUpdateRequest.prototype, "security", void 0);
    return DirectoryChromeosdevicesUpdateRequest;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesUpdateRequest };
var DirectoryChromeosdevicesUpdateResponse = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesUpdateResponse, _super);
    function DirectoryChromeosdevicesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChromeOsDevice)
    ], DirectoryChromeosdevicesUpdateResponse.prototype, "chromeOsDevice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryChromeosdevicesUpdateResponse.prototype, "statusCode", void 0);
    return DirectoryChromeosdevicesUpdateResponse;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesUpdateResponse };
