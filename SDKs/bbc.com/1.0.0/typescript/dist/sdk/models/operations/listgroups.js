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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var ListGroupsEmbargoedEnum;
(function (ListGroupsEmbargoedEnum) {
    ListGroupsEmbargoedEnum["Include"] = "include";
    ListGroupsEmbargoedEnum["Exclude"] = "exclude";
    ListGroupsEmbargoedEnum["Only"] = "only";
})(ListGroupsEmbargoedEnum || (ListGroupsEmbargoedEnum = {}));
export var ListGroupsGroupTypeEnum;
(function (ListGroupsGroupTypeEnum) {
    ListGroupsGroupTypeEnum["Collection"] = "collection";
    ListGroupsGroupTypeEnum["Franchise"] = "franchise";
    ListGroupsGroupTypeEnum["Gallery"] = "gallery";
    ListGroupsGroupTypeEnum["Season"] = "season";
})(ListGroupsGroupTypeEnum || (ListGroupsGroupTypeEnum = {}));
export var ListGroupsMixinEnum;
(function (ListGroupsMixinEnum) {
    ListGroupsMixinEnum["AlternateImages"] = "alternate_images";
    ListGroupsMixinEnum["GroupFor"] = "group_for";
    ListGroupsMixinEnum["Images"] = "images";
    ListGroupsMixinEnum["RelatedLinks"] = "related_links";
})(ListGroupsMixinEnum || (ListGroupsMixinEnum = {}));
export var ListGroupsSortEnum;
(function (ListGroupsSortEnum) {
    ListGroupsSortEnum["Pid"] = "pid";
})(ListGroupsSortEnum || (ListGroupsSortEnum = {}));
export var ListGroupsSortDirectionEnum;
(function (ListGroupsSortDirectionEnum) {
    ListGroupsSortDirectionEnum["Descending"] = "descending";
})(ListGroupsSortDirectionEnum || (ListGroupsSortDirectionEnum = {}));
var ListGroupsQueryParams = /** @class */ (function (_super) {
    __extends(ListGroupsQueryParams, _super);
    function ListGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=embargoed" }),
        __metadata("design:type", String)
    ], ListGroupsQueryParams.prototype, "embargoed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=for_descendants_of" }),
        __metadata("design:type", String)
    ], ListGroupsQueryParams.prototype, "forDescendantsOf", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=for_programme" }),
        __metadata("design:type", String)
    ], ListGroupsQueryParams.prototype, "forProgramme", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], ListGroupsQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group_type" }),
        __metadata("design:type", Array)
    ], ListGroupsQueryParams.prototype, "groupType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=member" }),
        __metadata("design:type", String)
    ], ListGroupsQueryParams.prototype, "member", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], ListGroupsQueryParams.prototype, "mixin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListGroupsQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListGroupsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_id" }),
        __metadata("design:type", Array)
    ], ListGroupsQueryParams.prototype, "partnerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=partner_pid" }),
        __metadata("design:type", Array)
    ], ListGroupsQueryParams.prototype, "partnerPid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pid" }),
        __metadata("design:type", Array)
    ], ListGroupsQueryParams.prototype, "pid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ListGroupsQueryParams.prototype, "q", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListGroupsQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], ListGroupsQueryParams.prototype, "sortDirection", void 0);
    return ListGroupsQueryParams;
}(SpeakeasyBase));
export { ListGroupsQueryParams };
var ListGroupsRequest = /** @class */ (function (_super) {
    __extends(ListGroupsRequest, _super);
    function ListGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListGroupsQueryParams)
    ], ListGroupsRequest.prototype, "queryParams", void 0);
    return ListGroupsRequest;
}(SpeakeasyBase));
export { ListGroupsRequest };
var ListGroupsResponse = /** @class */ (function (_super) {
    __extends(ListGroupsResponse, _super);
    function ListGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ListGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListGroupsResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListGroupsResponse.prototype, "nitro", void 0);
    return ListGroupsResponse;
}(SpeakeasyBase));
export { ListGroupsResponse };
