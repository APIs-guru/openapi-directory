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
var RevokeRoleGroupsPathParams = /** @class */ (function (_super) {
    __extends(RevokeRoleGroupsPathParams, _super);
    function RevokeRoleGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role_id" }),
        __metadata("design:type", Number)
    ], RevokeRoleGroupsPathParams.prototype, "roleId", void 0);
    return RevokeRoleGroupsPathParams;
}(SpeakeasyBase));
export { RevokeRoleGroupsPathParams };
var RevokeRoleGroupsHeaders = /** @class */ (function (_super) {
    __extends(RevokeRoleGroupsHeaders, _super);
    function RevokeRoleGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RevokeRoleGroupsHeaders.prototype, "xSdsAuthToken", void 0);
    return RevokeRoleGroupsHeaders;
}(SpeakeasyBase));
export { RevokeRoleGroupsHeaders };
var RevokeRoleGroupsRequest = /** @class */ (function (_super) {
    __extends(RevokeRoleGroupsRequest, _super);
    function RevokeRoleGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RevokeRoleGroupsPathParams)
    ], RevokeRoleGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RevokeRoleGroupsHeaders)
    ], RevokeRoleGroupsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GroupIds)
    ], RevokeRoleGroupsRequest.prototype, "request", void 0);
    return RevokeRoleGroupsRequest;
}(SpeakeasyBase));
export { RevokeRoleGroupsRequest };
var RevokeRoleGroupsResponse = /** @class */ (function (_super) {
    __extends(RevokeRoleGroupsResponse, _super);
    function RevokeRoleGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RevokeRoleGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RevokeRoleGroupsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoleGroupList)
    ], RevokeRoleGroupsResponse.prototype, "roleGroupList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RevokeRoleGroupsResponse.prototype, "statusCode", void 0);
    return RevokeRoleGroupsResponse;
}(SpeakeasyBase));
export { RevokeRoleGroupsResponse };
