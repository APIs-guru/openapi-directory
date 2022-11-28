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
var RemoveUserForWorkspacePathParams = /** @class */ (function (_super) {
    __extends(RemoveUserForWorkspacePathParams, _super);
    function RemoveUserForWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], RemoveUserForWorkspacePathParams.prototype, "workspaceGid", void 0);
    return RemoveUserForWorkspacePathParams;
}(SpeakeasyBase));
export { RemoveUserForWorkspacePathParams };
var RemoveUserForWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(RemoveUserForWorkspaceQueryParams, _super);
    function RemoveUserForWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], RemoveUserForWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], RemoveUserForWorkspaceQueryParams.prototype, "optPretty", void 0);
    return RemoveUserForWorkspaceQueryParams;
}(SpeakeasyBase));
export { RemoveUserForWorkspaceQueryParams };
var RemoveUserForWorkspaceRequestBody = /** @class */ (function (_super) {
    __extends(RemoveUserForWorkspaceRequestBody, _super);
    function RemoveUserForWorkspaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.WorkspaceRemoveUserRequest)
    ], RemoveUserForWorkspaceRequestBody.prototype, "data", void 0);
    return RemoveUserForWorkspaceRequestBody;
}(SpeakeasyBase));
export { RemoveUserForWorkspaceRequestBody };
var RemoveUserForWorkspace204ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserForWorkspace204ApplicationJson, _super);
    function RemoveUserForWorkspace204ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], RemoveUserForWorkspace204ApplicationJson.prototype, "data", void 0);
    return RemoveUserForWorkspace204ApplicationJson;
}(SpeakeasyBase));
export { RemoveUserForWorkspace204ApplicationJson };
var RemoveUserForWorkspaceRequest = /** @class */ (function (_super) {
    __extends(RemoveUserForWorkspaceRequest, _super);
    function RemoveUserForWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserForWorkspacePathParams)
    ], RemoveUserForWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserForWorkspaceQueryParams)
    ], RemoveUserForWorkspaceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveUserForWorkspaceRequestBody)
    ], RemoveUserForWorkspaceRequest.prototype, "request", void 0);
    return RemoveUserForWorkspaceRequest;
}(SpeakeasyBase));
export { RemoveUserForWorkspaceRequest };
var RemoveUserForWorkspaceResponse = /** @class */ (function (_super) {
    __extends(RemoveUserForWorkspaceResponse, _super);
    function RemoveUserForWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveUserForWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RemoveUserForWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveUserForWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserForWorkspace204ApplicationJson)
    ], RemoveUserForWorkspaceResponse.prototype, "removeUserForWorkspace204ApplicationJsonObject", void 0);
    return RemoveUserForWorkspaceResponse;
}(SpeakeasyBase));
export { RemoveUserForWorkspaceResponse };
