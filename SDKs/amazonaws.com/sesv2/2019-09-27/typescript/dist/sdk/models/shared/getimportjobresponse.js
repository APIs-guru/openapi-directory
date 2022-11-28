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
import { FailureInfo } from "./failureinfo";
import { ImportDataSource } from "./importdatasource";
import { ImportDestination } from "./importdestination";
import { JobStatusEnum } from "./jobstatusenum";
// GetImportJobResponse
/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
**/
var GetImportJobResponse = /** @class */ (function (_super) {
    __extends(GetImportJobResponse, _super);
    function GetImportJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletedTimestamp" }),
        __metadata("design:type", Date)
    ], GetImportJobResponse.prototype, "completedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedTimestamp" }),
        __metadata("design:type", Date)
    ], GetImportJobResponse.prototype, "createdTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailedRecordsCount" }),
        __metadata("design:type", Number)
    ], GetImportJobResponse.prototype, "failedRecordsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureInfo" }),
        __metadata("design:type", FailureInfo)
    ], GetImportJobResponse.prototype, "failureInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportDataSource" }),
        __metadata("design:type", ImportDataSource)
    ], GetImportJobResponse.prototype, "importDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportDestination" }),
        __metadata("design:type", ImportDestination)
    ], GetImportJobResponse.prototype, "importDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobId" }),
        __metadata("design:type", String)
    ], GetImportJobResponse.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobStatus" }),
        __metadata("design:type", String)
    ], GetImportJobResponse.prototype, "jobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessedRecordsCount" }),
        __metadata("design:type", Number)
    ], GetImportJobResponse.prototype, "processedRecordsCount", void 0);
    return GetImportJobResponse;
}(SpeakeasyBase));
export { GetImportJobResponse };
