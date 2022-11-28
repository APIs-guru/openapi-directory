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
var UpdateProjectPathParams = /** @class */ (function (_super) {
    __extends(UpdateProjectPathParams, _super);
    function UpdateProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], UpdateProjectPathParams.prototype, "projectGid", void 0);
    return UpdateProjectPathParams;
}(SpeakeasyBase));
export { UpdateProjectPathParams };
var UpdateProjectQueryParams = /** @class */ (function (_super) {
    __extends(UpdateProjectQueryParams, _super);
    function UpdateProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], UpdateProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], UpdateProjectQueryParams.prototype, "optPretty", void 0);
    return UpdateProjectQueryParams;
}(SpeakeasyBase));
export { UpdateProjectQueryParams };
var UpdateProjectRequestBodyInput = /** @class */ (function (_super) {
    __extends(UpdateProjectRequestBodyInput, _super);
    function UpdateProjectRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectRequestInput)
    ], UpdateProjectRequestBodyInput.prototype, "data", void 0);
    return UpdateProjectRequestBodyInput;
}(SpeakeasyBase));
export { UpdateProjectRequestBodyInput };
var UpdateProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateProject200ApplicationJson, _super);
    function UpdateProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectResponse)
    ], UpdateProject200ApplicationJson.prototype, "data", void 0);
    return UpdateProject200ApplicationJson;
}(SpeakeasyBase));
export { UpdateProject200ApplicationJson };
var UpdateProjectRequest = /** @class */ (function (_super) {
    __extends(UpdateProjectRequest, _super);
    function UpdateProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProjectPathParams)
    ], UpdateProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProjectQueryParams)
    ], UpdateProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateProjectRequestBodyInput)
    ], UpdateProjectRequest.prototype, "request", void 0);
    return UpdateProjectRequest;
}(SpeakeasyBase));
export { UpdateProjectRequest };
var UpdateProjectResponse = /** @class */ (function (_super) {
    __extends(UpdateProjectResponse, _super);
    function UpdateProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateProject200ApplicationJson)
    ], UpdateProjectResponse.prototype, "updateProject200ApplicationJsonObject", void 0);
    return UpdateProjectResponse;
}(SpeakeasyBase));
export { UpdateProjectResponse };
