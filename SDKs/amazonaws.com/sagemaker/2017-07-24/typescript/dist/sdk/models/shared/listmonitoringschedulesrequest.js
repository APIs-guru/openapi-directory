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
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { MonitoringScheduleSortKeyEnum } from "./monitoringschedulesortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
import { ScheduleStatusEnum } from "./schedulestatusenum";
var ListMonitoringSchedulesRequest = /** @class */ (function (_super) {
    __extends(ListMonitoringSchedulesRequest, _super);
    function ListMonitoringSchedulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTimeAfter" }),
        __metadata("design:type", Date)
    ], ListMonitoringSchedulesRequest.prototype, "creationTimeAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTimeBefore" }),
        __metadata("design:type", Date)
    ], ListMonitoringSchedulesRequest.prototype, "creationTimeBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointName" }),
        __metadata("design:type", String)
    ], ListMonitoringSchedulesRequest.prototype, "endpointName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTimeAfter" }),
        __metadata("design:type", Date)
    ], ListMonitoringSchedulesRequest.prototype, "lastModifiedTimeAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTimeBefore" }),
        __metadata("design:type", Date)
    ], ListMonitoringSchedulesRequest.prototype, "lastModifiedTimeBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListMonitoringSchedulesRequest.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringJobDefinitionName" }),
        __metadata("design:type", String)
    ], ListMonitoringSchedulesRequest.prototype, "monitoringJobDefinitionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringTypeEquals" }),
        __metadata("design:type", String)
    ], ListMonitoringSchedulesRequest.prototype, "monitoringTypeEquals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NameContains" }),
        __metadata("design:type", String)
    ], ListMonitoringSchedulesRequest.prototype, "nameContains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListMonitoringSchedulesRequest.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortBy" }),
        __metadata("design:type", String)
    ], ListMonitoringSchedulesRequest.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortOrder" }),
        __metadata("design:type", String)
    ], ListMonitoringSchedulesRequest.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusEquals" }),
        __metadata("design:type", String)
    ], ListMonitoringSchedulesRequest.prototype, "statusEquals", void 0);
    return ListMonitoringSchedulesRequest;
}(SpeakeasyBase));
export { ListMonitoringSchedulesRequest };
