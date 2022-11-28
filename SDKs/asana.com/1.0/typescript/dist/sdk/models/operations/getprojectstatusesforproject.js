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
var GetProjectStatusesForProjectPathParams = /** @class */ (function (_super) {
    __extends(GetProjectStatusesForProjectPathParams, _super);
    function GetProjectStatusesForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], GetProjectStatusesForProjectPathParams.prototype, "projectGid", void 0);
    return GetProjectStatusesForProjectPathParams;
}(SpeakeasyBase));
export { GetProjectStatusesForProjectPathParams };
var GetProjectStatusesForProjectQueryParams = /** @class */ (function (_super) {
    __extends(GetProjectStatusesForProjectQueryParams, _super);
    function GetProjectStatusesForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetProjectStatusesForProjectQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetProjectStatusesForProjectQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetProjectStatusesForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetProjectStatusesForProjectQueryParams.prototype, "optPretty", void 0);
    return GetProjectStatusesForProjectQueryParams;
}(SpeakeasyBase));
export { GetProjectStatusesForProjectQueryParams };
var GetProjectStatusesForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetProjectStatusesForProject200ApplicationJson, _super);
    function GetProjectStatusesForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ProjectStatusCompact }),
        __metadata("design:type", Array)
    ], GetProjectStatusesForProject200ApplicationJson.prototype, "data", void 0);
    return GetProjectStatusesForProject200ApplicationJson;
}(SpeakeasyBase));
export { GetProjectStatusesForProject200ApplicationJson };
var GetProjectStatusesForProjectRequest = /** @class */ (function (_super) {
    __extends(GetProjectStatusesForProjectRequest, _super);
    function GetProjectStatusesForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectStatusesForProjectPathParams)
    ], GetProjectStatusesForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectStatusesForProjectQueryParams)
    ], GetProjectStatusesForProjectRequest.prototype, "queryParams", void 0);
    return GetProjectStatusesForProjectRequest;
}(SpeakeasyBase));
export { GetProjectStatusesForProjectRequest };
var GetProjectStatusesForProjectResponse = /** @class */ (function (_super) {
    __extends(GetProjectStatusesForProjectResponse, _super);
    function GetProjectStatusesForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProjectStatusesForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetProjectStatusesForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProjectStatusesForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectStatusesForProject200ApplicationJson)
    ], GetProjectStatusesForProjectResponse.prototype, "getProjectStatusesForProject200ApplicationJsonObject", void 0);
    return GetProjectStatusesForProjectResponse;
}(SpeakeasyBase));
export { GetProjectStatusesForProjectResponse };
