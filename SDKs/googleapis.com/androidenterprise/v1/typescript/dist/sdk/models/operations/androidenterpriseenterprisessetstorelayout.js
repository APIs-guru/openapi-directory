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
var AndroidenterpriseEnterprisesSetStoreLayoutPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesSetStoreLayoutPathParams, _super);
    function AndroidenterpriseEnterprisesSetStoreLayoutPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutPathParams.prototype, "enterpriseId", void 0);
    return AndroidenterpriseEnterprisesSetStoreLayoutPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesSetStoreLayoutPathParams };
var AndroidenterpriseEnterprisesSetStoreLayoutQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesSetStoreLayoutQueryParams, _super);
    function AndroidenterpriseEnterprisesSetStoreLayoutQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseEnterprisesSetStoreLayoutQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseEnterprisesSetStoreLayoutQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesSetStoreLayoutQueryParams };
var AndroidenterpriseEnterprisesSetStoreLayoutSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesSetStoreLayoutSecurity, _super);
    function AndroidenterpriseEnterprisesSetStoreLayoutSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseEnterprisesSetStoreLayoutSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseEnterprisesSetStoreLayoutSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseEnterprisesSetStoreLayoutSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesSetStoreLayoutSecurity };
var AndroidenterpriseEnterprisesSetStoreLayoutRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesSetStoreLayoutRequest, _super);
    function AndroidenterpriseEnterprisesSetStoreLayoutRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesSetStoreLayoutPathParams)
    ], AndroidenterpriseEnterprisesSetStoreLayoutRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesSetStoreLayoutQueryParams)
    ], AndroidenterpriseEnterprisesSetStoreLayoutRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StoreLayout)
    ], AndroidenterpriseEnterprisesSetStoreLayoutRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesSetStoreLayoutSecurity)
    ], AndroidenterpriseEnterprisesSetStoreLayoutRequest.prototype, "security", void 0);
    return AndroidenterpriseEnterprisesSetStoreLayoutRequest;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesSetStoreLayoutRequest };
var AndroidenterpriseEnterprisesSetStoreLayoutResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesSetStoreLayoutResponse, _super);
    function AndroidenterpriseEnterprisesSetStoreLayoutResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesSetStoreLayoutResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseEnterprisesSetStoreLayoutResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StoreLayout)
    ], AndroidenterpriseEnterprisesSetStoreLayoutResponse.prototype, "storeLayout", void 0);
    return AndroidenterpriseEnterprisesSetStoreLayoutResponse;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesSetStoreLayoutResponse };
