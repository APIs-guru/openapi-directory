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
var CreateProjectStatusForProjectPathParams = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProjectPathParams, _super);
    function CreateProjectStatusForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], CreateProjectStatusForProjectPathParams.prototype, "projectGid", void 0);
    return CreateProjectStatusForProjectPathParams;
}(SpeakeasyBase));
export { CreateProjectStatusForProjectPathParams };
var CreateProjectStatusForProjectQueryParams = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProjectQueryParams, _super);
    function CreateProjectStatusForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateProjectStatusForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateProjectStatusForProjectQueryParams.prototype, "optPretty", void 0);
    return CreateProjectStatusForProjectQueryParams;
}(SpeakeasyBase));
export { CreateProjectStatusForProjectQueryParams };
var CreateProjectStatusForProjectRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProjectRequestBodyInput, _super);
    function CreateProjectStatusForProjectRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectStatusRequestInput)
    ], CreateProjectStatusForProjectRequestBodyInput.prototype, "data", void 0);
    return CreateProjectStatusForProjectRequestBodyInput;
}(SpeakeasyBase));
export { CreateProjectStatusForProjectRequestBodyInput };
var CreateProjectStatusForProject201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProject201ApplicationJson, _super);
    function CreateProjectStatusForProject201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectStatusResponse)
    ], CreateProjectStatusForProject201ApplicationJson.prototype, "data", void 0);
    return CreateProjectStatusForProject201ApplicationJson;
}(SpeakeasyBase));
export { CreateProjectStatusForProject201ApplicationJson };
var CreateProjectStatusForProjectRequest = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProjectRequest, _super);
    function CreateProjectStatusForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProjectStatusForProjectPathParams)
    ], CreateProjectStatusForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProjectStatusForProjectQueryParams)
    ], CreateProjectStatusForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateProjectStatusForProjectRequestBodyInput)
    ], CreateProjectStatusForProjectRequest.prototype, "request", void 0);
    return CreateProjectStatusForProjectRequest;
}(SpeakeasyBase));
export { CreateProjectStatusForProjectRequest };
var CreateProjectStatusForProjectResponse = /** @class */ (function (_super) {
    __extends(CreateProjectStatusForProjectResponse, _super);
    function CreateProjectStatusForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateProjectStatusForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateProjectStatusForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateProjectStatusForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProjectStatusForProject201ApplicationJson)
    ], CreateProjectStatusForProjectResponse.prototype, "createProjectStatusForProject201ApplicationJsonObject", void 0);
    return CreateProjectStatusForProjectResponse;
}(SpeakeasyBase));
export { CreateProjectStatusForProjectResponse };
