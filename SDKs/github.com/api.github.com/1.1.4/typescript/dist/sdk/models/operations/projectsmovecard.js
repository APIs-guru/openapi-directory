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
var ProjectsMoveCardPathParams = /** @class */ (function (_super) {
    __extends(ProjectsMoveCardPathParams, _super);
    function ProjectsMoveCardPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=card_id" }),
        __metadata("design:type", Number)
    ], ProjectsMoveCardPathParams.prototype, "cardId", void 0);
    return ProjectsMoveCardPathParams;
}(SpeakeasyBase));
export { ProjectsMoveCardPathParams };
var ProjectsMoveCardRequestBody = /** @class */ (function (_super) {
    __extends(ProjectsMoveCardRequestBody, _super);
    function ProjectsMoveCardRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column_id" }),
        __metadata("design:type", Number)
    ], ProjectsMoveCardRequestBody.prototype, "columnId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], ProjectsMoveCardRequestBody.prototype, "position", void 0);
    return ProjectsMoveCardRequestBody;
}(SpeakeasyBase));
export { ProjectsMoveCardRequestBody };
var ProjectsMoveCard403ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(ProjectsMoveCard403ApplicationJsonErrors, _super);
    function ProjectsMoveCard403ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ProjectsMoveCard403ApplicationJsonErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], ProjectsMoveCard403ApplicationJsonErrors.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsMoveCard403ApplicationJsonErrors.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], ProjectsMoveCard403ApplicationJsonErrors.prototype, "resource", void 0);
    return ProjectsMoveCard403ApplicationJsonErrors;
}(SpeakeasyBase));
export { ProjectsMoveCard403ApplicationJsonErrors };
var ProjectsMoveCard403ApplicationJson = /** @class */ (function (_super) {
    __extends(ProjectsMoveCard403ApplicationJson, _super);
    function ProjectsMoveCard403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ProjectsMoveCard403ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: ProjectsMoveCard403ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], ProjectsMoveCard403ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsMoveCard403ApplicationJson.prototype, "message", void 0);
    return ProjectsMoveCard403ApplicationJson;
}(SpeakeasyBase));
export { ProjectsMoveCard403ApplicationJson };
var ProjectsMoveCard503ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(ProjectsMoveCard503ApplicationJsonErrors, _super);
    function ProjectsMoveCard503ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ProjectsMoveCard503ApplicationJsonErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsMoveCard503ApplicationJsonErrors.prototype, "message", void 0);
    return ProjectsMoveCard503ApplicationJsonErrors;
}(SpeakeasyBase));
export { ProjectsMoveCard503ApplicationJsonErrors };
var ProjectsMoveCard503ApplicationJson = /** @class */ (function (_super) {
    __extends(ProjectsMoveCard503ApplicationJson, _super);
    function ProjectsMoveCard503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ProjectsMoveCard503ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ProjectsMoveCard503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: ProjectsMoveCard503ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], ProjectsMoveCard503ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProjectsMoveCard503ApplicationJson.prototype, "message", void 0);
    return ProjectsMoveCard503ApplicationJson;
}(SpeakeasyBase));
export { ProjectsMoveCard503ApplicationJson };
var ProjectsMoveCardRequest = /** @class */ (function (_super) {
    __extends(ProjectsMoveCardRequest, _super);
    function ProjectsMoveCardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsMoveCardPathParams)
    ], ProjectsMoveCardRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ProjectsMoveCardRequestBody)
    ], ProjectsMoveCardRequest.prototype, "request", void 0);
    return ProjectsMoveCardRequest;
}(SpeakeasyBase));
export { ProjectsMoveCardRequest };
var ProjectsMoveCardResponse = /** @class */ (function (_super) {
    __extends(ProjectsMoveCardResponse, _super);
    function ProjectsMoveCardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsMoveCardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsMoveCardResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsMoveCardResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProjectsMoveCardResponse.prototype, "projectsMoveCard201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsMoveCard403ApplicationJson)
    ], ProjectsMoveCardResponse.prototype, "projectsMoveCard403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsMoveCard503ApplicationJson)
    ], ProjectsMoveCardResponse.prototype, "projectsMoveCard503ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ProjectsMoveCardResponse.prototype, "validationError", void 0);
    return ProjectsMoveCardResponse;
}(SpeakeasyBase));
export { ProjectsMoveCardResponse };
