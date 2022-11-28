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
var TeamsCheckPermissionsForProjectLegacyPathParams = /** @class */ (function (_super) {
    __extends(TeamsCheckPermissionsForProjectLegacyPathParams, _super);
    function TeamsCheckPermissionsForProjectLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], TeamsCheckPermissionsForProjectLegacyPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsCheckPermissionsForProjectLegacyPathParams.prototype, "teamId", void 0);
    return TeamsCheckPermissionsForProjectLegacyPathParams;
}(SpeakeasyBase));
export { TeamsCheckPermissionsForProjectLegacyPathParams };
var TeamsCheckPermissionsForProjectLegacy415ApplicationJson = /** @class */ (function (_super) {
    __extends(TeamsCheckPermissionsForProjectLegacy415ApplicationJson, _super);
    function TeamsCheckPermissionsForProjectLegacy415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], TeamsCheckPermissionsForProjectLegacy415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TeamsCheckPermissionsForProjectLegacy415ApplicationJson.prototype, "message", void 0);
    return TeamsCheckPermissionsForProjectLegacy415ApplicationJson;
}(SpeakeasyBase));
export { TeamsCheckPermissionsForProjectLegacy415ApplicationJson };
var TeamsCheckPermissionsForProjectLegacyRequest = /** @class */ (function (_super) {
    __extends(TeamsCheckPermissionsForProjectLegacyRequest, _super);
    function TeamsCheckPermissionsForProjectLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsCheckPermissionsForProjectLegacyPathParams)
    ], TeamsCheckPermissionsForProjectLegacyRequest.prototype, "pathParams", void 0);
    return TeamsCheckPermissionsForProjectLegacyRequest;
}(SpeakeasyBase));
export { TeamsCheckPermissionsForProjectLegacyRequest };
var TeamsCheckPermissionsForProjectLegacyResponse = /** @class */ (function (_super) {
    __extends(TeamsCheckPermissionsForProjectLegacyResponse, _super);
    function TeamsCheckPermissionsForProjectLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsCheckPermissionsForProjectLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsCheckPermissionsForProjectLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamProject)
    ], TeamsCheckPermissionsForProjectLegacyResponse.prototype, "teamProject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsCheckPermissionsForProjectLegacy415ApplicationJson)
    ], TeamsCheckPermissionsForProjectLegacyResponse.prototype, "teamsCheckPermissionsForProjectLegacy415ApplicationJsonObject", void 0);
    return TeamsCheckPermissionsForProjectLegacyResponse;
}(SpeakeasyBase));
export { TeamsCheckPermissionsForProjectLegacyResponse };
