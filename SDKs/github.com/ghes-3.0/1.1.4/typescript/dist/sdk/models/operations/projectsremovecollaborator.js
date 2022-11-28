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
var ProjectsRemoveCollaboratorPathParams = /** @class */ (function (_super) {
    __extends(ProjectsRemoveCollaboratorPathParams, _super);
    function ProjectsRemoveCollaboratorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], ProjectsRemoveCollaboratorPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], ProjectsRemoveCollaboratorPathParams.prototype, "username", void 0);
    return ProjectsRemoveCollaboratorPathParams;
}(SpeakeasyBase));
export { ProjectsRemoveCollaboratorPathParams };
var ProjectsRemoveCollaborator415ApplicationJson = /** @class */ (function (_super) {
    __extends(ProjectsRemoveCollaborator415ApplicationJson, _super);
    function ProjectsRemoveCollaborator415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ProjectsRemoveCollaborator415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsRemoveCollaborator415ApplicationJson.prototype, "message", void 0);
    return ProjectsRemoveCollaborator415ApplicationJson;
}(SpeakeasyBase));
export { ProjectsRemoveCollaborator415ApplicationJson };
var ProjectsRemoveCollaboratorRequest = /** @class */ (function (_super) {
    __extends(ProjectsRemoveCollaboratorRequest, _super);
    function ProjectsRemoveCollaboratorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsRemoveCollaboratorPathParams)
    ], ProjectsRemoveCollaboratorRequest.prototype, "pathParams", void 0);
    return ProjectsRemoveCollaboratorRequest;
}(SpeakeasyBase));
export { ProjectsRemoveCollaboratorRequest };
var ProjectsRemoveCollaboratorResponse = /** @class */ (function (_super) {
    __extends(ProjectsRemoveCollaboratorResponse, _super);
    function ProjectsRemoveCollaboratorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsRemoveCollaboratorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsRemoveCollaboratorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsRemoveCollaboratorResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsRemoveCollaborator415ApplicationJson)
    ], ProjectsRemoveCollaboratorResponse.prototype, "projectsRemoveCollaborator415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ProjectsRemoveCollaboratorResponse.prototype, "validationError", void 0);
    return ProjectsRemoveCollaboratorResponse;
}(SpeakeasyBase));
export { ProjectsRemoveCollaboratorResponse };
