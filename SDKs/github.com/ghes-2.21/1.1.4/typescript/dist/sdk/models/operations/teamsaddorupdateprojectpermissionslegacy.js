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
var TeamsAddOrUpdateProjectPermissionsLegacyPathParams = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsLegacyPathParams, _super);
    function TeamsAddOrUpdateProjectPermissionsLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateProjectPermissionsLegacyPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateProjectPermissionsLegacyPathParams.prototype, "teamId", void 0);
    return TeamsAddOrUpdateProjectPermissionsLegacyPathParams;
}(SpeakeasyBase));
export { TeamsAddOrUpdateProjectPermissionsLegacyPathParams };
export var TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum;
(function (TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum) {
    TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum["Read"] = "read";
    TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum["Write"] = "write";
    TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum["Admin"] = "admin";
})(TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum || (TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum = {}));
var TeamsAddOrUpdateProjectPermissionsLegacyRequestBody = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsLegacyRequestBody, _super);
    function TeamsAddOrUpdateProjectPermissionsLegacyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsLegacyRequestBody.prototype, "permission", void 0);
    return TeamsAddOrUpdateProjectPermissionsLegacyRequestBody;
}(SpeakeasyBase));
export { TeamsAddOrUpdateProjectPermissionsLegacyRequestBody };
var TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson, _super);
    function TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson.prototype, "message", void 0);
    return TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson;
}(SpeakeasyBase));
export { TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson };
var TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson, _super);
    function TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson.prototype, "message", void 0);
    return TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson;
}(SpeakeasyBase));
export { TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson };
var TeamsAddOrUpdateProjectPermissionsLegacyRequest = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsLegacyRequest, _super);
    function TeamsAddOrUpdateProjectPermissionsLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsAddOrUpdateProjectPermissionsLegacyPathParams)
    ], TeamsAddOrUpdateProjectPermissionsLegacyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsAddOrUpdateProjectPermissionsLegacyRequestBody)
    ], TeamsAddOrUpdateProjectPermissionsLegacyRequest.prototype, "request", void 0);
    return TeamsAddOrUpdateProjectPermissionsLegacyRequest;
}(SpeakeasyBase));
export { TeamsAddOrUpdateProjectPermissionsLegacyRequest };
var TeamsAddOrUpdateProjectPermissionsLegacyResponse = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsLegacyResponse, _super);
    function TeamsAddOrUpdateProjectPermissionsLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateProjectPermissionsLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], TeamsAddOrUpdateProjectPermissionsLegacyResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson)
    ], TeamsAddOrUpdateProjectPermissionsLegacyResponse.prototype, "teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson)
    ], TeamsAddOrUpdateProjectPermissionsLegacyResponse.prototype, "teamsAddOrUpdateProjectPermissionsLegacy415ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], TeamsAddOrUpdateProjectPermissionsLegacyResponse.prototype, "validationError", void 0);
    return TeamsAddOrUpdateProjectPermissionsLegacyResponse;
}(SpeakeasyBase));
export { TeamsAddOrUpdateProjectPermissionsLegacyResponse };
