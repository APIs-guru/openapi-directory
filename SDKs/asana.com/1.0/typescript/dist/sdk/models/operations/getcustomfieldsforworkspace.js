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
var GetCustomFieldsForWorkspacePathParams = /** @class */ (function (_super) {
    __extends(GetCustomFieldsForWorkspacePathParams, _super);
    function GetCustomFieldsForWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], GetCustomFieldsForWorkspacePathParams.prototype, "workspaceGid", void 0);
    return GetCustomFieldsForWorkspacePathParams;
}(SpeakeasyBase));
export { GetCustomFieldsForWorkspacePathParams };
var GetCustomFieldsForWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(GetCustomFieldsForWorkspaceQueryParams, _super);
    function GetCustomFieldsForWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetCustomFieldsForWorkspaceQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetCustomFieldsForWorkspaceQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetCustomFieldsForWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetCustomFieldsForWorkspaceQueryParams.prototype, "optPretty", void 0);
    return GetCustomFieldsForWorkspaceQueryParams;
}(SpeakeasyBase));
export { GetCustomFieldsForWorkspaceQueryParams };
var GetCustomFieldsForWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCustomFieldsForWorkspace200ApplicationJson, _super);
    function GetCustomFieldsForWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.CustomFieldResponse }),
        __metadata("design:type", Array)
    ], GetCustomFieldsForWorkspace200ApplicationJson.prototype, "data", void 0);
    return GetCustomFieldsForWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { GetCustomFieldsForWorkspace200ApplicationJson };
var GetCustomFieldsForWorkspaceRequest = /** @class */ (function (_super) {
    __extends(GetCustomFieldsForWorkspaceRequest, _super);
    function GetCustomFieldsForWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomFieldsForWorkspacePathParams)
    ], GetCustomFieldsForWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomFieldsForWorkspaceQueryParams)
    ], GetCustomFieldsForWorkspaceRequest.prototype, "queryParams", void 0);
    return GetCustomFieldsForWorkspaceRequest;
}(SpeakeasyBase));
export { GetCustomFieldsForWorkspaceRequest };
var GetCustomFieldsForWorkspaceResponse = /** @class */ (function (_super) {
    __extends(GetCustomFieldsForWorkspaceResponse, _super);
    function GetCustomFieldsForWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCustomFieldsForWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetCustomFieldsForWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCustomFieldsForWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomFieldsForWorkspace200ApplicationJson)
    ], GetCustomFieldsForWorkspaceResponse.prototype, "getCustomFieldsForWorkspace200ApplicationJsonObject", void 0);
    return GetCustomFieldsForWorkspaceResponse;
}(SpeakeasyBase));
export { GetCustomFieldsForWorkspaceResponse };
