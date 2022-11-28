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
var TeamsAddOrUpdateRepoPermissionsPathParams = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsPathParams, _super);
    function TeamsAddOrUpdateRepoPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsPathParams.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateRepoPermissionsPathParams.prototype, "teamId", void 0);
    return TeamsAddOrUpdateRepoPermissionsPathParams;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsPathParams };
export var TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum;
(function (TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum) {
    TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum["Pull"] = "pull";
    TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum["Push"] = "push";
    TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum["Admin"] = "admin";
})(TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum || (TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum = {}));
var TeamsAddOrUpdateRepoPermissionsRequestBody = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsRequestBody, _super);
    function TeamsAddOrUpdateRepoPermissionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsRequestBody.prototype, "permission", void 0);
    return TeamsAddOrUpdateRepoPermissionsRequestBody;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsRequestBody };
var TeamsAddOrUpdateRepoPermissionsRequest = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsRequest, _super);
    function TeamsAddOrUpdateRepoPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsAddOrUpdateRepoPermissionsPathParams)
    ], TeamsAddOrUpdateRepoPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsAddOrUpdateRepoPermissionsRequestBody)
    ], TeamsAddOrUpdateRepoPermissionsRequest.prototype, "request", void 0);
    return TeamsAddOrUpdateRepoPermissionsRequest;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsRequest };
var TeamsAddOrUpdateRepoPermissionsResponse = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateRepoPermissionsResponse, _super);
    function TeamsAddOrUpdateRepoPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateRepoPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateRepoPermissionsResponse.prototype, "statusCode", void 0);
    return TeamsAddOrUpdateRepoPermissionsResponse;
}(SpeakeasyBase));
export { TeamsAddOrUpdateRepoPermissionsResponse };
