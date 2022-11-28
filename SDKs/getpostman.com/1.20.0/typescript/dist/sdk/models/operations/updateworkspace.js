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
var UpdateWorkspacePathParams = /** @class */ (function (_super) {
    __extends(UpdateWorkspacePathParams, _super);
    function UpdateWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], UpdateWorkspacePathParams.prototype, "workspaceId", void 0);
    return UpdateWorkspacePathParams;
}(SpeakeasyBase));
export { UpdateWorkspacePathParams };
var UpdateWorkspaceRequestBodyWorkspaceCollections = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceRequestBodyWorkspaceCollections, _super);
    function UpdateWorkspaceRequestBodyWorkspaceCollections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceRequestBodyWorkspaceCollections.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceRequestBodyWorkspaceCollections.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceRequestBodyWorkspaceCollections.prototype, "uid", void 0);
    return UpdateWorkspaceRequestBodyWorkspaceCollections;
}(SpeakeasyBase));
export { UpdateWorkspaceRequestBodyWorkspaceCollections };
var UpdateWorkspaceRequestBodyWorkspaceEnvironments = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceRequestBodyWorkspaceEnvironments, _super);
    function UpdateWorkspaceRequestBodyWorkspaceEnvironments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceRequestBodyWorkspaceEnvironments.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceRequestBodyWorkspaceEnvironments.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceRequestBodyWorkspaceEnvironments.prototype, "uid", void 0);
    return UpdateWorkspaceRequestBodyWorkspaceEnvironments;
}(SpeakeasyBase));
export { UpdateWorkspaceRequestBodyWorkspaceEnvironments };
var UpdateWorkspaceRequestBodyWorkspaceMocks = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceRequestBodyWorkspaceMocks, _super);
    function UpdateWorkspaceRequestBodyWorkspaceMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceRequestBodyWorkspaceMocks.prototype, "id", void 0);
    return UpdateWorkspaceRequestBodyWorkspaceMocks;
}(SpeakeasyBase));
export { UpdateWorkspaceRequestBodyWorkspaceMocks };
var UpdateWorkspaceRequestBodyWorkspaceMonitors = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceRequestBodyWorkspaceMonitors, _super);
    function UpdateWorkspaceRequestBodyWorkspaceMonitors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceRequestBodyWorkspaceMonitors.prototype, "id", void 0);
    return UpdateWorkspaceRequestBodyWorkspaceMonitors;
}(SpeakeasyBase));
export { UpdateWorkspaceRequestBodyWorkspaceMonitors };
var UpdateWorkspaceRequestBodyWorkspace = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceRequestBodyWorkspace, _super);
    function UpdateWorkspaceRequestBodyWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collections", elemType: UpdateWorkspaceRequestBodyWorkspaceCollections }),
        __metadata("design:type", Array)
    ], UpdateWorkspaceRequestBodyWorkspace.prototype, "collections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceRequestBodyWorkspace.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments", elemType: UpdateWorkspaceRequestBodyWorkspaceEnvironments }),
        __metadata("design:type", Array)
    ], UpdateWorkspaceRequestBodyWorkspace.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mocks", elemType: UpdateWorkspaceRequestBodyWorkspaceMocks }),
        __metadata("design:type", Array)
    ], UpdateWorkspaceRequestBodyWorkspace.prototype, "mocks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitors", elemType: UpdateWorkspaceRequestBodyWorkspaceMonitors }),
        __metadata("design:type", Array)
    ], UpdateWorkspaceRequestBodyWorkspace.prototype, "monitors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateWorkspaceRequestBodyWorkspace.prototype, "name", void 0);
    return UpdateWorkspaceRequestBodyWorkspace;
}(SpeakeasyBase));
export { UpdateWorkspaceRequestBodyWorkspace };
var UpdateWorkspaceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceRequestBody, _super);
    function UpdateWorkspaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", UpdateWorkspaceRequestBodyWorkspace)
    ], UpdateWorkspaceRequestBody.prototype, "workspace", void 0);
    return UpdateWorkspaceRequestBody;
}(SpeakeasyBase));
export { UpdateWorkspaceRequestBody };
var UpdateWorkspace200ApplicationJsonWorkspace = /** @class */ (function (_super) {
    __extends(UpdateWorkspace200ApplicationJsonWorkspace, _super);
    function UpdateWorkspace200ApplicationJsonWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateWorkspace200ApplicationJsonWorkspace.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateWorkspace200ApplicationJsonWorkspace.prototype, "name", void 0);
    return UpdateWorkspace200ApplicationJsonWorkspace;
}(SpeakeasyBase));
export { UpdateWorkspace200ApplicationJsonWorkspace };
var UpdateWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateWorkspace200ApplicationJson, _super);
    function UpdateWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", UpdateWorkspace200ApplicationJsonWorkspace)
    ], UpdateWorkspace200ApplicationJson.prototype, "workspace", void 0);
    return UpdateWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { UpdateWorkspace200ApplicationJson };
var UpdateWorkspace403ApplicationJsonError = /** @class */ (function (_super) {
    __extends(UpdateWorkspace403ApplicationJsonError, _super);
    function UpdateWorkspace403ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateWorkspace403ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateWorkspace403ApplicationJsonError.prototype, "name", void 0);
    return UpdateWorkspace403ApplicationJsonError;
}(SpeakeasyBase));
export { UpdateWorkspace403ApplicationJsonError };
var UpdateWorkspace403ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateWorkspace403ApplicationJson, _super);
    function UpdateWorkspace403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", UpdateWorkspace403ApplicationJsonError)
    ], UpdateWorkspace403ApplicationJson.prototype, "error", void 0);
    return UpdateWorkspace403ApplicationJson;
}(SpeakeasyBase));
export { UpdateWorkspace403ApplicationJson };
var UpdateWorkspace404ApplicationJsonError = /** @class */ (function (_super) {
    __extends(UpdateWorkspace404ApplicationJsonError, _super);
    function UpdateWorkspace404ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateWorkspace404ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateWorkspace404ApplicationJsonError.prototype, "name", void 0);
    return UpdateWorkspace404ApplicationJsonError;
}(SpeakeasyBase));
export { UpdateWorkspace404ApplicationJsonError };
var UpdateWorkspace404ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateWorkspace404ApplicationJson, _super);
    function UpdateWorkspace404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", UpdateWorkspace404ApplicationJsonError)
    ], UpdateWorkspace404ApplicationJson.prototype, "error", void 0);
    return UpdateWorkspace404ApplicationJson;
}(SpeakeasyBase));
export { UpdateWorkspace404ApplicationJson };
var UpdateWorkspaceRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceRequest, _super);
    function UpdateWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkspacePathParams)
    ], UpdateWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateWorkspaceRequestBody)
    ], UpdateWorkspaceRequest.prototype, "request", void 0);
    return UpdateWorkspaceRequest;
}(SpeakeasyBase));
export { UpdateWorkspaceRequest };
var UpdateWorkspaceResponse = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceResponse, _super);
    function UpdateWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkspace200ApplicationJson)
    ], UpdateWorkspaceResponse.prototype, "updateWorkspace200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkspace403ApplicationJson)
    ], UpdateWorkspaceResponse.prototype, "updateWorkspace403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkspace404ApplicationJson)
    ], UpdateWorkspaceResponse.prototype, "updateWorkspace404ApplicationJsonObject", void 0);
    return UpdateWorkspaceResponse;
}(SpeakeasyBase));
export { UpdateWorkspaceResponse };
