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
var AndroidpublisherSystemapksVariantsGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsGetPathParams, _super);
    function AndroidpublisherSystemapksVariantsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variantId" }),
        __metadata("design:type", Number)
    ], AndroidpublisherSystemapksVariantsGetPathParams.prototype, "variantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionCode" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetPathParams.prototype, "versionCode", void 0);
    return AndroidpublisherSystemapksVariantsGetPathParams;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsGetPathParams };
var AndroidpublisherSystemapksVariantsGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsGetQueryParams, _super);
    function AndroidpublisherSystemapksVariantsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherSystemapksVariantsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherSystemapksVariantsGetQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsGetQueryParams };
var AndroidpublisherSystemapksVariantsGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsGetSecurity, _super);
    function AndroidpublisherSystemapksVariantsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherSystemapksVariantsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherSystemapksVariantsGetSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherSystemapksVariantsGetSecurity;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsGetSecurity };
var AndroidpublisherSystemapksVariantsGetRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsGetRequest, _super);
    function AndroidpublisherSystemapksVariantsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherSystemapksVariantsGetPathParams)
    ], AndroidpublisherSystemapksVariantsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherSystemapksVariantsGetQueryParams)
    ], AndroidpublisherSystemapksVariantsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherSystemapksVariantsGetSecurity)
    ], AndroidpublisherSystemapksVariantsGetRequest.prototype, "security", void 0);
    return AndroidpublisherSystemapksVariantsGetRequest;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsGetRequest };
var AndroidpublisherSystemapksVariantsGetResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsGetResponse, _super);
    function AndroidpublisherSystemapksVariantsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherSystemapksVariantsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Variant)
    ], AndroidpublisherSystemapksVariantsGetResponse.prototype, "variant", void 0);
    return AndroidpublisherSystemapksVariantsGetResponse;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsGetResponse };
