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
var AndroidenterpriseEnterprisesGetStoreLayoutPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetStoreLayoutPathParams, _super);
    function AndroidenterpriseEnterprisesGetStoreLayoutPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutPathParams.prototype, "enterpriseId", void 0);
    return AndroidenterpriseEnterprisesGetStoreLayoutPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetStoreLayoutPathParams };
var AndroidenterpriseEnterprisesGetStoreLayoutQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetStoreLayoutQueryParams, _super);
    function AndroidenterpriseEnterprisesGetStoreLayoutQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseEnterprisesGetStoreLayoutQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseEnterprisesGetStoreLayoutQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetStoreLayoutQueryParams };
var AndroidenterpriseEnterprisesGetStoreLayoutSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetStoreLayoutSecurity, _super);
    function AndroidenterpriseEnterprisesGetStoreLayoutSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseEnterprisesGetStoreLayoutSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseEnterprisesGetStoreLayoutSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseEnterprisesGetStoreLayoutSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetStoreLayoutSecurity };
var AndroidenterpriseEnterprisesGetStoreLayoutRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetStoreLayoutRequest, _super);
    function AndroidenterpriseEnterprisesGetStoreLayoutRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesGetStoreLayoutPathParams)
    ], AndroidenterpriseEnterprisesGetStoreLayoutRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesGetStoreLayoutQueryParams)
    ], AndroidenterpriseEnterprisesGetStoreLayoutRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEnterprisesGetStoreLayoutSecurity)
    ], AndroidenterpriseEnterprisesGetStoreLayoutRequest.prototype, "security", void 0);
    return AndroidenterpriseEnterprisesGetStoreLayoutRequest;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetStoreLayoutRequest };
var AndroidenterpriseEnterprisesGetStoreLayoutResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEnterprisesGetStoreLayoutResponse, _super);
    function AndroidenterpriseEnterprisesGetStoreLayoutResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseEnterprisesGetStoreLayoutResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseEnterprisesGetStoreLayoutResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StoreLayout)
    ], AndroidenterpriseEnterprisesGetStoreLayoutResponse.prototype, "storeLayout", void 0);
    return AndroidenterpriseEnterprisesGetStoreLayoutResponse;
}(SpeakeasyBase));
export { AndroidenterpriseEnterprisesGetStoreLayoutResponse };
