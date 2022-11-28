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
var AdsensehostUrlchannelsInsertPathParams = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsInsertPathParams, _super);
    function AdsensehostUrlchannelsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsInsertPathParams.prototype, "adClientId", void 0);
    return AdsensehostUrlchannelsInsertPathParams;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsInsertPathParams };
var AdsensehostUrlchannelsInsertQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsInsertQueryParams, _super);
    function AdsensehostUrlchannelsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostUrlchannelsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsInsertQueryParams.prototype, "userIp", void 0);
    return AdsensehostUrlchannelsInsertQueryParams;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsInsertQueryParams };
var AdsensehostUrlchannelsInsertSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsInsertSecurity, _super);
    function AdsensehostUrlchannelsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostUrlchannelsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostUrlchannelsInsertSecurity.prototype, "oauth2c", void 0);
    return AdsensehostUrlchannelsInsertSecurity;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsInsertSecurity };
var AdsensehostUrlchannelsInsertRequest = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsInsertRequest, _super);
    function AdsensehostUrlchannelsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsensehostUrlchannelsInsertPathParams)
    ], AdsensehostUrlchannelsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsensehostUrlchannelsInsertQueryParams)
    ], AdsensehostUrlchannelsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UrlChannel)
    ], AdsensehostUrlchannelsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsensehostUrlchannelsInsertSecurity)
    ], AdsensehostUrlchannelsInsertRequest.prototype, "security", void 0);
    return AdsensehostUrlchannelsInsertRequest;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsInsertRequest };
var AdsensehostUrlchannelsInsertResponse = /** @class */ (function (_super) {
    __extends(AdsensehostUrlchannelsInsertResponse, _super);
    function AdsensehostUrlchannelsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsensehostUrlchannelsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsensehostUrlchannelsInsertResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UrlChannel)
    ], AdsensehostUrlchannelsInsertResponse.prototype, "urlChannel", void 0);
    return AdsensehostUrlchannelsInsertResponse;
}(SpeakeasyBase));
export { AdsensehostUrlchannelsInsertResponse };
