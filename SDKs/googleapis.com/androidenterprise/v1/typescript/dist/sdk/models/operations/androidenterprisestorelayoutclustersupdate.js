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
var AndroidenterpriseStorelayoutclustersUpdatePathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersUpdatePathParams, _super);
    function AndroidenterpriseStorelayoutclustersUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdatePathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdatePathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdatePathParams.prototype, "pageId", void 0);
    return AndroidenterpriseStorelayoutclustersUpdatePathParams;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersUpdatePathParams };
var AndroidenterpriseStorelayoutclustersUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersUpdateQueryParams, _super);
    function AndroidenterpriseStorelayoutclustersUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseStorelayoutclustersUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseStorelayoutclustersUpdateQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersUpdateQueryParams };
var AndroidenterpriseStorelayoutclustersUpdateSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersUpdateSecurity, _super);
    function AndroidenterpriseStorelayoutclustersUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseStorelayoutclustersUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseStorelayoutclustersUpdateSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseStorelayoutclustersUpdateSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersUpdateSecurity };
var AndroidenterpriseStorelayoutclustersUpdateRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersUpdateRequest, _super);
    function AndroidenterpriseStorelayoutclustersUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutclustersUpdatePathParams)
    ], AndroidenterpriseStorelayoutclustersUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutclustersUpdateQueryParams)
    ], AndroidenterpriseStorelayoutclustersUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StoreCluster)
    ], AndroidenterpriseStorelayoutclustersUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseStorelayoutclustersUpdateSecurity)
    ], AndroidenterpriseStorelayoutclustersUpdateRequest.prototype, "security", void 0);
    return AndroidenterpriseStorelayoutclustersUpdateRequest;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersUpdateRequest };
var AndroidenterpriseStorelayoutclustersUpdateResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseStorelayoutclustersUpdateResponse, _super);
    function AndroidenterpriseStorelayoutclustersUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseStorelayoutclustersUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseStorelayoutclustersUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StoreCluster)
    ], AndroidenterpriseStorelayoutclustersUpdateResponse.prototype, "storeCluster", void 0);
    return AndroidenterpriseStorelayoutclustersUpdateResponse;
}(SpeakeasyBase));
export { AndroidenterpriseStorelayoutclustersUpdateResponse };
