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
var BigqueryJobsListPathParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsListPathParams, _super);
    function BigqueryJobsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], BigqueryJobsListPathParams.prototype, "projectId", void 0);
    return BigqueryJobsListPathParams;
}(SpeakeasyBase));
export { BigqueryJobsListPathParams };
export var BigqueryJobsListProjectionEnum;
(function (BigqueryJobsListProjectionEnum) {
    BigqueryJobsListProjectionEnum["Full"] = "full";
    BigqueryJobsListProjectionEnum["Minimal"] = "minimal";
})(BigqueryJobsListProjectionEnum || (BigqueryJobsListProjectionEnum = {}));
export var BigqueryJobsListStateFilterEnum;
(function (BigqueryJobsListStateFilterEnum) {
    BigqueryJobsListStateFilterEnum["Done"] = "done";
    BigqueryJobsListStateFilterEnum["Pending"] = "pending";
    BigqueryJobsListStateFilterEnum["Running"] = "running";
})(BigqueryJobsListStateFilterEnum || (BigqueryJobsListStateFilterEnum = {}));
var BigqueryJobsListQueryParams = /** @class */ (function (_super) {
    __extends(BigqueryJobsListQueryParams, _super);
    function BigqueryJobsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allUsers" }),
        __metadata("design:type", Boolean)
    ], BigqueryJobsListQueryParams.prototype, "allUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigqueryJobsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigqueryJobsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigqueryJobsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxCreationTime" }),
        __metadata("design:type", String)
    ], BigqueryJobsListQueryParams.prototype, "maxCreationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BigqueryJobsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCreationTime" }),
        __metadata("design:type", String)
    ], BigqueryJobsListQueryParams.prototype, "minCreationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigqueryJobsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigqueryJobsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentJobId" }),
        __metadata("design:type", String)
    ], BigqueryJobsListQueryParams.prototype, "parentJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigqueryJobsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], BigqueryJobsListQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigqueryJobsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stateFilter" }),
        __metadata("design:type", Array)
    ], BigqueryJobsListQueryParams.prototype, "stateFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], BigqueryJobsListQueryParams.prototype, "userIp", void 0);
    return BigqueryJobsListQueryParams;
}(SpeakeasyBase));
export { BigqueryJobsListQueryParams };
var BigqueryJobsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigqueryJobsListSecurityOption1, _super);
    function BigqueryJobsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigqueryJobsListSecurityOption1;
}(SpeakeasyBase));
export { BigqueryJobsListSecurityOption1 };
var BigqueryJobsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigqueryJobsListSecurityOption2, _super);
    function BigqueryJobsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigqueryJobsListSecurityOption2;
}(SpeakeasyBase));
export { BigqueryJobsListSecurityOption2 };
var BigqueryJobsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigqueryJobsListSecurityOption3, _super);
    function BigqueryJobsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigqueryJobsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigqueryJobsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigqueryJobsListSecurityOption3;
}(SpeakeasyBase));
export { BigqueryJobsListSecurityOption3 };
var BigqueryJobsListSecurity = /** @class */ (function (_super) {
    __extends(BigqueryJobsListSecurity, _super);
    function BigqueryJobsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsListSecurityOption1)
    ], BigqueryJobsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsListSecurityOption2)
    ], BigqueryJobsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigqueryJobsListSecurityOption3)
    ], BigqueryJobsListSecurity.prototype, "option3", void 0);
    return BigqueryJobsListSecurity;
}(SpeakeasyBase));
export { BigqueryJobsListSecurity };
var BigqueryJobsListRequest = /** @class */ (function (_super) {
    __extends(BigqueryJobsListRequest, _super);
    function BigqueryJobsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsListPathParams)
    ], BigqueryJobsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsListQueryParams)
    ], BigqueryJobsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigqueryJobsListSecurity)
    ], BigqueryJobsListRequest.prototype, "security", void 0);
    return BigqueryJobsListRequest;
}(SpeakeasyBase));
export { BigqueryJobsListRequest };
var BigqueryJobsListResponse = /** @class */ (function (_super) {
    __extends(BigqueryJobsListResponse, _super);
    function BigqueryJobsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigqueryJobsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.JobList)
    ], BigqueryJobsListResponse.prototype, "jobList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigqueryJobsListResponse.prototype, "statusCode", void 0);
    return BigqueryJobsListResponse;
}(SpeakeasyBase));
export { BigqueryJobsListResponse };
