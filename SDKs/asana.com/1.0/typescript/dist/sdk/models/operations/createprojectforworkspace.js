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
var CreateProjectForWorkspacePathParams = /** @class */ (function (_super) {
    __extends(CreateProjectForWorkspacePathParams, _super);
    function CreateProjectForWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], CreateProjectForWorkspacePathParams.prototype, "workspaceGid", void 0);
    return CreateProjectForWorkspacePathParams;
}(SpeakeasyBase));
export { CreateProjectForWorkspacePathParams };
var CreateProjectForWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(CreateProjectForWorkspaceQueryParams, _super);
    function CreateProjectForWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateProjectForWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateProjectForWorkspaceQueryParams.prototype, "optPretty", void 0);
    return CreateProjectForWorkspaceQueryParams;
}(SpeakeasyBase));
export { CreateProjectForWorkspaceQueryParams };
var CreateProjectForWorkspaceRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateProjectForWorkspaceRequestBodyInput, _super);
    function CreateProjectForWorkspaceRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectRequestInput)
    ], CreateProjectForWorkspaceRequestBodyInput.prototype, "data", void 0);
    return CreateProjectForWorkspaceRequestBodyInput;
}(SpeakeasyBase));
export { CreateProjectForWorkspaceRequestBodyInput };
var CreateProjectForWorkspace201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateProjectForWorkspace201ApplicationJson, _super);
    function CreateProjectForWorkspace201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectResponse)
    ], CreateProjectForWorkspace201ApplicationJson.prototype, "data", void 0);
    return CreateProjectForWorkspace201ApplicationJson;
}(SpeakeasyBase));
export { CreateProjectForWorkspace201ApplicationJson };
var CreateProjectForWorkspaceRequest = /** @class */ (function (_super) {
    __extends(CreateProjectForWorkspaceRequest, _super);
    function CreateProjectForWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProjectForWorkspacePathParams)
    ], CreateProjectForWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProjectForWorkspaceQueryParams)
    ], CreateProjectForWorkspaceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateProjectForWorkspaceRequestBodyInput)
    ], CreateProjectForWorkspaceRequest.prototype, "request", void 0);
    return CreateProjectForWorkspaceRequest;
}(SpeakeasyBase));
export { CreateProjectForWorkspaceRequest };
var CreateProjectForWorkspaceResponse = /** @class */ (function (_super) {
    __extends(CreateProjectForWorkspaceResponse, _super);
    function CreateProjectForWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateProjectForWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateProjectForWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateProjectForWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProjectForWorkspace201ApplicationJson)
    ], CreateProjectForWorkspaceResponse.prototype, "createProjectForWorkspace201ApplicationJsonObject", void 0);
    return CreateProjectForWorkspaceResponse;
}(SpeakeasyBase));
export { CreateProjectForWorkspaceResponse };
