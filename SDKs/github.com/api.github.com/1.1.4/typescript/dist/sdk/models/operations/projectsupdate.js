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
var ProjectsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ProjectsUpdatePathParams, _super);
    function ProjectsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], ProjectsUpdatePathParams.prototype, "projectId", void 0);
    return ProjectsUpdatePathParams;
}(SpeakeasyBase));
export { ProjectsUpdatePathParams };
export var ProjectsUpdateRequestBodyOrganizationPermissionEnum;
(function (ProjectsUpdateRequestBodyOrganizationPermissionEnum) {
    ProjectsUpdateRequestBodyOrganizationPermissionEnum["Read"] = "read";
    ProjectsUpdateRequestBodyOrganizationPermissionEnum["Write"] = "write";
    ProjectsUpdateRequestBodyOrganizationPermissionEnum["Admin"] = "admin";
    ProjectsUpdateRequestBodyOrganizationPermissionEnum["None"] = "none";
})(ProjectsUpdateRequestBodyOrganizationPermissionEnum || (ProjectsUpdateRequestBodyOrganizationPermissionEnum = {}));
var ProjectsUpdateRequestBody = /** @class */ (function (_super) {
    __extends(ProjectsUpdateRequestBody, _super);
    function ProjectsUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ProjectsUpdateRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectsUpdateRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_permission" }),
        __metadata("design:type", String)
    ], ProjectsUpdateRequestBody.prototype, "organizationPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], ProjectsUpdateRequestBody.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ProjectsUpdateRequestBody.prototype, "state", void 0);
    return ProjectsUpdateRequestBody;
}(SpeakeasyBase));
export { ProjectsUpdateRequestBody };
var ProjectsUpdate403ApplicationJson = /** @class */ (function (_super) {
    __extends(ProjectsUpdate403ApplicationJson, _super);
    function ProjectsUpdate403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ProjectsUpdate403ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], ProjectsUpdate403ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsUpdate403ApplicationJson.prototype, "message", void 0);
    return ProjectsUpdate403ApplicationJson;
}(SpeakeasyBase));
export { ProjectsUpdate403ApplicationJson };
var ProjectsUpdateRequest = /** @class */ (function (_super) {
    __extends(ProjectsUpdateRequest, _super);
    function ProjectsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsUpdatePathParams)
    ], ProjectsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ProjectsUpdateRequestBody)
    ], ProjectsUpdateRequest.prototype, "request", void 0);
    return ProjectsUpdateRequest;
}(SpeakeasyBase));
export { ProjectsUpdateRequest };
var ProjectsUpdateResponse = /** @class */ (function (_super) {
    __extends(ProjectsUpdateResponse, _super);
    function ProjectsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsUpdateResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Project)
    ], ProjectsUpdateResponse.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsUpdate403ApplicationJson)
    ], ProjectsUpdateResponse.prototype, "projectsUpdate403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], ProjectsUpdateResponse.prototype, "validationErrorSimple", void 0);
    return ProjectsUpdateResponse;
}(SpeakeasyBase));
export { ProjectsUpdateResponse };
