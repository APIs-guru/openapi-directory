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
var ProjectsMoveColumnPathParams = /** @class */ (function (_super) {
    __extends(ProjectsMoveColumnPathParams, _super);
    function ProjectsMoveColumnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_id" }),
        __metadata("design:type", Number)
    ], ProjectsMoveColumnPathParams.prototype, "columnId", void 0);
    return ProjectsMoveColumnPathParams;
}(SpeakeasyBase));
export { ProjectsMoveColumnPathParams };
var ProjectsMoveColumnRequestBody = /** @class */ (function (_super) {
    __extends(ProjectsMoveColumnRequestBody, _super);
    function ProjectsMoveColumnRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], ProjectsMoveColumnRequestBody.prototype, "position", void 0);
    return ProjectsMoveColumnRequestBody;
}(SpeakeasyBase));
export { ProjectsMoveColumnRequestBody };
var ProjectsMoveColumnRequest = /** @class */ (function (_super) {
    __extends(ProjectsMoveColumnRequest, _super);
    function ProjectsMoveColumnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProjectsMoveColumnPathParams)
    ], ProjectsMoveColumnRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ProjectsMoveColumnRequestBody)
    ], ProjectsMoveColumnRequest.prototype, "request", void 0);
    return ProjectsMoveColumnRequest;
}(SpeakeasyBase));
export { ProjectsMoveColumnRequest };
var ProjectsMoveColumnResponse = /** @class */ (function (_super) {
    __extends(ProjectsMoveColumnResponse, _super);
    function ProjectsMoveColumnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProjectsMoveColumnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProjectsMoveColumnResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ProjectsMoveColumnResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProjectsMoveColumnResponse.prototype, "projectsMoveColumn201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], ProjectsMoveColumnResponse.prototype, "validationErrorSimple", void 0);
    return ProjectsMoveColumnResponse;
}(SpeakeasyBase));
export { ProjectsMoveColumnResponse };
