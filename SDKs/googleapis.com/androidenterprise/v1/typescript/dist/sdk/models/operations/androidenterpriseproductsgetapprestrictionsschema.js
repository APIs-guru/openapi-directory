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
var AndroidenterpriseProductsGetAppRestrictionsSchemaPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseProductsGetAppRestrictionsSchemaPathParams, _super);
    function AndroidenterpriseProductsGetAppRestrictionsSchemaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaPathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaPathParams.prototype, "productId", void 0);
    return AndroidenterpriseProductsGetAppRestrictionsSchemaPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseProductsGetAppRestrictionsSchemaPathParams };
var AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams, _super);
    function AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams };
var AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity, _super);
    function AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity };
var AndroidenterpriseProductsGetAppRestrictionsSchemaRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseProductsGetAppRestrictionsSchemaRequest, _super);
    function AndroidenterpriseProductsGetAppRestrictionsSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseProductsGetAppRestrictionsSchemaPathParams)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseProductsGetAppRestrictionsSchemaQueryParams)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseProductsGetAppRestrictionsSchemaSecurity)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaRequest.prototype, "security", void 0);
    return AndroidenterpriseProductsGetAppRestrictionsSchemaRequest;
}(SpeakeasyBase));
export { AndroidenterpriseProductsGetAppRestrictionsSchemaRequest };
var AndroidenterpriseProductsGetAppRestrictionsSchemaResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseProductsGetAppRestrictionsSchemaResponse, _super);
    function AndroidenterpriseProductsGetAppRestrictionsSchemaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AppRestrictionsSchema)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaResponse.prototype, "appRestrictionsSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseProductsGetAppRestrictionsSchemaResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseProductsGetAppRestrictionsSchemaResponse;
}(SpeakeasyBase));
export { AndroidenterpriseProductsGetAppRestrictionsSchemaResponse };
