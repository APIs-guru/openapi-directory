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
import { JobStatusEnum } from "./jobstatusenum";
import { JobTypeEnum } from "./jobtypeenum";
import { LastRunErrorStatus } from "./lastrunerrorstatus";
import { ManagedDataIdentifierSelectorEnum } from "./manageddataidentifierselectorenum";
import { S3JobDefinition } from "./s3jobdefinition";
import { JobScheduleFrequency } from "./jobschedulefrequency";
import { Statistics } from "./statistics";
import { UserPausedDetails } from "./userpauseddetails";
var DescribeClassificationJobResponse = /** @class */ (function (_super) {
    __extends(DescribeClassificationJobResponse, _super);
    function DescribeClassificationJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], DescribeClassificationJobResponse.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], DescribeClassificationJobResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customDataIdentifierIds" }),
        __metadata("design:type", Array)
    ], DescribeClassificationJobResponse.prototype, "customDataIdentifierIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DescribeClassificationJobResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialRun" }),
        __metadata("design:type", Boolean)
    ], DescribeClassificationJobResponse.prototype, "initialRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobArn" }),
        __metadata("design:type", String)
    ], DescribeClassificationJobResponse.prototype, "jobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], DescribeClassificationJobResponse.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobStatus" }),
        __metadata("design:type", String)
    ], DescribeClassificationJobResponse.prototype, "jobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobType" }),
        __metadata("design:type", String)
    ], DescribeClassificationJobResponse.prototype, "jobType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRunErrorStatus" }),
        __metadata("design:type", LastRunErrorStatus)
    ], DescribeClassificationJobResponse.prototype, "lastRunErrorStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRunTime" }),
        __metadata("design:type", Date)
    ], DescribeClassificationJobResponse.prototype, "lastRunTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedDataIdentifierIds" }),
        __metadata("design:type", Array)
    ], DescribeClassificationJobResponse.prototype, "managedDataIdentifierIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedDataIdentifierSelector" }),
        __metadata("design:type", String)
    ], DescribeClassificationJobResponse.prototype, "managedDataIdentifierSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DescribeClassificationJobResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3JobDefinition" }),
        __metadata("design:type", S3JobDefinition)
    ], DescribeClassificationJobResponse.prototype, "s3JobDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samplingPercentage" }),
        __metadata("design:type", Number)
    ], DescribeClassificationJobResponse.prototype, "samplingPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleFrequency" }),
        __metadata("design:type", JobScheduleFrequency)
    ], DescribeClassificationJobResponse.prototype, "scheduleFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statistics" }),
        __metadata("design:type", Statistics)
    ], DescribeClassificationJobResponse.prototype, "statistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], DescribeClassificationJobResponse.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userPausedDetails" }),
        __metadata("design:type", UserPausedDetails)
    ], DescribeClassificationJobResponse.prototype, "userPausedDetails", void 0);
    return DescribeClassificationJobResponse;
}(SpeakeasyBase));
export { DescribeClassificationJobResponse };
