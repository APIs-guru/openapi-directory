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
var CreateTagForWorkspacePathParams = /** @class */ (function (_super) {
    __extends(CreateTagForWorkspacePathParams, _super);
    function CreateTagForWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], CreateTagForWorkspacePathParams.prototype, "workspaceGid", void 0);
    return CreateTagForWorkspacePathParams;
}(SpeakeasyBase));
export { CreateTagForWorkspacePathParams };
var CreateTagForWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(CreateTagForWorkspaceQueryParams, _super);
    function CreateTagForWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateTagForWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateTagForWorkspaceQueryParams.prototype, "optPretty", void 0);
    return CreateTagForWorkspaceQueryParams;
}(SpeakeasyBase));
export { CreateTagForWorkspaceQueryParams };
var CreateTagForWorkspaceRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateTagForWorkspaceRequestBodyInput, _super);
    function CreateTagForWorkspaceRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TagResponseInput)
    ], CreateTagForWorkspaceRequestBodyInput.prototype, "data", void 0);
    return CreateTagForWorkspaceRequestBodyInput;
}(SpeakeasyBase));
export { CreateTagForWorkspaceRequestBodyInput };
var CreateTagForWorkspace201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTagForWorkspace201ApplicationJson, _super);
    function CreateTagForWorkspace201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TagResponse)
    ], CreateTagForWorkspace201ApplicationJson.prototype, "data", void 0);
    return CreateTagForWorkspace201ApplicationJson;
}(SpeakeasyBase));
export { CreateTagForWorkspace201ApplicationJson };
var CreateTagForWorkspaceRequest = /** @class */ (function (_super) {
    __extends(CreateTagForWorkspaceRequest, _super);
    function CreateTagForWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTagForWorkspacePathParams)
    ], CreateTagForWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTagForWorkspaceQueryParams)
    ], CreateTagForWorkspaceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateTagForWorkspaceRequestBodyInput)
    ], CreateTagForWorkspaceRequest.prototype, "request", void 0);
    return CreateTagForWorkspaceRequest;
}(SpeakeasyBase));
export { CreateTagForWorkspaceRequest };
var CreateTagForWorkspaceResponse = /** @class */ (function (_super) {
    __extends(CreateTagForWorkspaceResponse, _super);
    function CreateTagForWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTagForWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateTagForWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTagForWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTagForWorkspace201ApplicationJson)
    ], CreateTagForWorkspaceResponse.prototype, "createTagForWorkspace201ApplicationJsonObject", void 0);
    return CreateTagForWorkspaceResponse;
}(SpeakeasyBase));
export { CreateTagForWorkspaceResponse };
