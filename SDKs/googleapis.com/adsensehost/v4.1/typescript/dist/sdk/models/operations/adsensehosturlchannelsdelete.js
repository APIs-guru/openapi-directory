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
var AdsensehostUrlchannelsDeletePathParams = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsDeletePathParams, _super);
    function AdsensehostUrlchannelsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsDeletePathParams.prototype, "adClientId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=urlChannelId" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsDeletePathParams.prototype, "urlChannelId", void 0);
    return AdsensehostUrlchannelsDeletePathParams;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsDeletePathParams };
var AdsensehostUrlchannelsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsDeleteQueryParams, _super);
    function AdsensehostUrlchannelsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostUrlchannelsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsDeleteQueryParams.prototype, "userIp", void 0);
    return AdsensehostUrlchannelsDeleteQueryParams;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsDeleteQueryParams };
var AdsensehostUrlchannelsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsDeleteSecurity, _super);
    function AdsensehostUrlchannelsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostUrlchannelsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostUrlchannelsDeleteSecurity.prototype, "oauth2c", void 0);
    return AdsensehostUrlchannelsDeleteSecurity;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsDeleteSecurity };
var AdsensehostUrlchannelsDeleteRequest = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsDeleteRequest, _super);
    function AdsensehostUrlchannelsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostUrlchannelsDeletePathParams)
    ], AdsensehostUrlchannelsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostUrlchannelsDeleteQueryParams)
    ], AdsensehostUrlchannelsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostUrlchannelsDeleteSecurity)
    ], AdsensehostUrlchannelsDeleteRequest.prototype, "security", void 0);
    return AdsensehostUrlchannelsDeleteRequest;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsDeleteRequest };
var AdsensehostUrlchannelsDeleteResponse = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsDeleteResponse, _super);
    function AdsensehostUrlchannelsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdsensehostUrlchannelsDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UrlChannel)
    ], AdsensehostUrlchannelsDeleteResponse.prototype, "urlChannel", void 0);
    return AdsensehostUrlchannelsDeleteResponse;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsDeleteResponse };
