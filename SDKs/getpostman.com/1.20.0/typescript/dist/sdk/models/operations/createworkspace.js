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
var CreateWorkspaceRequestBodyWorkspaceCollections = /** @class */ (function (_super) {
    __extends(CreateWorkspaceRequestBodyWorkspaceCollections, _super);
    function CreateWorkspaceRequestBodyWorkspaceCollections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBodyWorkspaceCollections.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBodyWorkspaceCollections.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBodyWorkspaceCollections.prototype, "uid", void 0);
    return CreateWorkspaceRequestBodyWorkspaceCollections;
}(SpeakeasyBase));
export { CreateWorkspaceRequestBodyWorkspaceCollections };
var CreateWorkspaceRequestBodyWorkspaceEnvironments = /** @class */ (function (_super) {
    __extends(CreateWorkspaceRequestBodyWorkspaceEnvironments, _super);
    function CreateWorkspaceRequestBodyWorkspaceEnvironments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBodyWorkspaceEnvironments.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBodyWorkspaceEnvironments.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBodyWorkspaceEnvironments.prototype, "uid", void 0);
    return CreateWorkspaceRequestBodyWorkspaceEnvironments;
}(SpeakeasyBase));
export { CreateWorkspaceRequestBodyWorkspaceEnvironments };
var CreateWorkspaceRequestBodyWorkspaceMocks = /** @class */ (function (_super) {
    __extends(CreateWorkspaceRequestBodyWorkspaceMocks, _super);
    function CreateWorkspaceRequestBodyWorkspaceMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBodyWorkspaceMocks.prototype, "id", void 0);
    return CreateWorkspaceRequestBodyWorkspaceMocks;
}(SpeakeasyBase));
export { CreateWorkspaceRequestBodyWorkspaceMocks };
var CreateWorkspaceRequestBodyWorkspaceMonitors = /** @class */ (function (_super) {
    __extends(CreateWorkspaceRequestBodyWorkspaceMonitors, _super);
    function CreateWorkspaceRequestBodyWorkspaceMonitors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBodyWorkspaceMonitors.prototype, "id", void 0);
    return CreateWorkspaceRequestBodyWorkspaceMonitors;
}(SpeakeasyBase));
export { CreateWorkspaceRequestBodyWorkspaceMonitors };
var CreateWorkspaceRequestBodyWorkspace = /** @class */ (function (_super) {
    __extends(CreateWorkspaceRequestBodyWorkspace, _super);
    function CreateWorkspaceRequestBodyWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collections", elemType: CreateWorkspaceRequestBodyWorkspaceCollections }),
        __metadata("design:type", Array)
    ], CreateWorkspaceRequestBodyWorkspace.prototype, "collections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBodyWorkspace.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments", elemType: CreateWorkspaceRequestBodyWorkspaceEnvironments }),
        __metadata("design:type", Array)
    ], CreateWorkspaceRequestBodyWorkspace.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mocks", elemType: CreateWorkspaceRequestBodyWorkspaceMocks }),
        __metadata("design:type", Array)
    ], CreateWorkspaceRequestBodyWorkspace.prototype, "mocks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitors", elemType: CreateWorkspaceRequestBodyWorkspaceMonitors }),
        __metadata("design:type", Array)
    ], CreateWorkspaceRequestBodyWorkspace.prototype, "monitors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBodyWorkspace.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateWorkspaceRequestBodyWorkspace.prototype, "type", void 0);
    return CreateWorkspaceRequestBodyWorkspace;
}(SpeakeasyBase));
export { CreateWorkspaceRequestBodyWorkspace };
var CreateWorkspaceRequestBody = /** @class */ (function (_super) {
    __extends(CreateWorkspaceRequestBody, _super);
    function CreateWorkspaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", CreateWorkspaceRequestBodyWorkspace)
    ], CreateWorkspaceRequestBody.prototype, "workspace", void 0);
    return CreateWorkspaceRequestBody;
}(SpeakeasyBase));
export { CreateWorkspaceRequestBody };
var CreateWorkspace200ApplicationJsonWorkspace = /** @class */ (function (_super) {
    __extends(CreateWorkspace200ApplicationJsonWorkspace, _super);
    function CreateWorkspace200ApplicationJsonWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateWorkspace200ApplicationJsonWorkspace.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateWorkspace200ApplicationJsonWorkspace.prototype, "name", void 0);
    return CreateWorkspace200ApplicationJsonWorkspace;
}(SpeakeasyBase));
export { CreateWorkspace200ApplicationJsonWorkspace };
var CreateWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateWorkspace200ApplicationJson, _super);
    function CreateWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", CreateWorkspace200ApplicationJsonWorkspace)
    ], CreateWorkspace200ApplicationJson.prototype, "workspace", void 0);
    return CreateWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { CreateWorkspace200ApplicationJson };
var CreateWorkspace400ApplicationJsonError = /** @class */ (function (_super) {
    __extends(CreateWorkspace400ApplicationJsonError, _super);
    function CreateWorkspace400ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateWorkspace400ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateWorkspace400ApplicationJsonError.prototype, "name", void 0);
    return CreateWorkspace400ApplicationJsonError;
}(SpeakeasyBase));
export { CreateWorkspace400ApplicationJsonError };
var CreateWorkspace400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateWorkspace400ApplicationJson, _super);
    function CreateWorkspace400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", CreateWorkspace400ApplicationJsonError)
    ], CreateWorkspace400ApplicationJson.prototype, "error", void 0);
    return CreateWorkspace400ApplicationJson;
}(SpeakeasyBase));
export { CreateWorkspace400ApplicationJson };
var CreateWorkspaceRequest = /** @class */ (function (_super) {
    __extends(CreateWorkspaceRequest, _super);
    function CreateWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateWorkspaceRequestBody)
    ], CreateWorkspaceRequest.prototype, "request", void 0);
    return CreateWorkspaceRequest;
}(SpeakeasyBase));
export { CreateWorkspaceRequest };
var CreateWorkspaceResponse = /** @class */ (function (_super) {
    __extends(CreateWorkspaceResponse, _super);
    function CreateWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateWorkspace200ApplicationJson)
    ], CreateWorkspaceResponse.prototype, "createWorkspace200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateWorkspace400ApplicationJson)
    ], CreateWorkspaceResponse.prototype, "createWorkspace400ApplicationJsonObject", void 0);
    return CreateWorkspaceResponse;
}(SpeakeasyBase));
export { CreateWorkspaceResponse };
