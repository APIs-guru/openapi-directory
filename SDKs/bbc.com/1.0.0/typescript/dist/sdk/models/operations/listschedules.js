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
export var ListSchedulesMixinEnum;
(function (ListSchedulesMixinEnum) {
    ListSchedulesMixinEnum["AncestorTitles"] = "ancestor_titles";
    ListSchedulesMixinEnum["Images"] = "images";
    ListSchedulesMixinEnum["Titles"] = "titles";
})(ListSchedulesMixinEnum || (ListSchedulesMixinEnum = {}));
export var ListSchedulesSortEnum;
(function (ListSchedulesSortEnum) {
    ListSchedulesSortEnum["StartDate"] = "start_date";
})(ListSchedulesSortEnum || (ListSchedulesSortEnum = {}));
export var ListSchedulesSortDirectionEnum;
(function (ListSchedulesSortDirectionEnum) {
    ListSchedulesSortDirectionEnum["Ascending"] = "ascending";
    ListSchedulesSortDirectionEnum["Descending"] = "descending";
})(ListSchedulesSortDirectionEnum || (ListSchedulesSortDirectionEnum = {}));
var ListSchedulesQueryParams = /** @class */ (function (_super) {
    __extends(ListSchedulesQueryParams, _super);
    function ListSchedulesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authority" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "authority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=descendants_of" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "descendantsOf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_from" }),
        __metadata("design:type", Date)
    ], ListSchedulesQueryParams.prototype, "endFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_to" }),
        __metadata("design:type", Date)
    ], ListSchedulesQueryParams.prototype, "endTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genre" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "genre", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], ListSchedulesQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id_type" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "idType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "mixin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListSchedulesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListSchedulesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_id" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_pid" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "partnerPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=people" }),
        __metadata("design:type", String)
    ], ListSchedulesQueryParams.prototype, "people", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pid" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "pid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ListSchedulesQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repeat" }),
        __metadata("design:type", Boolean)
    ], ListSchedulesQueryParams.prototype, "repeat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schedule_day" }),
        __metadata("design:type", Date)
    ], ListSchedulesQueryParams.prototype, "scheduleDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schedule_day_from" }),
        __metadata("design:type", Date)
    ], ListSchedulesQueryParams.prototype, "scheduleDayFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schedule_day_to" }),
        __metadata("design:type", Date)
    ], ListSchedulesQueryParams.prototype, "scheduleDayTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service_master_brand" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "serviceMasterBrand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sid" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListSchedulesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], ListSchedulesQueryParams.prototype, "sortDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_from" }),
        __metadata("design:type", Date)
    ], ListSchedulesQueryParams.prototype, "startFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_to" }),
        __metadata("design:type", Date)
    ], ListSchedulesQueryParams.prototype, "startTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", Array)
    ], ListSchedulesQueryParams.prototype, "version", void 0);
    return ListSchedulesQueryParams;
}(SpeakeasyBase));
export { ListSchedulesQueryParams };
var ListSchedulesRequest = /** @class */ (function (_super) {
    __extends(ListSchedulesRequest, _super);
    function ListSchedulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSchedulesQueryParams)
    ], ListSchedulesRequest.prototype, "queryParams", void 0);
    return ListSchedulesRequest;
}(SpeakeasyBase));
export { ListSchedulesRequest };
var ListSchedulesResponse = /** @class */ (function (_super) {
    __extends(ListSchedulesResponse, _super);
    function ListSchedulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ListSchedulesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSchedulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], ListSchedulesResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSchedulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListSchedulesResponse.prototype, "nitro", void 0);
    return ListSchedulesResponse;
}(SpeakeasyBase));
export { ListSchedulesResponse };
