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
var GetTasksForProjectPathParams = /** @class */ (function (_super) {
    __extends(GetTasksForProjectPathParams, _super);
    function GetTasksForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], GetTasksForProjectPathParams.prototype, "projectGid", void 0);
    return GetTasksForProjectPathParams;
}(SpeakeasyBase));
export { GetTasksForProjectPathParams };
var GetTasksForProjectQueryParams = /** @class */ (function (_super) {
    __extends(GetTasksForProjectQueryParams, _super);
    function GetTasksForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTasksForProjectQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTasksForProjectQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetTasksForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetTasksForProjectQueryParams.prototype, "optPretty", void 0);
    return GetTasksForProjectQueryParams;
}(SpeakeasyBase));
export { GetTasksForProjectQueryParams };
var GetTasksForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTasksForProject200ApplicationJson, _super);
    function GetTasksForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TaskCompact }),
        __metadata("design:type", Array)
    ], GetTasksForProject200ApplicationJson.prototype, "data", void 0);
    return GetTasksForProject200ApplicationJson;
}(SpeakeasyBase));
export { GetTasksForProject200ApplicationJson };
var GetTasksForProjectRequest = /** @class */ (function (_super) {
    __extends(GetTasksForProjectRequest, _super);
    function GetTasksForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTasksForProjectPathParams)
    ], GetTasksForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTasksForProjectQueryParams)
    ], GetTasksForProjectRequest.prototype, "queryParams", void 0);
    return GetTasksForProjectRequest;
}(SpeakeasyBase));
export { GetTasksForProjectRequest };
var GetTasksForProjectResponse = /** @class */ (function (_super) {
    __extends(GetTasksForProjectResponse, _super);
    function GetTasksForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTasksForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetTasksForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTasksForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTasksForProject200ApplicationJson)
    ], GetTasksForProjectResponse.prototype, "getTasksForProject200ApplicationJsonObject", void 0);
    return GetTasksForProjectResponse;
}(SpeakeasyBase));
export { GetTasksForProjectResponse };
