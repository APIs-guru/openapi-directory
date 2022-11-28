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
var GetReportingDatesQueryParams = /** @class */ (function (_super) {
    __extends(GetReportingDatesQueryParams, _super);
    function GetReportingDatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetReportingDatesQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_create_date" }),
        __metadata("design:type", Date)
    ], GetReportingDatesQueryParams.prototype, "maxCreateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_due_date" }),
        __metadata("design:type", Date)
    ], GetReportingDatesQueryParams.prototype, "maxDueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_update_date" }),
        __metadata("design:type", Date)
    ], GetReportingDatesQueryParams.prototype, "maxUpdateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_create_date" }),
        __metadata("design:type", Date)
    ], GetReportingDatesQueryParams.prototype, "minCreateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_due_date" }),
        __metadata("design:type", Date)
    ], GetReportingDatesQueryParams.prototype, "minDueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_update_date" }),
        __metadata("design:type", Date)
    ], GetReportingDatesQueryParams.prototype, "minUpdateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetReportingDatesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetReportingDatesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_type" }),
        __metadata("design:type", Array)
    ], GetReportingDatesQueryParams.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_year" }),
        __metadata("design:type", Array)
    ], GetReportingDatesQueryParams.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetReportingDatesQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetReportingDatesQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetReportingDatesQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetReportingDatesQueryParams.prototype, "sortNullsLast", void 0);
    return GetReportingDatesQueryParams;
}(SpeakeasyBase));
export { GetReportingDatesQueryParams };
var GetReportingDatesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetReportingDatesDefaultApplicationJson, _super);
    function GetReportingDatesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", shared.OffsetInfo)
    ], GetReportingDatesDefaultApplicationJson.prototype, "pagination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ReportDate }),
        __metadata("design:type", Array)
    ], GetReportingDatesDefaultApplicationJson.prototype, "results", void 0);
    return GetReportingDatesDefaultApplicationJson;
}(SpeakeasyBase));
export { GetReportingDatesDefaultApplicationJson };
var GetReportingDatesRequest = /** @class */ (function (_super) {
    __extends(GetReportingDatesRequest, _super);
    function GetReportingDatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportingDatesQueryParams)
    ], GetReportingDatesRequest.prototype, "queryParams", void 0);
    return GetReportingDatesRequest;
}(SpeakeasyBase));
export { GetReportingDatesRequest };
var GetReportingDatesResponse = /** @class */ (function (_super) {
    __extends(GetReportingDatesResponse, _super);
    function GetReportingDatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetReportingDatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetReportingDatesDefaultApplicationJson)
    ], GetReportingDatesResponse.prototype, "getReportingDatesDefaultApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetReportingDatesResponse.prototype, "statusCode", void 0);
    return GetReportingDatesResponse;
}(SpeakeasyBase));
export { GetReportingDatesResponse };
