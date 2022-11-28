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
var UpdateWorkspacePathParams = /** @class */ (function (_super) {
    __extends(UpdateWorkspacePathParams, _super);
    function UpdateWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], UpdateWorkspacePathParams.prototype, "workspaceGid", void 0);
    return UpdateWorkspacePathParams;
}(SpeakeasyBase));
export { UpdateWorkspacePathParams };
var UpdateWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceQueryParams, _super);
    function UpdateWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], UpdateWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkspaceQueryParams.prototype, "optPretty", void 0);
    return UpdateWorkspaceQueryParams;
}(SpeakeasyBase));
export { UpdateWorkspaceQueryParams };
var UpdateWorkspaceRequestBodyInput = /** @class */ (function (_super) {
    __extends(UpdateWorkspaceRequestBodyInput, _super);
    function UpdateWorkspaceRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.WorkspaceRequestInput)
    ], UpdateWorkspaceRequestBodyInput.prototype, "data", void 0);
    return UpdateWorkspaceRequestBodyInput;
}(SpeakeasyBase));
export { UpdateWorkspaceRequestBodyInput };
var UpdateWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateWorkspace200ApplicationJson, _super);
    function UpdateWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.WorkspaceResponse)
    ], UpdateWorkspace200ApplicationJson.prototype, "data", void 0);
    return UpdateWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { UpdateWorkspace200ApplicationJson };
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
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkspaceQueryParams)
    ], UpdateWorkspaceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateWorkspaceRequestBodyInput)
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
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateWorkspace200ApplicationJson)
    ], UpdateWorkspaceResponse.prototype, "updateWorkspace200ApplicationJsonObject", void 0);
    return UpdateWorkspaceResponse;
}(SpeakeasyBase));
export { UpdateWorkspaceResponse };
