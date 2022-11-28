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
export var GetCalendarDatesExportRendererEnum;
(function (GetCalendarDatesExportRendererEnum) {
    GetCalendarDatesExportRendererEnum["Ics"] = "ics";
    GetCalendarDatesExportRendererEnum["Csv"] = "csv";
})(GetCalendarDatesExportRendererEnum || (GetCalendarDatesExportRendererEnum = {}));
var GetCalendarDatesExportQueryParams = /** @class */ (function (_super) {
    __extends(GetCalendarDatesExportQueryParams, _super);
    function GetCalendarDatesExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCalendarDatesExportQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=calendar_category_id" }),
        __metadata("design:type", Array)
    ], GetCalendarDatesExportQueryParams.prototype, "calendarCategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", Array)
    ], GetCalendarDatesExportQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event_id" }),
        __metadata("design:type", Number)
    ], GetCalendarDatesExportQueryParams.prototype, "eventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_end_date" }),
        __metadata("design:type", Date)
    ], GetCalendarDatesExportQueryParams.prototype, "maxEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_start_date" }),
        __metadata("design:type", Date)
    ], GetCalendarDatesExportQueryParams.prototype, "maxStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_end_date" }),
        __metadata("design:type", Date)
    ], GetCalendarDatesExportQueryParams.prototype, "minEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_start_date" }),
        __metadata("design:type", Date)
    ], GetCalendarDatesExportQueryParams.prototype, "minStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCalendarDatesExportQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCalendarDatesExportQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=renderer" }),
        __metadata("design:type", String)
    ], GetCalendarDatesExportQueryParams.prototype, "renderer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCalendarDatesExportQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCalendarDatesExportQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCalendarDatesExportQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCalendarDatesExportQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=summary" }),
        __metadata("design:type", Array)
    ], GetCalendarDatesExportQueryParams.prototype, "summary", void 0);
    return GetCalendarDatesExportQueryParams;
}(SpeakeasyBase));
export { GetCalendarDatesExportQueryParams };
var GetCalendarDatesExportRequest = /** @class */ (function (_super) {
    __extends(GetCalendarDatesExportRequest, _super);
    function GetCalendarDatesExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCalendarDatesExportQueryParams)
    ], GetCalendarDatesExportRequest.prototype, "queryParams", void 0);
    return GetCalendarDatesExportRequest;
}(SpeakeasyBase));
export { GetCalendarDatesExportRequest };
var GetCalendarDatesExportResponse = /** @class */ (function (_super) {
    __extends(GetCalendarDatesExportResponse, _super);
    function GetCalendarDatesExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CalendarDatePage)
    ], GetCalendarDatesExportResponse.prototype, "calendarDatePage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCalendarDatesExportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCalendarDatesExportResponse.prototype, "statusCode", void 0);
    return GetCalendarDatesExportResponse;
}(SpeakeasyBase));
export { GetCalendarDatesExportResponse };
