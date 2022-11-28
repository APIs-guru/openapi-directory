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
var ProjectsUpdateCardPathParams = /** @class */ (function (_super) {
    __extends(ProjectsUpdateCardPathParams, _super);
    function ProjectsUpdateCardPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=card_id" }),
        __metadata("design:type", Number)
    ], ProjectsUpdateCardPathParams.prototype, "cardId", void 0);
    return ProjectsUpdateCardPathParams;
}(SpeakeasyBase));
export { ProjectsUpdateCardPathParams };
var ProjectsUpdateCardRequestBody = /** @class */ (function (_super) {
    __extends(ProjectsUpdateCardRequestBody, _super);
    function ProjectsUpdateCardRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], ProjectsUpdateCardRequestBody.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], ProjectsUpdateCardRequestBody.prototype, "note", void 0);
    return ProjectsUpdateCardRequestBody;
}(SpeakeasyBase));
export { ProjectsUpdateCardRequestBody };
var ProjectsUpdateCardRequest = /** @class */ (function (_super) {
    __extends(ProjectsUpdateCardRequest, _super);
    function ProjectsUpdateCardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsUpdateCardPathParams)
    ], ProjectsUpdateCardRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ProjectsUpdateCardRequestBody)
    ], ProjectsUpdateCardRequest.prototype, "request", void 0);
    return ProjectsUpdateCardRequest;
}(SpeakeasyBase));
export { ProjectsUpdateCardRequest };
var ProjectsUpdateCardResponse = /** @class */ (function (_super) {
    __extends(ProjectsUpdateCardResponse, _super);
    function ProjectsUpdateCardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsUpdateCardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsUpdateCardResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsUpdateCardResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProjectCard)
    ], ProjectsUpdateCardResponse.prototype, "projectCard", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], ProjectsUpdateCardResponse.prototype, "validationErrorSimple", void 0);
    return ProjectsUpdateCardResponse;
}(SpeakeasyBase));
export { ProjectsUpdateCardResponse };
