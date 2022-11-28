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
var ApigeeregistryProjectsLocationsApisListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisListPathParams, _super);
    function ApigeeregistryProjectsLocationsApisListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListPathParams.prototype, "parent", void 0);
    return ApigeeregistryProjectsLocationsApisListPathParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisListPathParams };
var ApigeeregistryProjectsLocationsApisListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisListQueryParams, _super);
    function ApigeeregistryProjectsLocationsApisListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeregistryProjectsLocationsApisListQueryParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisListQueryParams };
var ApigeeregistryProjectsLocationsApisListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisListSecurity, _super);
    function ApigeeregistryProjectsLocationsApisListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeregistryProjectsLocationsApisListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeregistryProjectsLocationsApisListSecurity.prototype, "oauth2c", void 0);
    return ApigeeregistryProjectsLocationsApisListSecurity;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisListSecurity };
var ApigeeregistryProjectsLocationsApisListRequest = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisListRequest, _super);
    function ApigeeregistryProjectsLocationsApisListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisListPathParams)
    ], ApigeeregistryProjectsLocationsApisListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisListQueryParams)
    ], ApigeeregistryProjectsLocationsApisListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsApisListSecurity)
    ], ApigeeregistryProjectsLocationsApisListRequest.prototype, "security", void 0);
    return ApigeeregistryProjectsLocationsApisListRequest;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisListRequest };
var ApigeeregistryProjectsLocationsApisListResponse = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsApisListResponse, _super);
    function ApigeeregistryProjectsLocationsApisListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsApisListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListApisResponse)
    ], ApigeeregistryProjectsLocationsApisListResponse.prototype, "listApisResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsApisListResponse.prototype, "statusCode", void 0);
    return ApigeeregistryProjectsLocationsApisListResponse;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsApisListResponse };
