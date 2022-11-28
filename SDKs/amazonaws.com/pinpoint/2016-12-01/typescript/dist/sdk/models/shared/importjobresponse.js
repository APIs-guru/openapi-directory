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
import { ImportJobResource } from "./importjobresource";
import { JobStatusEnum } from "./jobstatusenum";
// ImportJobResponse
/**
 * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
**/
var ImportJobResponse = /** @class */ (function (_super) {
    __extends(ImportJobResponse, _super);
    function ImportJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationId" }),
        __metadata("design:type", String)
    ], ImportJobResponse.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletedPieces" }),
        __metadata("design:type", Number)
    ], ImportJobResponse.prototype, "completedPieces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDate" }),
        __metadata("design:type", String)
    ], ImportJobResponse.prototype, "completionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], ImportJobResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Definition" }),
        __metadata("design:type", ImportJobResource)
    ], ImportJobResponse.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailedPieces" }),
        __metadata("design:type", Number)
    ], ImportJobResponse.prototype, "failedPieces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Failures" }),
        __metadata("design:type", Array)
    ], ImportJobResponse.prototype, "failures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ImportJobResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobStatus" }),
        __metadata("design:type", String)
    ], ImportJobResponse.prototype, "jobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalFailures" }),
        __metadata("design:type", Number)
    ], ImportJobResponse.prototype, "totalFailures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalPieces" }),
        __metadata("design:type", Number)
    ], ImportJobResponse.prototype, "totalPieces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalProcessed" }),
        __metadata("design:type", Number)
    ], ImportJobResponse.prototype, "totalProcessed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ImportJobResponse.prototype, "type", void 0);
    return ImportJobResponse;
}(SpeakeasyBase));
export { ImportJobResponse };
