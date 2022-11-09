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
var AdsensehostCustomchannelsDeletePathParams = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsDeletePathParams, _super);
    function AdsensehostCustomchannelsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsDeletePathParams.prototype, "adClientId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=customChannelId" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsDeletePathParams.prototype, "customChannelId", void 0);
    return AdsensehostCustomchannelsDeletePathParams;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsDeletePathParams };
var AdsensehostCustomchannelsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsDeleteQueryParams, _super);
    function AdsensehostCustomchannelsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostCustomchannelsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsDeleteQueryParams.prototype, "userIp", void 0);
    return AdsensehostCustomchannelsDeleteQueryParams;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsDeleteQueryParams };
var AdsensehostCustomchannelsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsDeleteSecurity, _super);
    function AdsensehostCustomchannelsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostCustomchannelsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostCustomchannelsDeleteSecurity.prototype, "oauth2c", void 0);
    return AdsensehostCustomchannelsDeleteSecurity;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsDeleteSecurity };
var AdsensehostCustomchannelsDeleteRequest = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsDeleteRequest, _super);
    function AdsensehostCustomchannelsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostCustomchannelsDeletePathParams)
    ], AdsensehostCustomchannelsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostCustomchannelsDeleteQueryParams)
    ], AdsensehostCustomchannelsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AdsensehostCustomchannelsDeleteSecurity)
    ], AdsensehostCustomchannelsDeleteRequest.prototype, "security", void 0);
    return AdsensehostCustomchannelsDeleteRequest;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsDeleteRequest };
var AdsensehostCustomchannelsDeleteResponse = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsDeleteResponse, _super);
    function AdsensehostCustomchannelsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CustomChannel)
    ], AdsensehostCustomchannelsDeleteResponse.prototype, "customChannel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AdsensehostCustomchannelsDeleteResponse.prototype, "statusCode", void 0);
    return AdsensehostCustomchannelsDeleteResponse;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsDeleteResponse };
