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
export var ListBroadcastsMixinEnum;
(function (ListBroadcastsMixinEnum) {
    ListBroadcastsMixinEnum["Titles"] = "titles";
})(ListBroadcastsMixinEnum || (ListBroadcastsMixinEnum = {}));
export var ListBroadcastsSortEnum;
(function (ListBroadcastsSortEnum) {
    ListBroadcastsSortEnum["StartDate"] = "start_date";
})(ListBroadcastsSortEnum || (ListBroadcastsSortEnum = {}));
export var ListBroadcastsSortDirectionEnum;
(function (ListBroadcastsSortDirectionEnum) {
    ListBroadcastsSortDirectionEnum["Ascending"] = "ascending";
    ListBroadcastsSortDirectionEnum["Descending"] = "descending";
})(ListBroadcastsSortDirectionEnum || (ListBroadcastsSortDirectionEnum = {}));
var ListBroadcastsQueryParams = /** @class */ (function (_super) {
    __extends(ListBroadcastsQueryParams, _super);
    function ListBroadcastsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=authority" }),
        __metadata("design:type", Array)
    ], ListBroadcastsQueryParams.prototype, "authority", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=descendants_of" }),
        __metadata("design:type", Array)
    ], ListBroadcastsQueryParams.prototype, "descendantsOf", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end_from" }),
        __metadata("design:type", Date)
    ], ListBroadcastsQueryParams.prototype, "endFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end_to" }),
        __metadata("design:type", Date)
    ], ListBroadcastsQueryParams.prototype, "endTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", Array)
    ], ListBroadcastsQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=genre" }),
        __metadata("design:type", Array)
    ], ListBroadcastsQueryParams.prototype, "genre", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], ListBroadcastsQueryParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=item" }),
        __metadata("design:type", Array)
    ], ListBroadcastsQueryParams.prototype, "item", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], ListBroadcastsQueryParams.prototype, "mixin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListBroadcastsQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListBroadcastsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=people" }),
        __metadata("design:type", String)
    ], ListBroadcastsQueryParams.prototype, "people", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pid" }),
        __metadata("design:type", Array)
    ], ListBroadcastsQueryParams.prototype, "pid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ListBroadcastsQueryParams.prototype, "q", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=schedule_day" }),
        __metadata("design:type", Date)
    ], ListBroadcastsQueryParams.prototype, "scheduleDay", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=schedule_day_from" }),
        __metadata("design:type", Date)
    ], ListBroadcastsQueryParams.prototype, "scheduleDayFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=schedule_day_to" }),
        __metadata("design:type", Date)
    ], ListBroadcastsQueryParams.prototype, "scheduleDayTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=service_master_brand" }),
        __metadata("design:type", Array)
    ], ListBroadcastsQueryParams.prototype, "serviceMasterBrand", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sid" }),
        __metadata("design:type", Array)
    ], ListBroadcastsQueryParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListBroadcastsQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], ListBroadcastsQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start_from" }),
        __metadata("design:type", Date)
    ], ListBroadcastsQueryParams.prototype, "startFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start_to" }),
        __metadata("design:type", Date)
    ], ListBroadcastsQueryParams.prototype, "startTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", Array)
    ], ListBroadcastsQueryParams.prototype, "version", void 0);
    return ListBroadcastsQueryParams;
}(SpeakeasyBase));
export { ListBroadcastsQueryParams };
var ListBroadcastsRequest = /** @class */ (function (_super) {
    __extends(ListBroadcastsRequest, _super);
    function ListBroadcastsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListBroadcastsQueryParams)
    ], ListBroadcastsRequest.prototype, "queryParams", void 0);
    return ListBroadcastsRequest;
}(SpeakeasyBase));
export { ListBroadcastsRequest };
var ListBroadcastsResponse = /** @class */ (function (_super) {
    __extends(ListBroadcastsResponse, _super);
    function ListBroadcastsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ListBroadcastsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListBroadcastsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListBroadcastsResponse.prototype, "errorModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListBroadcastsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListBroadcastsResponse.prototype, "nitro", void 0);
    return ListBroadcastsResponse;
}(SpeakeasyBase));
export { ListBroadcastsResponse };
