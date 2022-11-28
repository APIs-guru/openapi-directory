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
export var GetJobsStateEnum;
(function (GetJobsStateEnum) {
    GetJobsStateEnum["Unknown"] = "";
    GetJobsStateEnum["Active"] = "active";
    GetJobsStateEnum["Completed"] = "completed";
    GetJobsStateEnum["Failed"] = "failed";
    GetJobsStateEnum["Waiting"] = "waiting";
    GetJobsStateEnum["Delayed"] = "delayed";
})(GetJobsStateEnum || (GetJobsStateEnum = {}));
var GetJobsPathParams = /** @class */ (function (_super) {
    __extends(GetJobsPathParams, _super);
    function GetJobsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=state" }),
        __metadata("design:type", String)
    ], GetJobsPathParams.prototype, "state", void 0);
    return GetJobsPathParams;
}(SpeakeasyBase));
export { GetJobsPathParams };
var GetJobsQueryParams = /** @class */ (function (_super) {
    __extends(GetJobsQueryParams, _super);
    function GetJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetJobsQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jobType" }),
        __metadata("design:type", String)
    ], GetJobsQueryParams.prototype, "jobType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetJobsQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetJobsQueryParams.prototype, "start", void 0);
    return GetJobsQueryParams;
}(SpeakeasyBase));
export { GetJobsQueryParams };
var GetJobsSecurity = /** @class */ (function (_super) {
    __extends(GetJobsSecurity, _super);
    function GetJobsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetJobsSecurity.prototype, "oAuth2", void 0);
    return GetJobsSecurity;
}(SpeakeasyBase));
export { GetJobsSecurity };
var GetJobs200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetJobs200ApplicationJson, _super);
    function GetJobs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetJobs200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetJobs200ApplicationJson.prototype, "total", void 0);
    return GetJobs200ApplicationJson;
}(SpeakeasyBase));
export { GetJobs200ApplicationJson };
var GetJobsRequest = /** @class */ (function (_super) {
    __extends(GetJobsRequest, _super);
    function GetJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJobsPathParams)
    ], GetJobsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJobsQueryParams)
    ], GetJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJobsSecurity)
    ], GetJobsRequest.prototype, "security", void 0);
    return GetJobsRequest;
}(SpeakeasyBase));
export { GetJobsRequest };
var GetJobsResponse = /** @class */ (function (_super) {
    __extends(GetJobsResponse, _super);
    function GetJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetJobsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetJobsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJobs200ApplicationJson)
    ], GetJobsResponse.prototype, "getJobs200ApplicationJsonObject", void 0);
    return GetJobsResponse;
}(SpeakeasyBase));
export { GetJobsResponse };
