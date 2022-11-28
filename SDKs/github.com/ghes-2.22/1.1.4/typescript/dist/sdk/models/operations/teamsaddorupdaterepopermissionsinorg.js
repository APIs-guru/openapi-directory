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
var TeamsAddOrUpdateRepoPermissionsInOrgPathParams = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsInOrgPathParams, _super);
    function TeamsAddOrUpdateRepoPermissionsInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsInOrgPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsInOrgPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsInOrgPathParams.prototype, "teamSlug", void 0);
    return TeamsAddOrUpdateRepoPermissionsInOrgPathParams;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsInOrgPathParams };
export var TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum;
(function (TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum) {
    TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum["Pull"] = "pull";
    TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum["Push"] = "push";
    TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum["Admin"] = "admin";
    TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum["Maintain"] = "maintain";
    TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum["Triage"] = "triage";
})(TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum || (TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum = {}));
var TeamsAddOrUpdateRepoPermissionsInOrgRequestBody = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsInOrgRequestBody, _super);
    function TeamsAddOrUpdateRepoPermissionsInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsInOrgRequestBody.prototype, "permission", void 0);
    return TeamsAddOrUpdateRepoPermissionsInOrgRequestBody;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsInOrgRequestBody };
var TeamsAddOrUpdateRepoPermissionsInOrgRequest = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsInOrgRequest, _super);
    function TeamsAddOrUpdateRepoPermissionsInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsAddOrUpdateRepoPermissionsInOrgPathParams)
    ], TeamsAddOrUpdateRepoPermissionsInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsAddOrUpdateRepoPermissionsInOrgRequestBody)
    ], TeamsAddOrUpdateRepoPermissionsInOrgRequest.prototype, "request", void 0);
    return TeamsAddOrUpdateRepoPermissionsInOrgRequest;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsInOrgRequest };
var TeamsAddOrUpdateRepoPermissionsInOrgResponse = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsInOrgResponse, _super);
    function TeamsAddOrUpdateRepoPermissionsInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateRepoPermissionsInOrgResponse.prototype, "statusCode", void 0);
    return TeamsAddOrUpdateRepoPermissionsInOrgResponse;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsInOrgResponse };
