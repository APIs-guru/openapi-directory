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
import { ExplainQueryStep } from "./explainquerystep";
var ExplainQueryStage = /** @class */ (function (_super) {
    __extends(ExplainQueryStage, _super);
    function ExplainQueryStage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completedParallelInputs" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "completedParallelInputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeMsAvg" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "computeMsAvg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeMsMax" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "computeMsMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeRatioAvg" }),
        __metadata("design:type", Number)
    ], ExplainQueryStage.prototype, "computeRatioAvg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeRatioMax" }),
        __metadata("design:type", Number)
    ], ExplainQueryStage.prototype, "computeRatioMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endMs" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "endMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputStages" }),
        __metadata("design:type", Array)
    ], ExplainQueryStage.prototype, "inputStages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallelInputs" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "parallelInputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readMsAvg" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "readMsAvg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readMsMax" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "readMsMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readRatioAvg" }),
        __metadata("design:type", Number)
    ], ExplainQueryStage.prototype, "readRatioAvg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readRatioMax" }),
        __metadata("design:type", Number)
    ], ExplainQueryStage.prototype, "readRatioMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordsRead" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "recordsRead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordsWritten" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "recordsWritten", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shuffleOutputBytes" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "shuffleOutputBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shuffleOutputBytesSpilled" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "shuffleOutputBytesSpilled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotMs" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "slotMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startMs" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "startMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=steps", elemType: ExplainQueryStep }),
        __metadata("design:type", Array)
    ], ExplainQueryStage.prototype, "steps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitMsAvg" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "waitMsAvg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitMsMax" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "waitMsMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitRatioAvg" }),
        __metadata("design:type", Number)
    ], ExplainQueryStage.prototype, "waitRatioAvg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitRatioMax" }),
        __metadata("design:type", Number)
    ], ExplainQueryStage.prototype, "waitRatioMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeMsAvg" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "writeMsAvg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeMsMax" }),
        __metadata("design:type", String)
    ], ExplainQueryStage.prototype, "writeMsMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeRatioAvg" }),
        __metadata("design:type", Number)
    ], ExplainQueryStage.prototype, "writeRatioAvg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeRatioMax" }),
        __metadata("design:type", Number)
    ], ExplainQueryStage.prototype, "writeRatioMax", void 0);
    return ExplainQueryStage;
}(SpeakeasyBase));
export { ExplainQueryStage };
