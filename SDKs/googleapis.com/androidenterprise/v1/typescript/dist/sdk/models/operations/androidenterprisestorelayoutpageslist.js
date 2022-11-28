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
var AndroidenterpriseStorelayoutpagesListPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutpagesListPathParams, _super);
    function AndroidenterpriseStorelayoutpagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListPathParams.prototype, "enterpriseId", void 0);
    return AndroidenterpriseStorelayoutpagesListPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutpagesListPathParams };
var AndroidenterpriseStorelayoutpagesListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutpagesListQueryParams, _super);
    function AndroidenterpriseStorelayoutpagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseStorelayoutpagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseStorelayoutpagesListQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutpagesListQueryParams };
var AndroidenterpriseStorelayoutpagesListSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutpagesListSecurity, _super);
    function AndroidenterpriseStorelayoutpagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseStorelayoutpagesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseStorelayoutpagesListSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseStorelayoutpagesListSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutpagesListSecurity };
var AndroidenterpriseStorelayoutpagesListRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutpagesListRequest, _super);
    function AndroidenterpriseStorelayoutpagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutpagesListPathParams)
    ], AndroidenterpriseStorelayoutpagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutpagesListQueryParams)
    ], AndroidenterpriseStorelayoutpagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutpagesListSecurity)
    ], AndroidenterpriseStorelayoutpagesListRequest.prototype, "security", void 0);
    return AndroidenterpriseStorelayoutpagesListRequest;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutpagesListRequest };
var AndroidenterpriseStorelayoutpagesListResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutpagesListResponse, _super);
    function AndroidenterpriseStorelayoutpagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutpagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseStorelayoutpagesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StoreLayoutPagesListResponse)
    ], AndroidenterpriseStorelayoutpagesListResponse.prototype, "storeLayoutPagesListResponse", void 0);
    return AndroidenterpriseStorelayoutpagesListResponse;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutpagesListResponse };
