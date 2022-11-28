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
var AndroidenterpriseStorelayoutclustersListPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersListPathParams, _super);
    function AndroidenterpriseStorelayoutclustersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListPathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListPathParams.prototype, "pageId", void 0);
    return AndroidenterpriseStorelayoutclustersListPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersListPathParams };
var AndroidenterpriseStorelayoutclustersListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersListQueryParams, _super);
    function AndroidenterpriseStorelayoutclustersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseStorelayoutclustersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseStorelayoutclustersListQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersListQueryParams };
var AndroidenterpriseStorelayoutclustersListSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersListSecurity, _super);
    function AndroidenterpriseStorelayoutclustersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseStorelayoutclustersListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseStorelayoutclustersListSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseStorelayoutclustersListSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersListSecurity };
var AndroidenterpriseStorelayoutclustersListRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersListRequest, _super);
    function AndroidenterpriseStorelayoutclustersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutclustersListPathParams)
    ], AndroidenterpriseStorelayoutclustersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutclustersListQueryParams)
    ], AndroidenterpriseStorelayoutclustersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutclustersListSecurity)
    ], AndroidenterpriseStorelayoutclustersListRequest.prototype, "security", void 0);
    return AndroidenterpriseStorelayoutclustersListRequest;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersListRequest };
var AndroidenterpriseStorelayoutclustersListResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersListResponse, _super);
    function AndroidenterpriseStorelayoutclustersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseStorelayoutclustersListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StoreLayoutClustersListResponse)
    ], AndroidenterpriseStorelayoutclustersListResponse.prototype, "storeLayoutClustersListResponse", void 0);
    return AndroidenterpriseStorelayoutclustersListResponse;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersListResponse };
