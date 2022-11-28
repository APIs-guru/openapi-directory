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
var ProjectsCreateForRepoPathParams = /** @class */ (function (_super) {
    __extends(ProjectsCreateForRepoPathParams, _super);
    function ProjectsCreateForRepoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ProjectsCreateForRepoPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ProjectsCreateForRepoPathParams.prototype, "repo", void 0);
    return ProjectsCreateForRepoPathParams;
}(SpeakeasyBase));
export { ProjectsCreateForRepoPathParams };
var ProjectsCreateForRepoRequestBody = /** @class */ (function (_super) {
    __extends(ProjectsCreateForRepoRequestBody, _super);
    function ProjectsCreateForRepoRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ProjectsCreateForRepoRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectsCreateForRepoRequestBody.prototype, "name", void 0);
    return ProjectsCreateForRepoRequestBody;
}(SpeakeasyBase));
export { ProjectsCreateForRepoRequestBody };
var ProjectsCreateForRepoRequest = /** @class */ (function (_super) {
    __extends(ProjectsCreateForRepoRequest, _super);
    function ProjectsCreateForRepoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsCreateForRepoPathParams)
    ], ProjectsCreateForRepoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ProjectsCreateForRepoRequestBody)
    ], ProjectsCreateForRepoRequest.prototype, "request", void 0);
    return ProjectsCreateForRepoRequest;
}(SpeakeasyBase));
export { ProjectsCreateForRepoRequest };
var ProjectsCreateForRepoResponse = /** @class */ (function (_super) {
    __extends(ProjectsCreateForRepoResponse, _super);
    function ProjectsCreateForRepoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsCreateForRepoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsCreateForRepoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsCreateForRepoResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Project)
    ], ProjectsCreateForRepoResponse.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], ProjectsCreateForRepoResponse.prototype, "validationErrorSimple", void 0);
    return ProjectsCreateForRepoResponse;
}(SpeakeasyBase));
export { ProjectsCreateForRepoResponse };
