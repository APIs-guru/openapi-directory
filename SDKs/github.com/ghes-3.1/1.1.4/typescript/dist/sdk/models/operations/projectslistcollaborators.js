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
var ProjectsListCollaboratorsPathParams = /** @class */ (function (_super) {
    __extends(ProjectsListCollaboratorsPathParams, _super);
    function ProjectsListCollaboratorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], ProjectsListCollaboratorsPathParams.prototype, "projectId", void 0);
    return ProjectsListCollaboratorsPathParams;
}(SpeakeasyBase));
export { ProjectsListCollaboratorsPathParams };
export var ProjectsListCollaboratorsAffiliationEnum;
(function (ProjectsListCollaboratorsAffiliationEnum) {
    ProjectsListCollaboratorsAffiliationEnum["Outside"] = "outside";
    ProjectsListCollaboratorsAffiliationEnum["Direct"] = "direct";
    ProjectsListCollaboratorsAffiliationEnum["All"] = "all";
})(ProjectsListCollaboratorsAffiliationEnum || (ProjectsListCollaboratorsAffiliationEnum = {}));
var ProjectsListCollaboratorsQueryParams = /** @class */ (function (_super) {
    __extends(ProjectsListCollaboratorsQueryParams, _super);
    function ProjectsListCollaboratorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=affiliation" }),
        __metadata("design:type", String)
    ], ProjectsListCollaboratorsQueryParams.prototype, "affiliation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ProjectsListCollaboratorsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ProjectsListCollaboratorsQueryParams.prototype, "perPage", void 0);
    return ProjectsListCollaboratorsQueryParams;
}(SpeakeasyBase));
export { ProjectsListCollaboratorsQueryParams };
var ProjectsListCollaborators415ApplicationJson = /** @class */ (function (_super) {
    __extends(ProjectsListCollaborators415ApplicationJson, _super);
    function ProjectsListCollaborators415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ProjectsListCollaborators415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsListCollaborators415ApplicationJson.prototype, "message", void 0);
    return ProjectsListCollaborators415ApplicationJson;
}(SpeakeasyBase));
export { ProjectsListCollaborators415ApplicationJson };
var ProjectsListCollaboratorsRequest = /** @class */ (function (_super) {
    __extends(ProjectsListCollaboratorsRequest, _super);
    function ProjectsListCollaboratorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsListCollaboratorsPathParams)
    ], ProjectsListCollaboratorsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsListCollaboratorsQueryParams)
    ], ProjectsListCollaboratorsRequest.prototype, "queryParams", void 0);
    return ProjectsListCollaboratorsRequest;
}(SpeakeasyBase));
export { ProjectsListCollaboratorsRequest };
var ProjectsListCollaboratorsResponse = /** @class */ (function (_super) {
    __extends(ProjectsListCollaboratorsResponse, _super);
    function ProjectsListCollaboratorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsListCollaboratorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProjectsListCollaboratorsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsListCollaboratorsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsListCollaboratorsResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsListCollaborators415ApplicationJson)
    ], ProjectsListCollaboratorsResponse.prototype, "projectsListCollaborators415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SimpleUser }),
        __metadata("design:type", Array)
    ], ProjectsListCollaboratorsResponse.prototype, "simpleUsers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ProjectsListCollaboratorsResponse.prototype, "validationError", void 0);
    return ProjectsListCollaboratorsResponse;
}(SpeakeasyBase));
export { ProjectsListCollaboratorsResponse };
