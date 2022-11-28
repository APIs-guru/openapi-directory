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
var RequestRoleGroupsPathParams = /** @class */ (function (_super) {
    __extends(RequestRoleGroupsPathParams, _super);
    function RequestRoleGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role_id" }),
        __metadata("design:type", Number)
    ], RequestRoleGroupsPathParams.prototype, "roleId", void 0);
    return RequestRoleGroupsPathParams;
}(SpeakeasyBase));
export { RequestRoleGroupsPathParams };
var RequestRoleGroupsQueryParams = /** @class */ (function (_super) {
    __extends(RequestRoleGroupsQueryParams, _super);
    function RequestRoleGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RequestRoleGroupsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestRoleGroupsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestRoleGroupsQueryParams.prototype, "offset", void 0);
    return RequestRoleGroupsQueryParams;
}(SpeakeasyBase));
export { RequestRoleGroupsQueryParams };
var RequestRoleGroupsHeaders = /** @class */ (function (_super) {
    __extends(RequestRoleGroupsHeaders, _super);
    function RequestRoleGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestRoleGroupsHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestRoleGroupsHeaders;
}(SpeakeasyBase));
export { RequestRoleGroupsHeaders };
var RequestRoleGroupsRequest = /** @class */ (function (_super) {
    __extends(RequestRoleGroupsRequest, _super);
    function RequestRoleGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoleGroupsPathParams)
    ], RequestRoleGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoleGroupsQueryParams)
    ], RequestRoleGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoleGroupsHeaders)
    ], RequestRoleGroupsRequest.prototype, "headers", void 0);
    return RequestRoleGroupsRequest;
}(SpeakeasyBase));
export { RequestRoleGroupsRequest };
var RequestRoleGroupsResponse = /** @class */ (function (_super) {
    __extends(RequestRoleGroupsResponse, _super);
    function RequestRoleGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestRoleGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestRoleGroupsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoleGroupList)
    ], RequestRoleGroupsResponse.prototype, "roleGroupList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestRoleGroupsResponse.prototype, "statusCode", void 0);
    return RequestRoleGroupsResponse;
}(SpeakeasyBase));
export { RequestRoleGroupsResponse };
