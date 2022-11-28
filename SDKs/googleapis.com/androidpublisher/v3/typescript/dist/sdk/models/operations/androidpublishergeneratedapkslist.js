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
var AndroidpublisherGeneratedapksListPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherGeneratedapksListPathParams, _super);
    function AndroidpublisherGeneratedapksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionCode" }),
        __metadata("design:type", Number)
    ], AndroidpublisherGeneratedapksListPathParams.prototype, "versionCode", void 0);
    return AndroidpublisherGeneratedapksListPathParams;
}(SpeakeasyBase));
export { AndroidpublisherGeneratedapksListPathParams };
var AndroidpublisherGeneratedapksListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherGeneratedapksListQueryParams, _super);
    function AndroidpublisherGeneratedapksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherGeneratedapksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherGeneratedapksListQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherGeneratedapksListQueryParams };
var AndroidpublisherGeneratedapksListSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherGeneratedapksListSecurity, _super);
    function AndroidpublisherGeneratedapksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherGeneratedapksListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherGeneratedapksListSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherGeneratedapksListSecurity;
}(SpeakeasyBase));
export { AndroidpublisherGeneratedapksListSecurity };
var AndroidpublisherGeneratedapksListRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherGeneratedapksListRequest, _super);
    function AndroidpublisherGeneratedapksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherGeneratedapksListPathParams)
    ], AndroidpublisherGeneratedapksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherGeneratedapksListQueryParams)
    ], AndroidpublisherGeneratedapksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherGeneratedapksListSecurity)
    ], AndroidpublisherGeneratedapksListRequest.prototype, "security", void 0);
    return AndroidpublisherGeneratedapksListRequest;
}(SpeakeasyBase));
export { AndroidpublisherGeneratedapksListRequest };
var AndroidpublisherGeneratedapksListResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherGeneratedapksListResponse, _super);
    function AndroidpublisherGeneratedapksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherGeneratedapksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GeneratedApksListResponse)
    ], AndroidpublisherGeneratedapksListResponse.prototype, "generatedApksListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherGeneratedapksListResponse.prototype, "statusCode", void 0);
    return AndroidpublisherGeneratedapksListResponse;
}(SpeakeasyBase));
export { AndroidpublisherGeneratedapksListResponse };
