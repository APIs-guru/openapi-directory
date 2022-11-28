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
var AndroidenterpriseStorelayoutclustersGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersGetPathParams, _super);
    function AndroidenterpriseStorelayoutclustersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetPathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetPathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetPathParams.prototype, "pageId", void 0);
    return AndroidenterpriseStorelayoutclustersGetPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersGetPathParams };
var AndroidenterpriseStorelayoutclustersGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersGetQueryParams, _super);
    function AndroidenterpriseStorelayoutclustersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseStorelayoutclustersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseStorelayoutclustersGetQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersGetQueryParams };
var AndroidenterpriseStorelayoutclustersGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersGetSecurity, _super);
    function AndroidenterpriseStorelayoutclustersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseStorelayoutclustersGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseStorelayoutclustersGetSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseStorelayoutclustersGetSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersGetSecurity };
var AndroidenterpriseStorelayoutclustersGetRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersGetRequest, _super);
    function AndroidenterpriseStorelayoutclustersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutclustersGetPathParams)
    ], AndroidenterpriseStorelayoutclustersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutclustersGetQueryParams)
    ], AndroidenterpriseStorelayoutclustersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutclustersGetSecurity)
    ], AndroidenterpriseStorelayoutclustersGetRequest.prototype, "security", void 0);
    return AndroidenterpriseStorelayoutclustersGetRequest;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersGetRequest };
var AndroidenterpriseStorelayoutclustersGetResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersGetResponse, _super);
    function AndroidenterpriseStorelayoutclustersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseStorelayoutclustersGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StoreCluster)
    ], AndroidenterpriseStorelayoutclustersGetResponse.prototype, "storeCluster", void 0);
    return AndroidenterpriseStorelayoutclustersGetResponse;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersGetResponse };
