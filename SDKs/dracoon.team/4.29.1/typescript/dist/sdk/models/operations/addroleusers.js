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
var AddRoleUsersPathParams = /** @class */ (function (_super) {
    __extends(AddRoleUsersPathParams, _super);
    function AddRoleUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role_id" }),
        __metadata("design:type", Number)
    ], AddRoleUsersPathParams.prototype, "roleId", void 0);
    return AddRoleUsersPathParams;
}(SpeakeasyBase));
export { AddRoleUsersPathParams };
var AddRoleUsersHeaders = /** @class */ (function (_super) {
    __extends(AddRoleUsersHeaders, _super);
    function AddRoleUsersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], AddRoleUsersHeaders.prototype, "xSdsAuthToken", void 0);
    return AddRoleUsersHeaders;
}(SpeakeasyBase));
export { AddRoleUsersHeaders };
var AddRoleUsersRequest = /** @class */ (function (_super) {
    __extends(AddRoleUsersRequest, _super);
    function AddRoleUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddRoleUsersPathParams)
    ], AddRoleUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddRoleUsersHeaders)
    ], AddRoleUsersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UserIds)
    ], AddRoleUsersRequest.prototype, "request", void 0);
    return AddRoleUsersRequest;
}(SpeakeasyBase));
export { AddRoleUsersRequest };
var AddRoleUsersResponse = /** @class */ (function (_super) {
    __extends(AddRoleUsersResponse, _super);
    function AddRoleUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddRoleUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddRoleUsersResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoleUserList)
    ], AddRoleUsersResponse.prototype, "roleUserList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddRoleUsersResponse.prototype, "statusCode", void 0);
    return AddRoleUsersResponse;
}(SpeakeasyBase));
export { AddRoleUsersResponse };
