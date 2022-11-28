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
var AnalyticsadminPropertiesCustomMetricsArchivePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsArchivePathParams, _super);
    function AnalyticsadminPropertiesCustomMetricsArchivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchivePathParams.prototype, "name", void 0);
    return AnalyticsadminPropertiesCustomMetricsArchivePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomMetricsArchivePathParams };
var AnalyticsadminPropertiesCustomMetricsArchiveQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsArchiveQueryParams, _super);
    function AnalyticsadminPropertiesCustomMetricsArchiveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchiveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchiveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchiveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchiveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchiveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchiveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchiveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesCustomMetricsArchiveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchiveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchiveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchiveQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesCustomMetricsArchiveQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomMetricsArchiveQueryParams };
var AnalyticsadminPropertiesCustomMetricsArchiveSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsArchiveSecurity, _super);
    function AnalyticsadminPropertiesCustomMetricsArchiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesCustomMetricsArchiveSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesCustomMetricsArchiveSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesCustomMetricsArchiveSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomMetricsArchiveSecurity };
var AnalyticsadminPropertiesCustomMetricsArchiveRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsArchiveRequest, _super);
    function AnalyticsadminPropertiesCustomMetricsArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesCustomMetricsArchivePathParams)
    ], AnalyticsadminPropertiesCustomMetricsArchiveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesCustomMetricsArchiveQueryParams)
    ], AnalyticsadminPropertiesCustomMetricsArchiveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], AnalyticsadminPropertiesCustomMetricsArchiveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesCustomMetricsArchiveSecurity)
    ], AnalyticsadminPropertiesCustomMetricsArchiveRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesCustomMetricsArchiveRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomMetricsArchiveRequest };
var AnalyticsadminPropertiesCustomMetricsArchiveResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesCustomMetricsArchiveResponse, _super);
    function AnalyticsadminPropertiesCustomMetricsArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesCustomMetricsArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AnalyticsadminPropertiesCustomMetricsArchiveResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesCustomMetricsArchiveResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesCustomMetricsArchiveResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesCustomMetricsArchiveResponse };
