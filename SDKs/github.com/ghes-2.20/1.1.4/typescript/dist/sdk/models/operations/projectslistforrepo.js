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
var ProjectsListForRepoPathParams = /** @class */ (function (_super) {
    __extends(ProjectsListForRepoPathParams, _super);
    function ProjectsListForRepoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ProjectsListForRepoPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ProjectsListForRepoPathParams.prototype, "repo", void 0);
    return ProjectsListForRepoPathParams;
}(SpeakeasyBase));
export { ProjectsListForRepoPathParams };
export var ProjectsListForRepoStateEnum;
(function (ProjectsListForRepoStateEnum) {
    ProjectsListForRepoStateEnum["Open"] = "open";
    ProjectsListForRepoStateEnum["Closed"] = "closed";
    ProjectsListForRepoStateEnum["All"] = "all";
})(ProjectsListForRepoStateEnum || (ProjectsListForRepoStateEnum = {}));
var ProjectsListForRepoQueryParams = /** @class */ (function (_super) {
    __extends(ProjectsListForRepoQueryParams, _super);
    function ProjectsListForRepoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ProjectsListForRepoQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ProjectsListForRepoQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], ProjectsListForRepoQueryParams.prototype, "state", void 0);
    return ProjectsListForRepoQueryParams;
}(SpeakeasyBase));
export { ProjectsListForRepoQueryParams };
var ProjectsListForRepoRequest = /** @class */ (function (_super) {
    __extends(ProjectsListForRepoRequest, _super);
    function ProjectsListForRepoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsListForRepoPathParams)
    ], ProjectsListForRepoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsListForRepoQueryParams)
    ], ProjectsListForRepoRequest.prototype, "queryParams", void 0);
    return ProjectsListForRepoRequest;
}(SpeakeasyBase));
export { ProjectsListForRepoRequest };
var ProjectsListForRepoResponse = /** @class */ (function (_super) {
    __extends(ProjectsListForRepoResponse, _super);
    function ProjectsListForRepoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsListForRepoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProjectsListForRepoResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsListForRepoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsListForRepoResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Project }),
        __metadata("design:type", Array)
    ], ProjectsListForRepoResponse.prototype, "projects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], ProjectsListForRepoResponse.prototype, "validationErrorSimple", void 0);
    return ProjectsListForRepoResponse;
}(SpeakeasyBase));
export { ProjectsListForRepoResponse };
