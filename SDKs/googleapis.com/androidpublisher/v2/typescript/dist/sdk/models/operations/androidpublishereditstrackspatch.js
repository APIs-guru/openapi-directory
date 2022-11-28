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
var AndroidpublisherEditsTracksPatchPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsTracksPatchPathParams, _super);
    function AndroidpublisherEditsTracksPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksPatchPathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksPatchPathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksPatchPathParams.prototype, "track", void 0);
    return AndroidpublisherEditsTracksPatchPathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsTracksPatchPathParams };
var AndroidpublisherEditsTracksPatchQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsTracksPatchQueryParams, _super);
    function AndroidpublisherEditsTracksPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsTracksPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksPatchQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherEditsTracksPatchQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsTracksPatchQueryParams };
var AndroidpublisherEditsTracksPatchSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsTracksPatchSecurity, _super);
    function AndroidpublisherEditsTracksPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsTracksPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsTracksPatchSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsTracksPatchSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsTracksPatchSecurity };
var AndroidpublisherEditsTracksPatchRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsTracksPatchRequest, _super);
    function AndroidpublisherEditsTracksPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsTracksPatchPathParams)
    ], AndroidpublisherEditsTracksPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsTracksPatchQueryParams)
    ], AndroidpublisherEditsTracksPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Track)
    ], AndroidpublisherEditsTracksPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsTracksPatchSecurity)
    ], AndroidpublisherEditsTracksPatchRequest.prototype, "security", void 0);
    return AndroidpublisherEditsTracksPatchRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsTracksPatchRequest };
var AndroidpublisherEditsTracksPatchResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsTracksPatchResponse, _super);
    function AndroidpublisherEditsTracksPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AndroidpublisherEditsTracksPatchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsTracksPatchResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsTracksPatchResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsTracksPatchResponse };
