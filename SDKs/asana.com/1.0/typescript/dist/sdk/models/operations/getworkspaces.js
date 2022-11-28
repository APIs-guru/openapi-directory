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
var GetWorkspacesQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspacesQueryParams, _super);
    function GetWorkspacesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetWorkspacesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetWorkspacesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetWorkspacesQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetWorkspacesQueryParams.prototype, "optPretty", void 0);
    return GetWorkspacesQueryParams;
}(SpeakeasyBase));
export { GetWorkspacesQueryParams };
var GetWorkspaces200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWorkspaces200ApplicationJson, _super);
    function GetWorkspaces200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.WorkspaceCompact }),
        __metadata("design:type", Array)
    ], GetWorkspaces200ApplicationJson.prototype, "data", void 0);
    return GetWorkspaces200ApplicationJson;
}(SpeakeasyBase));
export { GetWorkspaces200ApplicationJson };
var GetWorkspacesRequest = /** @class */ (function (_super) {
    __extends(GetWorkspacesRequest, _super);
    function GetWorkspacesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesQueryParams)
    ], GetWorkspacesRequest.prototype, "queryParams", void 0);
    return GetWorkspacesRequest;
}(SpeakeasyBase));
export { GetWorkspacesRequest };
var GetWorkspacesResponse = /** @class */ (function (_super) {
    __extends(GetWorkspacesResponse, _super);
    function GetWorkspacesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspacesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetWorkspacesResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspacesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaces200ApplicationJson)
    ], GetWorkspacesResponse.prototype, "getWorkspaces200ApplicationJsonObject", void 0);
    return GetWorkspacesResponse;
}(SpeakeasyBase));
export { GetWorkspacesResponse };
