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
var TeamsAddOrUpdateProjectPermissionsInOrgPathParams = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsInOrgPathParams, _super);
    function TeamsAddOrUpdateProjectPermissionsInOrgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsInOrgPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateProjectPermissionsInOrgPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsInOrgPathParams.prototype, "teamSlug", void 0);
    return TeamsAddOrUpdateProjectPermissionsInOrgPathParams;
}(SpeakeasyBase));
export { TeamsAddOrUpdateProjectPermissionsInOrgPathParams };
export var TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum;
(function (TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum) {
    TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum["Read"] = "read";
    TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum["Write"] = "write";
    TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum["Admin"] = "admin";
})(TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum || (TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum = {}));
var TeamsAddOrUpdateProjectPermissionsInOrgRequestBody = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsInOrgRequestBody, _super);
    function TeamsAddOrUpdateProjectPermissionsInOrgRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsInOrgRequestBody.prototype, "permission", void 0);
    return TeamsAddOrUpdateProjectPermissionsInOrgRequestBody;
}(SpeakeasyBase));
export { TeamsAddOrUpdateProjectPermissionsInOrgRequestBody };
var TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson, _super);
    function TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson.prototype, "message", void 0);
    return TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson;
}(SpeakeasyBase));
export { TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson };
var TeamsAddOrUpdateProjectPermissionsInOrgRequest = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsInOrgRequest, _super);
    function TeamsAddOrUpdateProjectPermissionsInOrgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsAddOrUpdateProjectPermissionsInOrgPathParams)
    ], TeamsAddOrUpdateProjectPermissionsInOrgRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsAddOrUpdateProjectPermissionsInOrgRequestBody)
    ], TeamsAddOrUpdateProjectPermissionsInOrgRequest.prototype, "request", void 0);
    return TeamsAddOrUpdateProjectPermissionsInOrgRequest;
}(SpeakeasyBase));
export { TeamsAddOrUpdateProjectPermissionsInOrgRequest };
var TeamsAddOrUpdateProjectPermissionsInOrgResponse = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsInOrgResponse, _super);
    function TeamsAddOrUpdateProjectPermissionsInOrgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsInOrgResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateProjectPermissionsInOrgResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson)
    ], TeamsAddOrUpdateProjectPermissionsInOrgResponse.prototype, "teamsAddOrUpdateProjectPermissionsInOrg403ApplicationJsonObject", void 0);
    return TeamsAddOrUpdateProjectPermissionsInOrgResponse;
}(SpeakeasyBase));
export { TeamsAddOrUpdateProjectPermissionsInOrgResponse };
