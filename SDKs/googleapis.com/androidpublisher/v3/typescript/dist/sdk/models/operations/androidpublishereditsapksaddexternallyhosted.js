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
var AndroidpublisherEditsApksAddexternallyhostedPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApksAddexternallyhostedPathParams, _super);
    function AndroidpublisherEditsApksAddexternallyhostedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedPathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedPathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsApksAddexternallyhostedPathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsApksAddexternallyhostedPathParams };
var AndroidpublisherEditsApksAddexternallyhostedQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApksAddexternallyhostedQueryParams, _super);
    function AndroidpublisherEditsApksAddexternallyhostedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsApksAddexternallyhostedQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherEditsApksAddexternallyhostedQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsApksAddexternallyhostedQueryParams };
var AndroidpublisherEditsApksAddexternallyhostedSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApksAddexternallyhostedSecurity, _super);
    function AndroidpublisherEditsApksAddexternallyhostedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsApksAddexternallyhostedSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsApksAddexternallyhostedSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsApksAddexternallyhostedSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsApksAddexternallyhostedSecurity };
var AndroidpublisherEditsApksAddexternallyhostedRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApksAddexternallyhostedRequest, _super);
    function AndroidpublisherEditsApksAddexternallyhostedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsApksAddexternallyhostedPathParams)
    ], AndroidpublisherEditsApksAddexternallyhostedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsApksAddexternallyhostedQueryParams)
    ], AndroidpublisherEditsApksAddexternallyhostedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApksAddExternallyHostedRequest)
    ], AndroidpublisherEditsApksAddexternallyhostedRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsApksAddexternallyhostedSecurity)
    ], AndroidpublisherEditsApksAddexternallyhostedRequest.prototype, "security", void 0);
    return AndroidpublisherEditsApksAddexternallyhostedRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsApksAddexternallyhostedRequest };
var AndroidpublisherEditsApksAddexternallyhostedResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsApksAddexternallyhostedResponse, _super);
    function AndroidpublisherEditsApksAddexternallyhostedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApksAddExternallyHostedResponse)
    ], AndroidpublisherEditsApksAddexternallyhostedResponse.prototype, "apksAddExternallyHostedResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsApksAddexternallyhostedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsApksAddexternallyhostedResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsApksAddexternallyhostedResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsApksAddexternallyhostedResponse };
