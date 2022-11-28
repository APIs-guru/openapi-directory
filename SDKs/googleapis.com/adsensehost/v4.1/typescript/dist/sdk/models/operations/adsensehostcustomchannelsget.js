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
var AdsensehostCustomchannelsGetPathParams = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsGetPathParams, _super);
    function AdsensehostCustomchannelsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsGetPathParams.prototype, "adClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customChannelId" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsGetPathParams.prototype, "customChannelId", void 0);
    return AdsensehostCustomchannelsGetPathParams;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsGetPathParams };
var AdsensehostCustomchannelsGetQueryParams = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsGetQueryParams, _super);
    function AdsensehostCustomchannelsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsensehostCustomchannelsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsGetQueryParams.prototype, "userIp", void 0);
    return AdsensehostCustomchannelsGetQueryParams;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsGetQueryParams };
var AdsensehostCustomchannelsGetSecurity = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsGetSecurity, _super);
    function AdsensehostCustomchannelsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsensehostCustomchannelsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsensehostCustomchannelsGetSecurity.prototype, "oauth2c", void 0);
    return AdsensehostCustomchannelsGetSecurity;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsGetSecurity };
var AdsensehostCustomchannelsGetRequest = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsGetRequest, _super);
    function AdsensehostCustomchannelsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsensehostCustomchannelsGetPathParams)
    ], AdsensehostCustomchannelsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsensehostCustomchannelsGetQueryParams)
    ], AdsensehostCustomchannelsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsensehostCustomchannelsGetSecurity)
    ], AdsensehostCustomchannelsGetRequest.prototype, "security", void 0);
    return AdsensehostCustomchannelsGetRequest;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsGetRequest };
var AdsensehostCustomchannelsGetResponse = /** @class */ (function (_super) {
    __extends(AdsensehostCustomchannelsGetResponse, _super);
    function AdsensehostCustomchannelsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsensehostCustomchannelsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomChannel)
    ], AdsensehostCustomchannelsGetResponse.prototype, "customChannel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsensehostCustomchannelsGetResponse.prototype, "statusCode", void 0);
    return AdsensehostCustomchannelsGetResponse;
}(SpeakeasyBase));
export { AdsensehostCustomchannelsGetResponse };
