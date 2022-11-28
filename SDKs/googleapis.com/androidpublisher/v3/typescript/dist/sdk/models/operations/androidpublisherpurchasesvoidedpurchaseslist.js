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
var AndroidpublisherPurchasesVoidedpurchasesListPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesVoidedpurchasesListPathParams, _super);
    function AndroidpublisherPurchasesVoidedpurchasesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListPathParams.prototype, "packageName", void 0);
    return AndroidpublisherPurchasesVoidedpurchasesListPathParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesVoidedpurchasesListPathParams };
var AndroidpublisherPurchasesVoidedpurchasesListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesVoidedpurchasesListQueryParams, _super);
    function AndroidpublisherPurchasesVoidedpurchasesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", Number)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherPurchasesVoidedpurchasesListQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesVoidedpurchasesListQueryParams };
var AndroidpublisherPurchasesVoidedpurchasesListSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesVoidedpurchasesListSecurity, _super);
    function AndroidpublisherPurchasesVoidedpurchasesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherPurchasesVoidedpurchasesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherPurchasesVoidedpurchasesListSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherPurchasesVoidedpurchasesListSecurity;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesVoidedpurchasesListSecurity };
var AndroidpublisherPurchasesVoidedpurchasesListRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesVoidedpurchasesListRequest, _super);
    function AndroidpublisherPurchasesVoidedpurchasesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesVoidedpurchasesListPathParams)
    ], AndroidpublisherPurchasesVoidedpurchasesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesVoidedpurchasesListQueryParams)
    ], AndroidpublisherPurchasesVoidedpurchasesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherPurchasesVoidedpurchasesListSecurity)
    ], AndroidpublisherPurchasesVoidedpurchasesListRequest.prototype, "security", void 0);
    return AndroidpublisherPurchasesVoidedpurchasesListRequest;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesVoidedpurchasesListRequest };
var AndroidpublisherPurchasesVoidedpurchasesListResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherPurchasesVoidedpurchasesListResponse, _super);
    function AndroidpublisherPurchasesVoidedpurchasesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherPurchasesVoidedpurchasesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherPurchasesVoidedpurchasesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VoidedPurchasesListResponse)
    ], AndroidpublisherPurchasesVoidedpurchasesListResponse.prototype, "voidedPurchasesListResponse", void 0);
    return AndroidpublisherPurchasesVoidedpurchasesListResponse;
}(SpeakeasyBase));
export { AndroidpublisherPurchasesVoidedpurchasesListResponse };
