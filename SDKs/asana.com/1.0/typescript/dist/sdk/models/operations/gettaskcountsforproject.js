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
var GetTaskCountsForProjectPathParams = /** @class */ (function (_super) {
    __extends(GetTaskCountsForProjectPathParams, _super);
    function GetTaskCountsForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], GetTaskCountsForProjectPathParams.prototype, "projectGid", void 0);
    return GetTaskCountsForProjectPathParams;
}(SpeakeasyBase));
export { GetTaskCountsForProjectPathParams };
var GetTaskCountsForProjectQueryParams = /** @class */ (function (_super) {
    __extends(GetTaskCountsForProjectQueryParams, _super);
    function GetTaskCountsForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTaskCountsForProjectQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTaskCountsForProjectQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetTaskCountsForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetTaskCountsForProjectQueryParams.prototype, "optPretty", void 0);
    return GetTaskCountsForProjectQueryParams;
}(SpeakeasyBase));
export { GetTaskCountsForProjectQueryParams };
var GetTaskCountsForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTaskCountsForProject200ApplicationJson, _super);
    function GetTaskCountsForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TaskCountResponse)
    ], GetTaskCountsForProject200ApplicationJson.prototype, "data", void 0);
    return GetTaskCountsForProject200ApplicationJson;
}(SpeakeasyBase));
export { GetTaskCountsForProject200ApplicationJson };
var GetTaskCountsForProjectRequest = /** @class */ (function (_super) {
    __extends(GetTaskCountsForProjectRequest, _super);
    function GetTaskCountsForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaskCountsForProjectPathParams)
    ], GetTaskCountsForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaskCountsForProjectQueryParams)
    ], GetTaskCountsForProjectRequest.prototype, "queryParams", void 0);
    return GetTaskCountsForProjectRequest;
}(SpeakeasyBase));
export { GetTaskCountsForProjectRequest };
var GetTaskCountsForProjectResponse = /** @class */ (function (_super) {
    __extends(GetTaskCountsForProjectResponse, _super);
    function GetTaskCountsForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTaskCountsForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetTaskCountsForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTaskCountsForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaskCountsForProject200ApplicationJson)
    ], GetTaskCountsForProjectResponse.prototype, "getTaskCountsForProject200ApplicationJsonObject", void 0);
    return GetTaskCountsForProjectResponse;
}(SpeakeasyBase));
export { GetTaskCountsForProjectResponse };
