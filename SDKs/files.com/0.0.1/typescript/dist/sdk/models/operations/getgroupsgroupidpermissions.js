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
var GetGroupsGroupIdPermissionsPathParams = /** @class */ (function (_super) {
    __extends(GetGroupsGroupIdPermissionsPathParams, _super);
    function GetGroupsGroupIdPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" }),
        __metadata("design:type", String)
    ], GetGroupsGroupIdPermissionsPathParams.prototype, "groupId", void 0);
    return GetGroupsGroupIdPermissionsPathParams;
}(SpeakeasyBase));
export { GetGroupsGroupIdPermissionsPathParams };
var GetGroupsGroupIdPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(GetGroupsGroupIdPermissionsQueryParams, _super);
    function GetGroupsGroupIdPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", Map)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gt" }),
        __metadata("design:type", Map)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "filterGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gteq" }),
        __metadata("design:type", Map)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "filterGteq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_like" }),
        __metadata("design:type", Map)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "filterLike", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lt" }),
        __metadata("design:type", Map)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "filterLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lteq" }),
        __metadata("design:type", Map)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "filterLteq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_groups" }),
        __metadata("design:type", Boolean)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "includeGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", String)
    ], GetGroupsGroupIdPermissionsQueryParams.prototype, "userId", void 0);
    return GetGroupsGroupIdPermissionsQueryParams;
}(SpeakeasyBase));
export { GetGroupsGroupIdPermissionsQueryParams };
var GetGroupsGroupIdPermissionsRequest = /** @class */ (function (_super) {
    __extends(GetGroupsGroupIdPermissionsRequest, _super);
    function GetGroupsGroupIdPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupsGroupIdPermissionsPathParams)
    ], GetGroupsGroupIdPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupsGroupIdPermissionsQueryParams)
    ], GetGroupsGroupIdPermissionsRequest.prototype, "queryParams", void 0);
    return GetGroupsGroupIdPermissionsRequest;
}(SpeakeasyBase));
export { GetGroupsGroupIdPermissionsRequest };
var GetGroupsGroupIdPermissionsResponse = /** @class */ (function (_super) {
    __extends(GetGroupsGroupIdPermissionsResponse, _super);
    function GetGroupsGroupIdPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGroupsGroupIdPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PermissionEntity }),
        __metadata("design:type", Array)
    ], GetGroupsGroupIdPermissionsResponse.prototype, "permissionEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGroupsGroupIdPermissionsResponse.prototype, "statusCode", void 0);
    return GetGroupsGroupIdPermissionsResponse;
}(SpeakeasyBase));
export { GetGroupsGroupIdPermissionsResponse };
