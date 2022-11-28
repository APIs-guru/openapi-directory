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
var AndroidpublisherEditsTracksListPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsTracksListPathParams, _super);
    function AndroidpublisherEditsTracksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksListPathParams.prototype, "editId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksListPathParams.prototype, "packageName", void 0);
    return AndroidpublisherEditsTracksListPathParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsTracksListPathParams };
var AndroidpublisherEditsTracksListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsTracksListQueryParams, _super);
    function AndroidpublisherEditsTracksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherEditsTracksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksListQueryParams.prototype, "userIp", void 0);
    return AndroidpublisherEditsTracksListQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherEditsTracksListQueryParams };
var AndroidpublisherEditsTracksListSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsTracksListSecurity, _super);
    function AndroidpublisherEditsTracksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherEditsTracksListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherEditsTracksListSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherEditsTracksListSecurity;
}(SpeakeasyBase));
export { AndroidpublisherEditsTracksListSecurity };
var AndroidpublisherEditsTracksListRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsTracksListRequest, _super);
    function AndroidpublisherEditsTracksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsTracksListPathParams)
    ], AndroidpublisherEditsTracksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsTracksListQueryParams)
    ], AndroidpublisherEditsTracksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherEditsTracksListSecurity)
    ], AndroidpublisherEditsTracksListRequest.prototype, "security", void 0);
    return AndroidpublisherEditsTracksListRequest;
}(SpeakeasyBase));
export { AndroidpublisherEditsTracksListRequest };
var AndroidpublisherEditsTracksListResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherEditsTracksListResponse, _super);
    function AndroidpublisherEditsTracksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AndroidpublisherEditsTracksListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherEditsTracksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherEditsTracksListResponse.prototype, "statusCode", void 0);
    return AndroidpublisherEditsTracksListResponse;
}(SpeakeasyBase));
export { AndroidpublisherEditsTracksListResponse };
