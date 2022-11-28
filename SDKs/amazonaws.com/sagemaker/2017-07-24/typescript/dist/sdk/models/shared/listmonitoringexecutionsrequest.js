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
import { MonitoringExecutionSortKeyEnum } from "./monitoringexecutionsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
var ListMonitoringExecutionsRequest = /** @class */ (function (_super) {
    __extends(ListMonitoringExecutionsRequest, _super);
    function ListMonitoringExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTimeAfter" }),
        __metadata("design:type", Date)
    ], ListMonitoringExecutionsRequest.prototype, "creationTimeAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTimeBefore" }),
        __metadata("design:type", Date)
    ], ListMonitoringExecutionsRequest.prototype, "creationTimeBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointName" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsRequest.prototype, "endpointName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTimeAfter" }),
        __metadata("design:type", Date)
    ], ListMonitoringExecutionsRequest.prototype, "lastModifiedTimeAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTimeBefore" }),
        __metadata("design:type", Date)
    ], ListMonitoringExecutionsRequest.prototype, "lastModifiedTimeBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListMonitoringExecutionsRequest.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringJobDefinitionName" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsRequest.prototype, "monitoringJobDefinitionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsRequest.prototype, "monitoringScheduleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonitoringTypeEquals" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsRequest.prototype, "monitoringTypeEquals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsRequest.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledTimeAfter" }),
        __metadata("design:type", Date)
    ], ListMonitoringExecutionsRequest.prototype, "scheduledTimeAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledTimeBefore" }),
        __metadata("design:type", Date)
    ], ListMonitoringExecutionsRequest.prototype, "scheduledTimeBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortBy" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsRequest.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortOrder" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsRequest.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusEquals" }),
        __metadata("design:type", String)
    ], ListMonitoringExecutionsRequest.prototype, "statusEquals", void 0);
    return ListMonitoringExecutionsRequest;
}(SpeakeasyBase));
export { ListMonitoringExecutionsRequest };
