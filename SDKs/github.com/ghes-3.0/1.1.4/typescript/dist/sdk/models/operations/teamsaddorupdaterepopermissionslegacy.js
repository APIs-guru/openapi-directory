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
var TeamsAddOrUpdateRepoPermissionsLegacyPathParams = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsLegacyPathParams, _super);
    function TeamsAddOrUpdateRepoPermissionsLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsLegacyPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsLegacyPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateRepoPermissionsLegacyPathParams.prototype, "teamId", void 0);
    return TeamsAddOrUpdateRepoPermissionsLegacyPathParams;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsLegacyPathParams };
export var TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum;
(function (TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum) {
    TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum["Pull"] = "pull";
    TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum["Push"] = "push";
    TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum["Admin"] = "admin";
})(TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum || (TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum = {}));
var TeamsAddOrUpdateRepoPermissionsLegacyRequestBody = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsLegacyRequestBody, _super);
    function TeamsAddOrUpdateRepoPermissionsLegacyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsLegacyRequestBody.prototype, "permission", void 0);
    return TeamsAddOrUpdateRepoPermissionsLegacyRequestBody;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsLegacyRequestBody };
var TeamsAddOrUpdateRepoPermissionsLegacyRequest = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsLegacyRequest, _super);
    function TeamsAddOrUpdateRepoPermissionsLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsAddOrUpdateRepoPermissionsLegacyPathParams)
    ], TeamsAddOrUpdateRepoPermissionsLegacyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsAddOrUpdateRepoPermissionsLegacyRequestBody)
    ], TeamsAddOrUpdateRepoPermissionsLegacyRequest.prototype, "request", void 0);
    return TeamsAddOrUpdateRepoPermissionsLegacyRequest;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsLegacyRequest };
var TeamsAddOrUpdateRepoPermissionsLegacyResponse = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsLegacyResponse, _super);
    function TeamsAddOrUpdateRepoPermissionsLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateRepoPermissionsLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], TeamsAddOrUpdateRepoPermissionsLegacyResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], TeamsAddOrUpdateRepoPermissionsLegacyResponse.prototype, "validationError", void 0);
    return TeamsAddOrUpdateRepoPermissionsLegacyResponse;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsLegacyResponse };
