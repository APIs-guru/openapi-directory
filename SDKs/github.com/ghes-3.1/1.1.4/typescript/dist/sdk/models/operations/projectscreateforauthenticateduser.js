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
var ProjectsCreateForAuthenticatedUserRequestBody = /** @class */ (function (_super) {
    __extends(ProjectsCreateForAuthenticatedUserRequestBody, _super);
    function ProjectsCreateForAuthenticatedUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ProjectsCreateForAuthenticatedUserRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectsCreateForAuthenticatedUserRequestBody.prototype, "name", void 0);
    return ProjectsCreateForAuthenticatedUserRequestBody;
}(SpeakeasyBase));
export { ProjectsCreateForAuthenticatedUserRequestBody };
var ProjectsCreateForAuthenticatedUser415ApplicationJson = /** @class */ (function (_super) {
    __extends(ProjectsCreateForAuthenticatedUser415ApplicationJson, _super);
    function ProjectsCreateForAuthenticatedUser415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ProjectsCreateForAuthenticatedUser415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsCreateForAuthenticatedUser415ApplicationJson.prototype, "message", void 0);
    return ProjectsCreateForAuthenticatedUser415ApplicationJson;
}(SpeakeasyBase));
export { ProjectsCreateForAuthenticatedUser415ApplicationJson };
var ProjectsCreateForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(ProjectsCreateForAuthenticatedUserRequest, _super);
    function ProjectsCreateForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ProjectsCreateForAuthenticatedUserRequestBody)
    ], ProjectsCreateForAuthenticatedUserRequest.prototype, "request", void 0);
    return ProjectsCreateForAuthenticatedUserRequest;
}(SpeakeasyBase));
export { ProjectsCreateForAuthenticatedUserRequest };
var ProjectsCreateForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(ProjectsCreateForAuthenticatedUserResponse, _super);
    function ProjectsCreateForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsCreateForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsCreateForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsCreateForAuthenticatedUserResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Project)
    ], ProjectsCreateForAuthenticatedUserResponse.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsCreateForAuthenticatedUser415ApplicationJson)
    ], ProjectsCreateForAuthenticatedUserResponse.prototype, "projectsCreateForAuthenticatedUser415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], ProjectsCreateForAuthenticatedUserResponse.prototype, "validationErrorSimple", void 0);
    return ProjectsCreateForAuthenticatedUserResponse;
}(SpeakeasyBase));
export { ProjectsCreateForAuthenticatedUserResponse };
