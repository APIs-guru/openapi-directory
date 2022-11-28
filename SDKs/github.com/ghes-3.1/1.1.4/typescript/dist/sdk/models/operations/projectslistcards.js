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
var ProjectsListCardsPathParams = /** @class */ (function (_super) {
    __extends(ProjectsListCardsPathParams, _super);
    function ProjectsListCardsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_id" }),
        __metadata("design:type", Number)
    ], ProjectsListCardsPathParams.prototype, "columnId", void 0);
    return ProjectsListCardsPathParams;
}(SpeakeasyBase));
export { ProjectsListCardsPathParams };
export var ProjectsListCardsArchivedStateEnum;
(function (ProjectsListCardsArchivedStateEnum) {
    ProjectsListCardsArchivedStateEnum["All"] = "all";
    ProjectsListCardsArchivedStateEnum["Archived"] = "archived";
    ProjectsListCardsArchivedStateEnum["NotArchived"] = "not_archived";
})(ProjectsListCardsArchivedStateEnum || (ProjectsListCardsArchivedStateEnum = {}));
var ProjectsListCardsQueryParams = /** @class */ (function (_super) {
    __extends(ProjectsListCardsQueryParams, _super);
    function ProjectsListCardsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived_state" }),
        __metadata("design:type", String)
    ], ProjectsListCardsQueryParams.prototype, "archivedState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ProjectsListCardsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ProjectsListCardsQueryParams.prototype, "perPage", void 0);
    return ProjectsListCardsQueryParams;
}(SpeakeasyBase));
export { ProjectsListCardsQueryParams };
var ProjectsListCardsRequest = /** @class */ (function (_super) {
    __extends(ProjectsListCardsRequest, _super);
    function ProjectsListCardsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsListCardsPathParams)
    ], ProjectsListCardsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsListCardsQueryParams)
    ], ProjectsListCardsRequest.prototype, "queryParams", void 0);
    return ProjectsListCardsRequest;
}(SpeakeasyBase));
export { ProjectsListCardsRequest };
var ProjectsListCardsResponse = /** @class */ (function (_super) {
    __extends(ProjectsListCardsResponse, _super);
    function ProjectsListCardsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsListCardsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProjectsListCardsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsListCardsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsListCardsResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ProjectCard }),
        __metadata("design:type", Array)
    ], ProjectsListCardsResponse.prototype, "projectCards", void 0);
    return ProjectsListCardsResponse;
}(SpeakeasyBase));
export { ProjectsListCardsResponse };
