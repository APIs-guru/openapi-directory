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
var AutomlProjectsLocationsModelsListPathParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsListPathParams, _super);
    function AutomlProjectsLocationsModelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListPathParams.prototype, "parent", void 0);
    return AutomlProjectsLocationsModelsListPathParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsListPathParams };
var AutomlProjectsLocationsModelsListQueryParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsListQueryParams, _super);
    function AutomlProjectsLocationsModelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListQueryParams.prototype, "uploadProtocol", void 0);
    return AutomlProjectsLocationsModelsListQueryParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsListQueryParams };
var AutomlProjectsLocationsModelsListSecurity = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsListSecurity, _super);
    function AutomlProjectsLocationsModelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AutomlProjectsLocationsModelsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AutomlProjectsLocationsModelsListSecurity.prototype, "oauth2c", void 0);
    return AutomlProjectsLocationsModelsListSecurity;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsListSecurity };
var AutomlProjectsLocationsModelsListRequest = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsListRequest, _super);
    function AutomlProjectsLocationsModelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsListPathParams)
    ], AutomlProjectsLocationsModelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsListQueryParams)
    ], AutomlProjectsLocationsModelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsListSecurity)
    ], AutomlProjectsLocationsModelsListRequest.prototype, "security", void 0);
    return AutomlProjectsLocationsModelsListRequest;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsListRequest };
var AutomlProjectsLocationsModelsListResponse = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsListResponse, _super);
    function AutomlProjectsLocationsModelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListModelsResponse)
    ], AutomlProjectsLocationsModelsListResponse.prototype, "listModelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutomlProjectsLocationsModelsListResponse.prototype, "statusCode", void 0);
    return AutomlProjectsLocationsModelsListResponse;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsListResponse };
