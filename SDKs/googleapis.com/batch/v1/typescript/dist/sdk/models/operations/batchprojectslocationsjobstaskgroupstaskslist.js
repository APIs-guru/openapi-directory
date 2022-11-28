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
var BatchProjectsLocationsJobsTaskGroupsTasksListPathParams = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsJobsTaskGroupsTasksListPathParams, _super);
    function BatchProjectsLocationsJobsTaskGroupsTasksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListPathParams.prototype, "parent", void 0);
    return BatchProjectsLocationsJobsTaskGroupsTasksListPathParams;
}(SpeakeasyBase));
export { BatchProjectsLocationsJobsTaskGroupsTasksListPathParams };
var BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams, _super);
    function BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams.prototype, "uploadProtocol", void 0);
    return BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams;
}(SpeakeasyBase));
export { BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams };
var BatchProjectsLocationsJobsTaskGroupsTasksListSecurity = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsJobsTaskGroupsTasksListSecurity, _super);
    function BatchProjectsLocationsJobsTaskGroupsTasksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListSecurity.prototype, "oauth2c", void 0);
    return BatchProjectsLocationsJobsTaskGroupsTasksListSecurity;
}(SpeakeasyBase));
export { BatchProjectsLocationsJobsTaskGroupsTasksListSecurity };
var BatchProjectsLocationsJobsTaskGroupsTasksListRequest = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsJobsTaskGroupsTasksListRequest, _super);
    function BatchProjectsLocationsJobsTaskGroupsTasksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchProjectsLocationsJobsTaskGroupsTasksListPathParams)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchProjectsLocationsJobsTaskGroupsTasksListQueryParams)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchProjectsLocationsJobsTaskGroupsTasksListSecurity)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListRequest.prototype, "security", void 0);
    return BatchProjectsLocationsJobsTaskGroupsTasksListRequest;
}(SpeakeasyBase));
export { BatchProjectsLocationsJobsTaskGroupsTasksListRequest };
var BatchProjectsLocationsJobsTaskGroupsTasksListResponse = /** @class */ (function (_super) {
    __extends(BatchProjectsLocationsJobsTaskGroupsTasksListResponse, _super);
    function BatchProjectsLocationsJobsTaskGroupsTasksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTasksResponse)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListResponse.prototype, "listTasksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchProjectsLocationsJobsTaskGroupsTasksListResponse.prototype, "statusCode", void 0);
    return BatchProjectsLocationsJobsTaskGroupsTasksListResponse;
}(SpeakeasyBase));
export { BatchProjectsLocationsJobsTaskGroupsTasksListResponse };
