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
var AndroidpublisherOrdersRefundPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherOrdersRefundPathParams, _super);
    function AndroidpublisherOrdersRefundPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundPathParams.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundPathParams.prototype, "packageName", void 0);
    return AndroidpublisherOrdersRefundPathParams;
}(SpeakeasyBase));
export { AndroidpublisherOrdersRefundPathParams };
var AndroidpublisherOrdersRefundQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherOrdersRefundQueryParams, _super);
    function AndroidpublisherOrdersRefundQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=revoke" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "revoke", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherOrdersRefundQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherOrdersRefundQueryParams };
var AndroidpublisherOrdersRefundSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherOrdersRefundSecurity, _super);
    function AndroidpublisherOrdersRefundSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherOrdersRefundSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherOrdersRefundSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherOrdersRefundSecurity;
}(SpeakeasyBase));
export { AndroidpublisherOrdersRefundSecurity };
var AndroidpublisherOrdersRefundRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherOrdersRefundRequest, _super);
    function AndroidpublisherOrdersRefundRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherOrdersRefundPathParams)
    ], AndroidpublisherOrdersRefundRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherOrdersRefundQueryParams)
    ], AndroidpublisherOrdersRefundRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherOrdersRefundSecurity)
    ], AndroidpublisherOrdersRefundRequest.prototype, "security", void 0);
    return AndroidpublisherOrdersRefundRequest;
}(SpeakeasyBase));
export { AndroidpublisherOrdersRefundRequest };
var AndroidpublisherOrdersRefundResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherOrdersRefundResponse, _super);
    function AndroidpublisherOrdersRefundResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherOrdersRefundResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherOrdersRefundResponse.prototype, "statusCode", void 0);
    return AndroidpublisherOrdersRefundResponse;
}(SpeakeasyBase));
export { AndroidpublisherOrdersRefundResponse };
