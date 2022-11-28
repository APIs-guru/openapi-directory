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
var AnalyticsManagementSegmentsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementSegmentsListQueryParams, _super);
    function AnalyticsManagementSegmentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementSegmentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementSegmentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementSegmentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementSegmentsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementSegmentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementSegmentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementSegmentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementSegmentsListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementSegmentsListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementSegmentsListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementSegmentsListQueryParams };
var AnalyticsManagementSegmentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementSegmentsListSecurityOption1, _super);
    function AnalyticsManagementSegmentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementSegmentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementSegmentsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementSegmentsListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementSegmentsListSecurityOption1 };
var AnalyticsManagementSegmentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementSegmentsListSecurityOption2, _super);
    function AnalyticsManagementSegmentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementSegmentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementSegmentsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementSegmentsListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementSegmentsListSecurityOption2 };
var AnalyticsManagementSegmentsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementSegmentsListSecurityOption3, _super);
    function AnalyticsManagementSegmentsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementSegmentsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementSegmentsListSecurityOption3.prototype, "oauth2c", void 0);
    return AnalyticsManagementSegmentsListSecurityOption3;
}(SpeakeasyBase));
export { AnalyticsManagementSegmentsListSecurityOption3 };
var AnalyticsManagementSegmentsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementSegmentsListSecurity, _super);
    function AnalyticsManagementSegmentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementSegmentsListSecurityOption1)
    ], AnalyticsManagementSegmentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementSegmentsListSecurityOption2)
    ], AnalyticsManagementSegmentsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementSegmentsListSecurityOption3)
    ], AnalyticsManagementSegmentsListSecurity.prototype, "option3", void 0);
    return AnalyticsManagementSegmentsListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementSegmentsListSecurity };
var AnalyticsManagementSegmentsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementSegmentsListRequest, _super);
    function AnalyticsManagementSegmentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementSegmentsListQueryParams)
    ], AnalyticsManagementSegmentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementSegmentsListSecurity)
    ], AnalyticsManagementSegmentsListRequest.prototype, "security", void 0);
    return AnalyticsManagementSegmentsListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementSegmentsListRequest };
var AnalyticsManagementSegmentsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementSegmentsListResponse, _super);
    function AnalyticsManagementSegmentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementSegmentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Segments)
    ], AnalyticsManagementSegmentsListResponse.prototype, "segments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementSegmentsListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementSegmentsListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementSegmentsListResponse };
