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
var GetProjectMembershipsForProjectPathParams = /** @class */ (function (_super) {
    __extends(GetProjectMembershipsForProjectPathParams, _super);
    function GetProjectMembershipsForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], GetProjectMembershipsForProjectPathParams.prototype, "projectGid", void 0);
    return GetProjectMembershipsForProjectPathParams;
}(SpeakeasyBase));
export { GetProjectMembershipsForProjectPathParams };
var GetProjectMembershipsForProjectQueryParams = /** @class */ (function (_super) {
    __extends(GetProjectMembershipsForProjectQueryParams, _super);
    function GetProjectMembershipsForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetProjectMembershipsForProjectQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetProjectMembershipsForProjectQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetProjectMembershipsForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetProjectMembershipsForProjectQueryParams.prototype, "optPretty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", String)
    ], GetProjectMembershipsForProjectQueryParams.prototype, "user", void 0);
    return GetProjectMembershipsForProjectQueryParams;
}(SpeakeasyBase));
export { GetProjectMembershipsForProjectQueryParams };
var GetProjectMembershipsForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetProjectMembershipsForProject200ApplicationJson, _super);
    function GetProjectMembershipsForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ProjectMembershipCompact }),
        __metadata("design:type", Array)
    ], GetProjectMembershipsForProject200ApplicationJson.prototype, "data", void 0);
    return GetProjectMembershipsForProject200ApplicationJson;
}(SpeakeasyBase));
export { GetProjectMembershipsForProject200ApplicationJson };
var GetProjectMembershipsForProjectRequest = /** @class */ (function (_super) {
    __extends(GetProjectMembershipsForProjectRequest, _super);
    function GetProjectMembershipsForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectMembershipsForProjectPathParams)
    ], GetProjectMembershipsForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectMembershipsForProjectQueryParams)
    ], GetProjectMembershipsForProjectRequest.prototype, "queryParams", void 0);
    return GetProjectMembershipsForProjectRequest;
}(SpeakeasyBase));
export { GetProjectMembershipsForProjectRequest };
var GetProjectMembershipsForProjectResponse = /** @class */ (function (_super) {
    __extends(GetProjectMembershipsForProjectResponse, _super);
    function GetProjectMembershipsForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProjectMembershipsForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetProjectMembershipsForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProjectMembershipsForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectMembershipsForProject200ApplicationJson)
    ], GetProjectMembershipsForProjectResponse.prototype, "getProjectMembershipsForProject200ApplicationJsonObject", void 0);
    return GetProjectMembershipsForProjectResponse;
}(SpeakeasyBase));
export { GetProjectMembershipsForProjectResponse };
