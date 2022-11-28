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
var GetWorkspacesWorkspaceSearchCodePathParams = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceSearchCodePathParams, _super);
    function GetWorkspacesWorkspaceSearchCodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspaceSearchCodePathParams.prototype, "workspace", void 0);
    return GetWorkspacesWorkspaceSearchCodePathParams;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceSearchCodePathParams };
var GetWorkspacesWorkspaceSearchCodeQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceSearchCodeQueryParams, _super);
    function GetWorkspacesWorkspaceSearchCodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetWorkspacesWorkspaceSearchCodeQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagelen" }),
        __metadata("design:type", Number)
    ], GetWorkspacesWorkspaceSearchCodeQueryParams.prototype, "pagelen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_query" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspaceSearchCodeQueryParams.prototype, "searchQuery", void 0);
    return GetWorkspacesWorkspaceSearchCodeQueryParams;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceSearchCodeQueryParams };
var GetWorkspacesWorkspaceSearchCodeRequest = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceSearchCodeRequest, _super);
    function GetWorkspacesWorkspaceSearchCodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspaceSearchCodePathParams)
    ], GetWorkspacesWorkspaceSearchCodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspaceSearchCodeQueryParams)
    ], GetWorkspacesWorkspaceSearchCodeRequest.prototype, "queryParams", void 0);
    return GetWorkspacesWorkspaceSearchCodeRequest;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceSearchCodeRequest };
var GetWorkspacesWorkspaceSearchCodeResponse = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceSearchCodeResponse, _super);
    function GetWorkspacesWorkspaceSearchCodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspaceSearchCodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspacesWorkspaceSearchCodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetWorkspacesWorkspaceSearchCodeResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchResultPage)
    ], GetWorkspacesWorkspaceSearchCodeResponse.prototype, "searchResultPage", void 0);
    return GetWorkspacesWorkspaceSearchCodeResponse;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceSearchCodeResponse };
