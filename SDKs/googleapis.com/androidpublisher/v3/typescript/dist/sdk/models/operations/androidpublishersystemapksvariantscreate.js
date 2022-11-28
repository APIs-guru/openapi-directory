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
var AndroidpublisherSystemapksVariantsCreatePathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsCreatePathParams, _super);
    function AndroidpublisherSystemapksVariantsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreatePathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionCode" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreatePathParams.prototype, "versionCode", void 0);
    return AndroidpublisherSystemapksVariantsCreatePathParams;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsCreatePathParams };
var AndroidpublisherSystemapksVariantsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsCreateQueryParams, _super);
    function AndroidpublisherSystemapksVariantsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherSystemapksVariantsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherSystemapksVariantsCreateQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsCreateQueryParams };
var AndroidpublisherSystemapksVariantsCreateSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsCreateSecurity, _super);
    function AndroidpublisherSystemapksVariantsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherSystemapksVariantsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherSystemapksVariantsCreateSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherSystemapksVariantsCreateSecurity;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsCreateSecurity };
var AndroidpublisherSystemapksVariantsCreateRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsCreateRequest, _super);
    function AndroidpublisherSystemapksVariantsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherSystemapksVariantsCreatePathParams)
    ], AndroidpublisherSystemapksVariantsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherSystemapksVariantsCreateQueryParams)
    ], AndroidpublisherSystemapksVariantsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.VariantInput)
    ], AndroidpublisherSystemapksVariantsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherSystemapksVariantsCreateSecurity)
    ], AndroidpublisherSystemapksVariantsCreateRequest.prototype, "security", void 0);
    return AndroidpublisherSystemapksVariantsCreateRequest;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsCreateRequest };
var AndroidpublisherSystemapksVariantsCreateResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherSystemapksVariantsCreateResponse, _super);
    function AndroidpublisherSystemapksVariantsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherSystemapksVariantsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherSystemapksVariantsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Variant)
    ], AndroidpublisherSystemapksVariantsCreateResponse.prototype, "variant", void 0);
    return AndroidpublisherSystemapksVariantsCreateResponse;
}(SpeakeasyBase));
export { AndroidpublisherSystemapksVariantsCreateResponse };
