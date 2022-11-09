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
var AdsensehostCustomchannelsPatchPathParams = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsPatchPathParams, _super);
    function AdsensehostCustomchannelsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsPatchPathParams.prototype, "adClientId", void 0);
    return AdsensehostCustomchannelsPatchPathParams;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsPatchPathParams };
var AdsensehostCustomchannelsPatchQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsPatchQueryParams, _super);
    function AdsensehostCustomchannelsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customChannelId" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsPatchQueryParams.prototype, "customChannelId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostCustomchannelsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsPatchQueryParams.prototype, "userIp", void 0);
    return AdsensehostCustomchannelsPatchQueryParams;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsPatchQueryParams };
var AdsensehostCustomchannelsPatchSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsPatchSecurity, _super);
    function AdsensehostCustomchannelsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostCustomchannelsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostCustomchannelsPatchSecurity.prototype, "oauth2c", void 0);
    return AdsensehostCustomchannelsPatchSecurity;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsPatchSecurity };
var AdsensehostCustomchannelsPatchRequest = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsPatchRequest, _super);
    function AdsensehostCustomchannelsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostCustomchannelsPatchPathParams)
    ], AdsensehostCustomchannelsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostCustomchannelsPatchQueryParams)
    ], AdsensehostCustomchannelsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomChannel)
    ], AdsensehostCustomchannelsPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostCustomchannelsPatchSecurity)
    ], AdsensehostCustomchannelsPatchRequest.prototype, "security", void 0);
    return AdsensehostCustomchannelsPatchRequest;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsPatchRequest };
var AdsensehostCustomchannelsPatchResponse = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsPatchResponse, _super);
    function AdsensehostCustomchannelsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CustomChannel)
    ], AdsensehostCustomchannelsPatchResponse.prototype, "customChannel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdsensehostCustomchannelsPatchResponse.prototype, "statusCode", void 0);
    return AdsensehostCustomchannelsPatchResponse;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsPatchResponse };
