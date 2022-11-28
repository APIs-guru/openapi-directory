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
var ProjectsListColumnsPathParams = /** @class */ (function (_super) {
    __extends(ProjectsListColumnsPathParams, _super);
    function ProjectsListColumnsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], ProjectsListColumnsPathParams.prototype, "projectId", void 0);
    return ProjectsListColumnsPathParams;
}(SpeakeasyBase));
export { ProjectsListColumnsPathParams };
var ProjectsListColumnsQueryParams = /** @class */ (function (_super) {
    __extends(ProjectsListColumnsQueryParams, _super);
    function ProjectsListColumnsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ProjectsListColumnsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ProjectsListColumnsQueryParams.prototype, "perPage", void 0);
    return ProjectsListColumnsQueryParams;
}(SpeakeasyBase));
export { ProjectsListColumnsQueryParams };
var ProjectsListColumnsRequest = /** @class */ (function (_super) {
    __extends(ProjectsListColumnsRequest, _super);
    function ProjectsListColumnsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsListColumnsPathParams)
    ], ProjectsListColumnsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsListColumnsQueryParams)
    ], ProjectsListColumnsRequest.prototype, "queryParams", void 0);
    return ProjectsListColumnsRequest;
}(SpeakeasyBase));
export { ProjectsListColumnsRequest };
var ProjectsListColumnsResponse = /** @class */ (function (_super) {
    __extends(ProjectsListColumnsResponse, _super);
    function ProjectsListColumnsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsListColumnsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProjectsListColumnsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsListColumnsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsListColumnsResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ProjectColumn }),
        __metadata("design:type", Array)
    ], ProjectsListColumnsResponse.prototype, "projectColumns", void 0);
    return ProjectsListColumnsResponse;
}(SpeakeasyBase));
export { ProjectsListColumnsResponse };
