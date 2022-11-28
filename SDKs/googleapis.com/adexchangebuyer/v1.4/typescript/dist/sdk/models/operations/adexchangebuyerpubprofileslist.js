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
var AdexchangebuyerPubprofilesListPathParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPubprofilesListPathParams, _super);
    function AdexchangebuyerPubprofilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", Number)
    ], AdexchangebuyerPubprofilesListPathParams.prototype, "accountId", void 0);
    return AdexchangebuyerPubprofilesListPathParams;
}(SpeakeasyBase));
export { AdexchangebuyerPubprofilesListPathParams };
var AdexchangebuyerPubprofilesListQueryParams = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPubprofilesListQueryParams, _super);
    function AdexchangebuyerPubprofilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPubprofilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPubprofilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPubprofilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPubprofilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdexchangebuyerPubprofilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPubprofilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdexchangebuyerPubprofilesListQueryParams.prototype, "userIp", void 0);
    return AdexchangebuyerPubprofilesListQueryParams;
}(SpeakeasyBase));
export { AdexchangebuyerPubprofilesListQueryParams };
var AdexchangebuyerPubprofilesListSecurity = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPubprofilesListSecurity, _super);
    function AdexchangebuyerPubprofilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdexchangebuyerPubprofilesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdexchangebuyerPubprofilesListSecurity.prototype, "oauth2c", void 0);
    return AdexchangebuyerPubprofilesListSecurity;
}(SpeakeasyBase));
export { AdexchangebuyerPubprofilesListSecurity };
var AdexchangebuyerPubprofilesListRequest = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPubprofilesListRequest, _super);
    function AdexchangebuyerPubprofilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPubprofilesListPathParams)
    ], AdexchangebuyerPubprofilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPubprofilesListQueryParams)
    ], AdexchangebuyerPubprofilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdexchangebuyerPubprofilesListSecurity)
    ], AdexchangebuyerPubprofilesListRequest.prototype, "security", void 0);
    return AdexchangebuyerPubprofilesListRequest;
}(SpeakeasyBase));
export { AdexchangebuyerPubprofilesListRequest };
var AdexchangebuyerPubprofilesListResponse = /** @class */ (function (_super) {
    __extends(AdexchangebuyerPubprofilesListResponse, _super);
    function AdexchangebuyerPubprofilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdexchangebuyerPubprofilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetPublisherProfilesByAccountIdResponse)
    ], AdexchangebuyerPubprofilesListResponse.prototype, "getPublisherProfilesByAccountIdResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdexchangebuyerPubprofilesListResponse.prototype, "statusCode", void 0);
    return AdexchangebuyerPubprofilesListResponse;
}(SpeakeasyBase));
export { AdexchangebuyerPubprofilesListResponse };
