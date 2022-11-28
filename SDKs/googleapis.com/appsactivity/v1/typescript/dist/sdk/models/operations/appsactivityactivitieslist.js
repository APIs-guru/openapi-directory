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
export var AppsactivityActivitiesListGroupingStrategyEnum;
(function (AppsactivityActivitiesListGroupingStrategyEnum) {
    AppsactivityActivitiesListGroupingStrategyEnum["DriveUi"] = "driveUi";
    AppsactivityActivitiesListGroupingStrategyEnum["None"] = "none";
})(AppsactivityActivitiesListGroupingStrategyEnum || (AppsactivityActivitiesListGroupingStrategyEnum = {}));
var AppsactivityActivitiesListQueryParams = /** @class */ (function (_super) {
    __extends(AppsactivityActivitiesListQueryParams, _super);
    function AppsactivityActivitiesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drive.ancestorId" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "driveAncestorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=drive.fileId" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "driveFileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupingStrategy" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "groupingStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AppsactivityActivitiesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AppsactivityActivitiesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListQueryParams.prototype, "userIp", void 0);
    return AppsactivityActivitiesListQueryParams;
}(SpeakeasyBase));
export { AppsactivityActivitiesListQueryParams };
var AppsactivityActivitiesListSecurity = /** @class */ (function (_super) {
    __extends(AppsactivityActivitiesListSecurity, _super);
    function AppsactivityActivitiesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AppsactivityActivitiesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AppsactivityActivitiesListSecurity.prototype, "oauth2c", void 0);
    return AppsactivityActivitiesListSecurity;
}(SpeakeasyBase));
export { AppsactivityActivitiesListSecurity };
var AppsactivityActivitiesListRequest = /** @class */ (function (_super) {
    __extends(AppsactivityActivitiesListRequest, _super);
    function AppsactivityActivitiesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsactivityActivitiesListQueryParams)
    ], AppsactivityActivitiesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppsactivityActivitiesListSecurity)
    ], AppsactivityActivitiesListRequest.prototype, "security", void 0);
    return AppsactivityActivitiesListRequest;
}(SpeakeasyBase));
export { AppsactivityActivitiesListRequest };
var AppsactivityActivitiesListResponse = /** @class */ (function (_super) {
    __extends(AppsactivityActivitiesListResponse, _super);
    function AppsactivityActivitiesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppsactivityActivitiesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListActivitiesResponse)
    ], AppsactivityActivitiesListResponse.prototype, "listActivitiesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppsactivityActivitiesListResponse.prototype, "statusCode", void 0);
    return AppsactivityActivitiesListResponse;
}(SpeakeasyBase));
export { AppsactivityActivitiesListResponse };
