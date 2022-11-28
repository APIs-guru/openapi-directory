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
var AutomlProjectsLocationsModelsModelEvaluationsListPathParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsModelEvaluationsListPathParams, _super);
    function AutomlProjectsLocationsModelsModelEvaluationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListPathParams.prototype, "parent", void 0);
    return AutomlProjectsLocationsModelsModelEvaluationsListPathParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsModelEvaluationsListPathParams };
var AutomlProjectsLocationsModelsModelEvaluationsListQueryParams = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsModelEvaluationsListQueryParams, _super);
    function AutomlProjectsLocationsModelsModelEvaluationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListQueryParams.prototype, "uploadProtocol", void 0);
    return AutomlProjectsLocationsModelsModelEvaluationsListQueryParams;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsModelEvaluationsListQueryParams };
var AutomlProjectsLocationsModelsModelEvaluationsListSecurity = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsModelEvaluationsListSecurity, _super);
    function AutomlProjectsLocationsModelsModelEvaluationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AutomlProjectsLocationsModelsModelEvaluationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AutomlProjectsLocationsModelsModelEvaluationsListSecurity.prototype, "oauth2c", void 0);
    return AutomlProjectsLocationsModelsModelEvaluationsListSecurity;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsModelEvaluationsListSecurity };
var AutomlProjectsLocationsModelsModelEvaluationsListRequest = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsModelEvaluationsListRequest, _super);
    function AutomlProjectsLocationsModelsModelEvaluationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsModelEvaluationsListPathParams)
    ], AutomlProjectsLocationsModelsModelEvaluationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsModelEvaluationsListQueryParams)
    ], AutomlProjectsLocationsModelsModelEvaluationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AutomlProjectsLocationsModelsModelEvaluationsListSecurity)
    ], AutomlProjectsLocationsModelsModelEvaluationsListRequest.prototype, "security", void 0);
    return AutomlProjectsLocationsModelsModelEvaluationsListRequest;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsModelEvaluationsListRequest };
var AutomlProjectsLocationsModelsModelEvaluationsListResponse = /** @class */ (function (_super) {
    __extends(AutomlProjectsLocationsModelsModelEvaluationsListResponse, _super);
    function AutomlProjectsLocationsModelsModelEvaluationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AutomlProjectsLocationsModelsModelEvaluationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListModelEvaluationsResponse)
    ], AutomlProjectsLocationsModelsModelEvaluationsListResponse.prototype, "listModelEvaluationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AutomlProjectsLocationsModelsModelEvaluationsListResponse.prototype, "statusCode", void 0);
    return AutomlProjectsLocationsModelsModelEvaluationsListResponse;
}(SpeakeasyBase));
export { AutomlProjectsLocationsModelsModelEvaluationsListResponse };
