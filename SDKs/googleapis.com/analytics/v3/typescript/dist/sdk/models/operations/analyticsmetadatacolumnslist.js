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
var AnalyticsMetadataColumnsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListPathParams, _super);
    function AnalyticsMetadataColumnsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportType" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListPathParams.prototype, "reportType", void 0);
    return AnalyticsMetadataColumnsListPathParams;
}(SpeakeasyBase));
export { AnalyticsMetadataColumnsListPathParams };
var AnalyticsMetadataColumnsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListQueryParams, _super);
    function AnalyticsMetadataColumnsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListQueryParams.prototype, "userIp", void 0);
    return AnalyticsMetadataColumnsListQueryParams;
}(SpeakeasyBase));
export { AnalyticsMetadataColumnsListQueryParams };
var AnalyticsMetadataColumnsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListSecurityOption1, _super);
    function AnalyticsMetadataColumnsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsMetadataColumnsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsMetadataColumnsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsMetadataColumnsListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsMetadataColumnsListSecurityOption1 };
var AnalyticsMetadataColumnsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListSecurityOption2, _super);
    function AnalyticsMetadataColumnsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsMetadataColumnsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsMetadataColumnsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsMetadataColumnsListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsMetadataColumnsListSecurityOption2 };
var AnalyticsMetadataColumnsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListSecurityOption3, _super);
    function AnalyticsMetadataColumnsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsMetadataColumnsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsMetadataColumnsListSecurityOption3.prototype, "oauth2c", void 0);
    return AnalyticsMetadataColumnsListSecurityOption3;
}(SpeakeasyBase));
export { AnalyticsMetadataColumnsListSecurityOption3 };
var AnalyticsMetadataColumnsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListSecurity, _super);
    function AnalyticsMetadataColumnsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsMetadataColumnsListSecurityOption1)
    ], AnalyticsMetadataColumnsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsMetadataColumnsListSecurityOption2)
    ], AnalyticsMetadataColumnsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsMetadataColumnsListSecurityOption3)
    ], AnalyticsMetadataColumnsListSecurity.prototype, "option3", void 0);
    return AnalyticsMetadataColumnsListSecurity;
}(SpeakeasyBase));
export { AnalyticsMetadataColumnsListSecurity };
var AnalyticsMetadataColumnsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListRequest, _super);
    function AnalyticsMetadataColumnsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsMetadataColumnsListPathParams)
    ], AnalyticsMetadataColumnsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsMetadataColumnsListQueryParams)
    ], AnalyticsMetadataColumnsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsMetadataColumnsListSecurity)
    ], AnalyticsMetadataColumnsListRequest.prototype, "security", void 0);
    return AnalyticsMetadataColumnsListRequest;
}(SpeakeasyBase));
export { AnalyticsMetadataColumnsListRequest };
var AnalyticsMetadataColumnsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsMetadataColumnsListResponse, _super);
    function AnalyticsMetadataColumnsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Columns)
    ], AnalyticsMetadataColumnsListResponse.prototype, "columns", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsMetadataColumnsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsMetadataColumnsListResponse.prototype, "statusCode", void 0);
    return AnalyticsMetadataColumnsListResponse;
}(SpeakeasyBase));
export { AnalyticsMetadataColumnsListResponse };
