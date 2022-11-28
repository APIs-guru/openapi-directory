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
var GetTagsForWorkspacePathParams = /** @class */ (function (_super) {
    __extends(GetTagsForWorkspacePathParams, _super);
    function GetTagsForWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], GetTagsForWorkspacePathParams.prototype, "workspaceGid", void 0);
    return GetTagsForWorkspacePathParams;
}(SpeakeasyBase));
export { GetTagsForWorkspacePathParams };
var GetTagsForWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(GetTagsForWorkspaceQueryParams, _super);
    function GetTagsForWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTagsForWorkspaceQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTagsForWorkspaceQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetTagsForWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetTagsForWorkspaceQueryParams.prototype, "optPretty", void 0);
    return GetTagsForWorkspaceQueryParams;
}(SpeakeasyBase));
export { GetTagsForWorkspaceQueryParams };
var GetTagsForWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTagsForWorkspace200ApplicationJson, _super);
    function GetTagsForWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TagCompact }),
        __metadata("design:type", Array)
    ], GetTagsForWorkspace200ApplicationJson.prototype, "data", void 0);
    return GetTagsForWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { GetTagsForWorkspace200ApplicationJson };
var GetTagsForWorkspaceRequest = /** @class */ (function (_super) {
    __extends(GetTagsForWorkspaceRequest, _super);
    function GetTagsForWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsForWorkspacePathParams)
    ], GetTagsForWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsForWorkspaceQueryParams)
    ], GetTagsForWorkspaceRequest.prototype, "queryParams", void 0);
    return GetTagsForWorkspaceRequest;
}(SpeakeasyBase));
export { GetTagsForWorkspaceRequest };
var GetTagsForWorkspaceResponse = /** @class */ (function (_super) {
    __extends(GetTagsForWorkspaceResponse, _super);
    function GetTagsForWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagsForWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetTagsForWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagsForWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsForWorkspace200ApplicationJson)
    ], GetTagsForWorkspaceResponse.prototype, "getTagsForWorkspace200ApplicationJsonObject", void 0);
    return GetTagsForWorkspaceResponse;
}(SpeakeasyBase));
export { GetTagsForWorkspaceResponse };
