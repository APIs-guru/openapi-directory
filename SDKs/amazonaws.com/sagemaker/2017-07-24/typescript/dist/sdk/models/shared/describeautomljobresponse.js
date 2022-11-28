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
import { AutoMlJobArtifacts } from "./automljobartifacts";
import { AutoMlJobConfig } from "./automljobconfig";
import { AutoMlJobObjective } from "./automljobobjective";
import { AutoMlJobSecondaryStatusEnum } from "./automljobsecondarystatusenum";
import { AutoMlJobStatusEnum } from "./automljobstatusenum";
import { AutoMlCandidate } from "./automlcandidate";
import { AutoMlChannel } from "./automlchannel";
import { ModelDeployConfig } from "./modeldeployconfig";
import { ModelDeployResult } from "./modeldeployresult";
import { AutoMlOutputDataConfig } from "./automloutputdataconfig";
import { AutoMlPartialFailureReason } from "./automlpartialfailurereason";
import { ProblemTypeEnum } from "./problemtypeenum";
import { ResolvedAttributes } from "./resolvedattributes";
var DescribeAutoMlJobResponse = /** @class */ (function (_super) {
    __extends(DescribeAutoMlJobResponse, _super);
    function DescribeAutoMlJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMLJobArn" }),
        __metadata("design:type", String)
    ], DescribeAutoMlJobResponse.prototype, "autoMlJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMLJobArtifacts" }),
        __metadata("design:type", AutoMlJobArtifacts)
    ], DescribeAutoMlJobResponse.prototype, "autoMlJobArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMLJobConfig" }),
        __metadata("design:type", AutoMlJobConfig)
    ], DescribeAutoMlJobResponse.prototype, "autoMlJobConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMLJobName" }),
        __metadata("design:type", String)
    ], DescribeAutoMlJobResponse.prototype, "autoMlJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMLJobObjective" }),
        __metadata("design:type", AutoMlJobObjective)
    ], DescribeAutoMlJobResponse.prototype, "autoMlJobObjective", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMLJobSecondaryStatus" }),
        __metadata("design:type", String)
    ], DescribeAutoMlJobResponse.prototype, "autoMlJobSecondaryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMLJobStatus" }),
        __metadata("design:type", String)
    ], DescribeAutoMlJobResponse.prototype, "autoMlJobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BestCandidate" }),
        __metadata("design:type", AutoMlCandidate)
    ], DescribeAutoMlJobResponse.prototype, "bestCandidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeAutoMlJobResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], DescribeAutoMlJobResponse.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], DescribeAutoMlJobResponse.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GenerateCandidateDefinitionsOnly" }),
        __metadata("design:type", Boolean)
    ], DescribeAutoMlJobResponse.prototype, "generateCandidateDefinitionsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputDataConfig", elemType: AutoMlChannel }),
        __metadata("design:type", Array)
    ], DescribeAutoMlJobResponse.prototype, "inputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], DescribeAutoMlJobResponse.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelDeployConfig" }),
        __metadata("design:type", ModelDeployConfig)
    ], DescribeAutoMlJobResponse.prototype, "modelDeployConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelDeployResult" }),
        __metadata("design:type", ModelDeployResult)
    ], DescribeAutoMlJobResponse.prototype, "modelDeployResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputDataConfig" }),
        __metadata("design:type", AutoMlOutputDataConfig)
    ], DescribeAutoMlJobResponse.prototype, "outputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartialFailureReasons", elemType: AutoMlPartialFailureReason }),
        __metadata("design:type", Array)
    ], DescribeAutoMlJobResponse.prototype, "partialFailureReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProblemType" }),
        __metadata("design:type", String)
    ], DescribeAutoMlJobResponse.prototype, "problemType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResolvedAttributes" }),
        __metadata("design:type", ResolvedAttributes)
    ], DescribeAutoMlJobResponse.prototype, "resolvedAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], DescribeAutoMlJobResponse.prototype, "roleArn", void 0);
    return DescribeAutoMlJobResponse;
}(SpeakeasyBase));
export { DescribeAutoMlJobResponse };
