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
var AndroidenterpriseStorelayoutpagesUpdatePathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutpagesUpdatePathParams, _super);
    function AndroidenterpriseStorelayoutpagesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdatePathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdatePathParams.prototype, "pageId", void 0);
    return AndroidenterpriseStorelayoutpagesUpdatePathParams;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutpagesUpdatePathParams };
var AndroidenterpriseStorelayoutpagesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutpagesUpdateQueryParams, _super);
    function AndroidenterpriseStorelayoutpagesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseStorelayoutpagesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseStorelayoutpagesUpdateQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutpagesUpdateQueryParams };
var AndroidenterpriseStorelayoutpagesUpdateSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutpagesUpdateSecurity, _super);
    function AndroidenterpriseStorelayoutpagesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseStorelayoutpagesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseStorelayoutpagesUpdateSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseStorelayoutpagesUpdateSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutpagesUpdateSecurity };
var AndroidenterpriseStorelayoutpagesUpdateRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutpagesUpdateRequest, _super);
    function AndroidenterpriseStorelayoutpagesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutpagesUpdatePathParams)
    ], AndroidenterpriseStorelayoutpagesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutpagesUpdateQueryParams)
    ], AndroidenterpriseStorelayoutpagesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StorePage)
    ], AndroidenterpriseStorelayoutpagesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutpagesUpdateSecurity)
    ], AndroidenterpriseStorelayoutpagesUpdateRequest.prototype, "security", void 0);
    return AndroidenterpriseStorelayoutpagesUpdateRequest;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutpagesUpdateRequest };
var AndroidenterpriseStorelayoutpagesUpdateResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutpagesUpdateResponse, _super);
    function AndroidenterpriseStorelayoutpagesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseStorelayoutpagesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StorePage)
    ], AndroidenterpriseStorelayoutpagesUpdateResponse.prototype, "storePage", void 0);
    return AndroidenterpriseStorelayoutpagesUpdateResponse;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutpagesUpdateResponse };
