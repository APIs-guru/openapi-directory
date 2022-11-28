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
var GetWorkspacePathParams = /** @class */ (function (_super) {
    __extends(GetWorkspacePathParams, _super);
    function GetWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], GetWorkspacePathParams.prototype, "workspaceGid", void 0);
    return GetWorkspacePathParams;
}(SpeakeasyBase));
export { GetWorkspacePathParams };
var GetWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceQueryParams, _super);
    function GetWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetWorkspaceQueryParams.prototype, "optPretty", void 0);
    return GetWorkspaceQueryParams;
}(SpeakeasyBase));
export { GetWorkspaceQueryParams };
var GetWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWorkspace200ApplicationJson, _super);
    function GetWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.WorkspaceResponse)
    ], GetWorkspace200ApplicationJson.prototype, "data", void 0);
    return GetWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { GetWorkspace200ApplicationJson };
var GetWorkspaceRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceRequest, _super);
    function GetWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacePathParams)
    ], GetWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceQueryParams)
    ], GetWorkspaceRequest.prototype, "queryParams", void 0);
    return GetWorkspaceRequest;
}(SpeakeasyBase));
export { GetWorkspaceRequest };
var GetWorkspaceResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceResponse, _super);
    function GetWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspace200ApplicationJson)
    ], GetWorkspaceResponse.prototype, "getWorkspace200ApplicationJsonObject", void 0);
    return GetWorkspaceResponse;
}(SpeakeasyBase));
export { GetWorkspaceResponse };
