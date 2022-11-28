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
var ProjectsCreateColumnPathParams = /** @class */ (function (_super) {
    __extends(ProjectsCreateColumnPathParams, _super);
    function ProjectsCreateColumnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], ProjectsCreateColumnPathParams.prototype, "projectId", void 0);
    return ProjectsCreateColumnPathParams;
}(SpeakeasyBase));
export { ProjectsCreateColumnPathParams };
var ProjectsCreateColumnRequestBody = /** @class */ (function (_super) {
    __extends(ProjectsCreateColumnRequestBody, _super);
    function ProjectsCreateColumnRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectsCreateColumnRequestBody.prototype, "name", void 0);
    return ProjectsCreateColumnRequestBody;
}(SpeakeasyBase));
export { ProjectsCreateColumnRequestBody };
var ProjectsCreateColumnRequest = /** @class */ (function (_super) {
    __extends(ProjectsCreateColumnRequest, _super);
    function ProjectsCreateColumnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsCreateColumnPathParams)
    ], ProjectsCreateColumnRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ProjectsCreateColumnRequestBody)
    ], ProjectsCreateColumnRequest.prototype, "request", void 0);
    return ProjectsCreateColumnRequest;
}(SpeakeasyBase));
export { ProjectsCreateColumnRequest };
var ProjectsCreateColumnResponse = /** @class */ (function (_super) {
    __extends(ProjectsCreateColumnResponse, _super);
    function ProjectsCreateColumnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsCreateColumnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsCreateColumnResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsCreateColumnResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProjectColumn)
    ], ProjectsCreateColumnResponse.prototype, "projectColumn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], ProjectsCreateColumnResponse.prototype, "validationErrorSimple", void 0);
    return ProjectsCreateColumnResponse;
}(SpeakeasyBase));
export { ProjectsCreateColumnResponse };
