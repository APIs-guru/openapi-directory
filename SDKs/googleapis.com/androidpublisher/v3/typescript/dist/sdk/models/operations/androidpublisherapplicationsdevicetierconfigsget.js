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
var AndroidpublisherApplicationsDeviceTierConfigsGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherApplicationsDeviceTierConfigsGetPathParams, _super);
    function AndroidpublisherApplicationsDeviceTierConfigsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceTierConfigId" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetPathParams.prototype, "deviceTierConfigId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetPathParams.prototype, "packageName", void 0);
    return AndroidpublisherApplicationsDeviceTierConfigsGetPathParams;
}(SpeakeasyBase));
export { AndroidpublisherApplicationsDeviceTierConfigsGetPathParams };
var AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams, _super);
    function AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams };
var AndroidpublisherApplicationsDeviceTierConfigsGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherApplicationsDeviceTierConfigsGetSecurity, _super);
    function AndroidpublisherApplicationsDeviceTierConfigsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherApplicationsDeviceTierConfigsGetSecurity;
}(SpeakeasyBase));
export { AndroidpublisherApplicationsDeviceTierConfigsGetSecurity };
var AndroidpublisherApplicationsDeviceTierConfigsGetRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherApplicationsDeviceTierConfigsGetRequest, _super);
    function AndroidpublisherApplicationsDeviceTierConfigsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherApplicationsDeviceTierConfigsGetPathParams)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherApplicationsDeviceTierConfigsGetQueryParams)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherApplicationsDeviceTierConfigsGetSecurity)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetRequest.prototype, "security", void 0);
    return AndroidpublisherApplicationsDeviceTierConfigsGetRequest;
}(SpeakeasyBase));
export { AndroidpublisherApplicationsDeviceTierConfigsGetRequest };
var AndroidpublisherApplicationsDeviceTierConfigsGetResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherApplicationsDeviceTierConfigsGetResponse, _super);
    function AndroidpublisherApplicationsDeviceTierConfigsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeviceTierConfig)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetResponse.prototype, "deviceTierConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherApplicationsDeviceTierConfigsGetResponse.prototype, "statusCode", void 0);
    return AndroidpublisherApplicationsDeviceTierConfigsGetResponse;
}(SpeakeasyBase));
export { AndroidpublisherApplicationsDeviceTierConfigsGetResponse };
