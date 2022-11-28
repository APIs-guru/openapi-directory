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
var DirectoryChromeosdevicesMoveDevicesToOuPathParams = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesMoveDevicesToOuPathParams, _super);
    function DirectoryChromeosdevicesMoveDevicesToOuPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuPathParams.prototype, "customerId", void 0);
    return DirectoryChromeosdevicesMoveDevicesToOuPathParams;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesMoveDevicesToOuPathParams };
var DirectoryChromeosdevicesMoveDevicesToOuQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesMoveDevicesToOuQueryParams, _super);
    function DirectoryChromeosdevicesMoveDevicesToOuQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitPath" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "orgUnitPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryChromeosdevicesMoveDevicesToOuQueryParams;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesMoveDevicesToOuQueryParams };
var DirectoryChromeosdevicesMoveDevicesToOuSecurity = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesMoveDevicesToOuSecurity, _super);
    function DirectoryChromeosdevicesMoveDevicesToOuSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryChromeosdevicesMoveDevicesToOuSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryChromeosdevicesMoveDevicesToOuSecurity.prototype, "oauth2c", void 0);
    return DirectoryChromeosdevicesMoveDevicesToOuSecurity;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesMoveDevicesToOuSecurity };
var DirectoryChromeosdevicesMoveDevicesToOuRequest = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesMoveDevicesToOuRequest, _super);
    function DirectoryChromeosdevicesMoveDevicesToOuRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesMoveDevicesToOuPathParams)
    ], DirectoryChromeosdevicesMoveDevicesToOuRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesMoveDevicesToOuQueryParams)
    ], DirectoryChromeosdevicesMoveDevicesToOuRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChromeOsMoveDevicesToOu)
    ], DirectoryChromeosdevicesMoveDevicesToOuRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryChromeosdevicesMoveDevicesToOuSecurity)
    ], DirectoryChromeosdevicesMoveDevicesToOuRequest.prototype, "security", void 0);
    return DirectoryChromeosdevicesMoveDevicesToOuRequest;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesMoveDevicesToOuRequest };
var DirectoryChromeosdevicesMoveDevicesToOuResponse = /** @class */ (function (_super) {
    __extends(DirectoryChromeosdevicesMoveDevicesToOuResponse, _super);
    function DirectoryChromeosdevicesMoveDevicesToOuResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryChromeosdevicesMoveDevicesToOuResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryChromeosdevicesMoveDevicesToOuResponse.prototype, "statusCode", void 0);
    return DirectoryChromeosdevicesMoveDevicesToOuResponse;
}(SpeakeasyBase));
export { DirectoryChromeosdevicesMoveDevicesToOuResponse };
