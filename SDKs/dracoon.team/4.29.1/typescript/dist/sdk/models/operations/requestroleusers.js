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
var RequestRoleUsersPathParams = /** @class */ (function (_super) {
    __extends(RequestRoleUsersPathParams, _super);
    function RequestRoleUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role_id" }),
        __metadata("design:type", Number)
    ], RequestRoleUsersPathParams.prototype, "roleId", void 0);
    return RequestRoleUsersPathParams;
}(SpeakeasyBase));
export { RequestRoleUsersPathParams };
var RequestRoleUsersQueryParams = /** @class */ (function (_super) {
    __extends(RequestRoleUsersQueryParams, _super);
    function RequestRoleUsersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestRoleUsersQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestRoleUsersQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestRoleUsersQueryParams.prototype, "offset", void 0);
    return RequestRoleUsersQueryParams;
}(SpeakeasyBase));
export { RequestRoleUsersQueryParams };
var RequestRoleUsersHeaders = /** @class */ (function (_super) {
    __extends(RequestRoleUsersHeaders, _super);
    function RequestRoleUsersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestRoleUsersHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestRoleUsersHeaders;
}(SpeakeasyBase));
export { RequestRoleUsersHeaders };
var RequestRoleUsersRequest = /** @class */ (function (_super) {
    __extends(RequestRoleUsersRequest, _super);
    function RequestRoleUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoleUsersPathParams)
    ], RequestRoleUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoleUsersQueryParams)
    ], RequestRoleUsersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoleUsersHeaders)
    ], RequestRoleUsersRequest.prototype, "headers", void 0);
    return RequestRoleUsersRequest;
}(SpeakeasyBase));
export { RequestRoleUsersRequest };
var RequestRoleUsersResponse = /** @class */ (function (_super) {
    __extends(RequestRoleUsersResponse, _super);
    function RequestRoleUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestRoleUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestRoleUsersResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoleUserList)
    ], RequestRoleUsersResponse.prototype, "roleUserList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestRoleUsersResponse.prototype, "statusCode", void 0);
    return RequestRoleUsersResponse;
}(SpeakeasyBase));
export { RequestRoleUsersResponse };
