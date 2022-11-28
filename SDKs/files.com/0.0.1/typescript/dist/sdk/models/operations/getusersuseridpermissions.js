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
var GetUsersUserIdPermissionsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersUserIdPermissionsPathParams, _super);
    function GetUsersUserIdPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], GetUsersUserIdPermissionsPathParams.prototype, "userId", void 0);
    return GetUsersUserIdPermissionsPathParams;
}(SpeakeasyBase));
export { GetUsersUserIdPermissionsPathParams };
var GetUsersUserIdPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersUserIdPermissionsQueryParams, _super);
    function GetUsersUserIdPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", Map)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gt" }),
        __metadata("design:type", Map)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filterGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gteq" }),
        __metadata("design:type", Map)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filterGteq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_like" }),
        __metadata("design:type", Map)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filterLike", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lt" }),
        __metadata("design:type", Map)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filterLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lteq" }),
        __metadata("design:type", Map)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filterLteq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" }),
        __metadata("design:type", String)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_groups" }),
        __metadata("design:type", Boolean)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "includeGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "sortBy", void 0);
    return GetUsersUserIdPermissionsQueryParams;
}(SpeakeasyBase));
export { GetUsersUserIdPermissionsQueryParams };
var GetUsersUserIdPermissionsRequest = /** @class */ (function (_super) {
    __extends(GetUsersUserIdPermissionsRequest, _super);
    function GetUsersUserIdPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersUserIdPermissionsPathParams)
    ], GetUsersUserIdPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersUserIdPermissionsQueryParams)
    ], GetUsersUserIdPermissionsRequest.prototype, "queryParams", void 0);
    return GetUsersUserIdPermissionsRequest;
}(SpeakeasyBase));
export { GetUsersUserIdPermissionsRequest };
var GetUsersUserIdPermissionsResponse = /** @class */ (function (_super) {
    __extends(GetUsersUserIdPermissionsResponse, _super);
    function GetUsersUserIdPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersUserIdPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PermissionEntity }),
        __metadata("design:type", Array)
    ], GetUsersUserIdPermissionsResponse.prototype, "permissionEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersUserIdPermissionsResponse.prototype, "statusCode", void 0);
    return GetUsersUserIdPermissionsResponse;
}(SpeakeasyBase));
export { GetUsersUserIdPermissionsResponse };
