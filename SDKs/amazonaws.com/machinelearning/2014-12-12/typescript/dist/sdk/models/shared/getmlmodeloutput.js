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
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";
import { MlModelTypeEnum } from "./mlmodeltypeenum";
import { EntityStatusEnum } from "./entitystatusenum";
// GetMlModelOutput
/**
 * Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.
**/
var GetMlModelOutput = /** @class */ (function (_super) {
    __extends(GetMlModelOutput, _super);
    function GetMlModelOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ComputeTime" }),
        __metadata("design:type", Number)
    ], GetMlModelOutput.prototype, "computeTime", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], GetMlModelOutput.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedByIamUser" }),
        __metadata("design:type", String)
    ], GetMlModelOutput.prototype, "createdByIamUser", void 0);
    __decorate([
        Metadata({ data: "json, name=EndpointInfo" }),
        __metadata("design:type", RealtimeEndpointInfo)
    ], GetMlModelOutput.prototype, "endpointInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=FinishedAt" }),
        __metadata("design:type", Date)
    ], GetMlModelOutput.prototype, "finishedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=InputDataLocationS3" }),
        __metadata("design:type", String)
    ], GetMlModelOutput.prototype, "inputDataLocationS3", void 0);
    __decorate([
        Metadata({ data: "json, name=LastUpdatedAt" }),
        __metadata("design:type", Date)
    ], GetMlModelOutput.prototype, "lastUpdatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=LogUri" }),
        __metadata("design:type", String)
    ], GetMlModelOutput.prototype, "logUri", void 0);
    __decorate([
        Metadata({ data: "json, name=MLModelId" }),
        __metadata("design:type", String)
    ], GetMlModelOutput.prototype, "mlModelId", void 0);
    __decorate([
        Metadata({ data: "json, name=MLModelType" }),
        __metadata("design:type", String)
    ], GetMlModelOutput.prototype, "mlModelType", void 0);
    __decorate([
        Metadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetMlModelOutput.prototype, "message", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetMlModelOutput.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=Recipe" }),
        __metadata("design:type", String)
    ], GetMlModelOutput.prototype, "recipe", void 0);
    __decorate([
        Metadata({ data: "json, name=Schema" }),
        __metadata("design:type", String)
    ], GetMlModelOutput.prototype, "schema", void 0);
    __decorate([
        Metadata({ data: "json, name=ScoreThreshold" }),
        __metadata("design:type", Number)
    ], GetMlModelOutput.prototype, "scoreThreshold", void 0);
    __decorate([
        Metadata({ data: "json, name=ScoreThresholdLastUpdatedAt" }),
        __metadata("design:type", Date)
    ], GetMlModelOutput.prototype, "scoreThresholdLastUpdatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=SizeInBytes" }),
        __metadata("design:type", Number)
    ], GetMlModelOutput.prototype, "sizeInBytes", void 0);
    __decorate([
        Metadata({ data: "json, name=StartedAt" }),
        __metadata("design:type", Date)
    ], GetMlModelOutput.prototype, "startedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], GetMlModelOutput.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=TrainingDataSourceId" }),
        __metadata("design:type", String)
    ], GetMlModelOutput.prototype, "trainingDataSourceId", void 0);
    __decorate([
        Metadata({ data: "json, name=TrainingParameters" }),
        __metadata("design:type", Map)
    ], GetMlModelOutput.prototype, "trainingParameters", void 0);
    return GetMlModelOutput;
}(SpeakeasyBase));
export { GetMlModelOutput };
