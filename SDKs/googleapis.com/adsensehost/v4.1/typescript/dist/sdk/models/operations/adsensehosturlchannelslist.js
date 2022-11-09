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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AdsensehostUrlchannelsListPathParams = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsListPathParams, _super);
    function AdsensehostUrlchannelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsListPathParams.prototype, "adClientId", void 0);
    return AdsensehostUrlchannelsListPathParams;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsListPathParams };
var AdsensehostUrlchannelsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsListQueryParams, _super);
    function AdsensehostUrlchannelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], AdsensehostUrlchannelsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostUrlchannelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsListQueryParams.prototype, "userIp", void 0);
    return AdsensehostUrlchannelsListQueryParams;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsListQueryParams };
var AdsensehostUrlchannelsListSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsListSecurity, _super);
    function AdsensehostUrlchannelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostUrlchannelsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostUrlchannelsListSecurity.prototype, "oauth2c", void 0);
    return AdsensehostUrlchannelsListSecurity;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsListSecurity };
var AdsensehostUrlchannelsListRequest = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsListRequest, _super);
    function AdsensehostUrlchannelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostUrlchannelsListPathParams)
    ], AdsensehostUrlchannelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostUrlchannelsListQueryParams)
    ], AdsensehostUrlchannelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostUrlchannelsListSecurity)
    ], AdsensehostUrlchannelsListRequest.prototype, "security", void 0);
    return AdsensehostUrlchannelsListRequest;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsListRequest };
var AdsensehostUrlchannelsListResponse = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsListResponse, _super);
    function AdsensehostUrlchannelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdsensehostUrlchannelsListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UrlChannels)
    ], AdsensehostUrlchannelsListResponse.prototype, "urlChannels", void 0);
    return AdsensehostUrlchannelsListResponse;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsListResponse };
