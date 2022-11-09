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
var AndroidpublisherInapppurchasesGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherInapppurchasesGetPathParams, _super);
    function AndroidpublisherInapppurchasesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetPathParams.prototype, "packageName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetPathParams.prototype, "productId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetPathParams.prototype, "token", void 0);
    return AndroidpublisherInapppurchasesGetPathParams;
}(SpeakeasyBase));
export { AndroidpublisherInapppurchasesGetPathParams };
var AndroidpublisherInapppurchasesGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherInapppurchasesGetQueryParams, _super);
    function AndroidpublisherInapppurchasesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherInapppurchasesGetQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherInapppurchasesGetQueryParams };
var AndroidpublisherInapppurchasesGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherInapppurchasesGetSecurity, _super);
    function AndroidpublisherInapppurchasesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherInapppurchasesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherInapppurchasesGetSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherInapppurchasesGetSecurity;
}(SpeakeasyBase));
export { AndroidpublisherInapppurchasesGetSecurity };
var AndroidpublisherInapppurchasesGetRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherInapppurchasesGetRequest, _super);
    function AndroidpublisherInapppurchasesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AndroidpublisherInapppurchasesGetPathParams)
    ], AndroidpublisherInapppurchasesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AndroidpublisherInapppurchasesGetQueryParams)
    ], AndroidpublisherInapppurchasesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AndroidpublisherInapppurchasesGetSecurity)
    ], AndroidpublisherInapppurchasesGetRequest.prototype, "security", void 0);
    return AndroidpublisherInapppurchasesGetRequest;
}(SpeakeasyBase));
export { AndroidpublisherInapppurchasesGetRequest };
var AndroidpublisherInapppurchasesGetResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherInapppurchasesGetResponse, _super);
    function AndroidpublisherInapppurchasesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], AndroidpublisherInapppurchasesGetResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AndroidpublisherInapppurchasesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherInapppurchasesGetResponse.prototype, "statusCode", void 0);
    return AndroidpublisherInapppurchasesGetResponse;
}(SpeakeasyBase));
export { AndroidpublisherInapppurchasesGetResponse };
