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
var SingleWorkspacePathParams = /** @class */ (function (_super) {
    __extends(SingleWorkspacePathParams, _super);
    function SingleWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], SingleWorkspacePathParams.prototype, "workspaceId", void 0);
    return SingleWorkspacePathParams;
}(SpeakeasyBase));
export { SingleWorkspacePathParams };
var SingleWorkspace200ApplicationJsonWorkspaceCollections = /** @class */ (function (_super) {
    __extends(SingleWorkspace200ApplicationJsonWorkspaceCollections, _super);
    function SingleWorkspace200ApplicationJsonWorkspaceCollections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SingleWorkspace200ApplicationJsonWorkspaceCollections.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SingleWorkspace200ApplicationJsonWorkspaceCollections.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], SingleWorkspace200ApplicationJsonWorkspaceCollections.prototype, "uid", void 0);
    return SingleWorkspace200ApplicationJsonWorkspaceCollections;
}(SpeakeasyBase));
export { SingleWorkspace200ApplicationJsonWorkspaceCollections };
var SingleWorkspace200ApplicationJsonWorkspaceEnvironments = /** @class */ (function (_super) {
    __extends(SingleWorkspace200ApplicationJsonWorkspaceEnvironments, _super);
    function SingleWorkspace200ApplicationJsonWorkspaceEnvironments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SingleWorkspace200ApplicationJsonWorkspaceEnvironments.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SingleWorkspace200ApplicationJsonWorkspaceEnvironments.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], SingleWorkspace200ApplicationJsonWorkspaceEnvironments.prototype, "uid", void 0);
    return SingleWorkspace200ApplicationJsonWorkspaceEnvironments;
}(SpeakeasyBase));
export { SingleWorkspace200ApplicationJsonWorkspaceEnvironments };
var SingleWorkspace200ApplicationJsonWorkspace = /** @class */ (function (_super) {
    __extends(SingleWorkspace200ApplicationJsonWorkspace, _super);
    function SingleWorkspace200ApplicationJsonWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collections", elemType: SingleWorkspace200ApplicationJsonWorkspaceCollections }),
        __metadata("design:type", Array)
    ], SingleWorkspace200ApplicationJsonWorkspace.prototype, "collections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SingleWorkspace200ApplicationJsonWorkspace.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments", elemType: SingleWorkspace200ApplicationJsonWorkspaceEnvironments }),
        __metadata("design:type", Array)
    ], SingleWorkspace200ApplicationJsonWorkspace.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SingleWorkspace200ApplicationJsonWorkspace.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SingleWorkspace200ApplicationJsonWorkspace.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SingleWorkspace200ApplicationJsonWorkspace.prototype, "type", void 0);
    return SingleWorkspace200ApplicationJsonWorkspace;
}(SpeakeasyBase));
export { SingleWorkspace200ApplicationJsonWorkspace };
var SingleWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(SingleWorkspace200ApplicationJson, _super);
    function SingleWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", SingleWorkspace200ApplicationJsonWorkspace)
    ], SingleWorkspace200ApplicationJson.prototype, "workspace", void 0);
    return SingleWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { SingleWorkspace200ApplicationJson };
var SingleWorkspace404ApplicationJsonError = /** @class */ (function (_super) {
    __extends(SingleWorkspace404ApplicationJsonError, _super);
    function SingleWorkspace404ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SingleWorkspace404ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SingleWorkspace404ApplicationJsonError.prototype, "name", void 0);
    return SingleWorkspace404ApplicationJsonError;
}(SpeakeasyBase));
export { SingleWorkspace404ApplicationJsonError };
var SingleWorkspace404ApplicationJson = /** @class */ (function (_super) {
    __extends(SingleWorkspace404ApplicationJson, _super);
    function SingleWorkspace404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", SingleWorkspace404ApplicationJsonError)
    ], SingleWorkspace404ApplicationJson.prototype, "error", void 0);
    return SingleWorkspace404ApplicationJson;
}(SpeakeasyBase));
export { SingleWorkspace404ApplicationJson };
var SingleWorkspaceRequest = /** @class */ (function (_super) {
    __extends(SingleWorkspaceRequest, _super);
    function SingleWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleWorkspacePathParams)
    ], SingleWorkspaceRequest.prototype, "pathParams", void 0);
    return SingleWorkspaceRequest;
}(SpeakeasyBase));
export { SingleWorkspaceRequest };
var SingleWorkspaceResponse = /** @class */ (function (_super) {
    __extends(SingleWorkspaceResponse, _super);
    function SingleWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SingleWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SingleWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleWorkspace200ApplicationJson)
    ], SingleWorkspaceResponse.prototype, "singleWorkspace200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleWorkspace404ApplicationJson)
    ], SingleWorkspaceResponse.prototype, "singleWorkspace404ApplicationJsonObject", void 0);
    return SingleWorkspaceResponse;
}(SpeakeasyBase));
export { SingleWorkspaceResponse };
