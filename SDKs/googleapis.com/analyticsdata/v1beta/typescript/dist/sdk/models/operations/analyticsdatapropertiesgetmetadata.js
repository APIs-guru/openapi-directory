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
var AnalyticsdataPropertiesGetMetadataPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesGetMetadataPathParams, _super);
    function AnalyticsdataPropertiesGetMetadataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataPathParams.prototype, "name", void 0);
    return AnalyticsdataPropertiesGetMetadataPathParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesGetMetadataPathParams };
var AnalyticsdataPropertiesGetMetadataQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesGetMetadataQueryParams, _super);
    function AnalyticsdataPropertiesGetMetadataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsdataPropertiesGetMetadataQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsdataPropertiesGetMetadataQueryParams;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesGetMetadataQueryParams };
var AnalyticsdataPropertiesGetMetadataSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesGetMetadataSecurityOption1, _super);
    function AnalyticsdataPropertiesGetMetadataSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesGetMetadataSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesGetMetadataSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesGetMetadataSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesGetMetadataSecurityOption1 };
var AnalyticsdataPropertiesGetMetadataSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesGetMetadataSecurityOption2, _super);
    function AnalyticsdataPropertiesGetMetadataSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsdataPropertiesGetMetadataSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsdataPropertiesGetMetadataSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsdataPropertiesGetMetadataSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesGetMetadataSecurityOption2 };
var AnalyticsdataPropertiesGetMetadataSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesGetMetadataSecurity, _super);
    function AnalyticsdataPropertiesGetMetadataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesGetMetadataSecurityOption1)
    ], AnalyticsdataPropertiesGetMetadataSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsdataPropertiesGetMetadataSecurityOption2)
    ], AnalyticsdataPropertiesGetMetadataSecurity.prototype, "option2", void 0);
    return AnalyticsdataPropertiesGetMetadataSecurity;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesGetMetadataSecurity };
var AnalyticsdataPropertiesGetMetadataRequest = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesGetMetadataRequest, _super);
    function AnalyticsdataPropertiesGetMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesGetMetadataPathParams)
    ], AnalyticsdataPropertiesGetMetadataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesGetMetadataQueryParams)
    ], AnalyticsdataPropertiesGetMetadataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsdataPropertiesGetMetadataSecurity)
    ], AnalyticsdataPropertiesGetMetadataRequest.prototype, "security", void 0);
    return AnalyticsdataPropertiesGetMetadataRequest;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesGetMetadataRequest };
var AnalyticsdataPropertiesGetMetadataResponse = /** @class */ (function (_super) {
    __extends(AnalyticsdataPropertiesGetMetadataResponse, _super);
    function AnalyticsdataPropertiesGetMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsdataPropertiesGetMetadataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Metadata)
    ], AnalyticsdataPropertiesGetMetadataResponse.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsdataPropertiesGetMetadataResponse.prototype, "statusCode", void 0);
    return AnalyticsdataPropertiesGetMetadataResponse;
}(SpeakeasyBase));
export { AnalyticsdataPropertiesGetMetadataResponse };
