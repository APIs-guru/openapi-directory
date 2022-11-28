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
var AddUserForWorkspacePathParams = /** @class */ (function (_super) {
    __extends(AddUserForWorkspacePathParams, _super);
    function AddUserForWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], AddUserForWorkspacePathParams.prototype, "workspaceGid", void 0);
    return AddUserForWorkspacePathParams;
}(SpeakeasyBase));
export { AddUserForWorkspacePathParams };
var AddUserForWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(AddUserForWorkspaceQueryParams, _super);
    function AddUserForWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddUserForWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddUserForWorkspaceQueryParams.prototype, "optPretty", void 0);
    return AddUserForWorkspaceQueryParams;
}(SpeakeasyBase));
export { AddUserForWorkspaceQueryParams };
var AddUserForWorkspaceRequestBody = /** @class */ (function (_super) {
    __extends(AddUserForWorkspaceRequestBody, _super);
    function AddUserForWorkspaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.WorkspaceAddUserRequest)
    ], AddUserForWorkspaceRequestBody.prototype, "data", void 0);
    return AddUserForWorkspaceRequestBody;
}(SpeakeasyBase));
export { AddUserForWorkspaceRequestBody };
var AddUserForWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddUserForWorkspace200ApplicationJson, _super);
    function AddUserForWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.UserResponse)
    ], AddUserForWorkspace200ApplicationJson.prototype, "data", void 0);
    return AddUserForWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { AddUserForWorkspace200ApplicationJson };
var AddUserForWorkspaceRequest = /** @class */ (function (_super) {
    __extends(AddUserForWorkspaceRequest, _super);
    function AddUserForWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUserForWorkspacePathParams)
    ], AddUserForWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUserForWorkspaceQueryParams)
    ], AddUserForWorkspaceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddUserForWorkspaceRequestBody)
    ], AddUserForWorkspaceRequest.prototype, "request", void 0);
    return AddUserForWorkspaceRequest;
}(SpeakeasyBase));
export { AddUserForWorkspaceRequest };
var AddUserForWorkspaceResponse = /** @class */ (function (_super) {
    __extends(AddUserForWorkspaceResponse, _super);
    function AddUserForWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddUserForWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddUserForWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddUserForWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUserForWorkspace200ApplicationJson)
    ], AddUserForWorkspaceResponse.prototype, "addUserForWorkspace200ApplicationJsonObject", void 0);
    return AddUserForWorkspaceResponse;
}(SpeakeasyBase));
export { AddUserForWorkspaceResponse };
