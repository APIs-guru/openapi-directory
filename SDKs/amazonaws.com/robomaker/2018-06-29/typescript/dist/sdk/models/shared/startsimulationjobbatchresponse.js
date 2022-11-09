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
import * as shared from "../shared";
import { BatchPolicy } from "./batchpolicy";
import { SimulationJobBatchErrorCodeEnum } from "./simulationjobbatcherrorcodeenum";
import { SimulationJobBatchStatusEnum } from "./simulationjobbatchstatusenum";
var StartSimulationJobBatchResponse = /** @class */ (function (_super) {
    __extends(StartSimulationJobBatchResponse, _super);
    function StartSimulationJobBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchResponse.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=batchPolicy" }),
        __metadata("design:type", BatchPolicy)
    ], StartSimulationJobBatchResponse.prototype, "batchPolicy", void 0);
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchResponse.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], StartSimulationJobBatchResponse.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=createdRequests", elemType: shared.SimulationJobSummary }),
        __metadata("design:type", Array)
    ], StartSimulationJobBatchResponse.prototype, "createdRequests", void 0);
    __decorate([
        Metadata({ data: "json, name=failedRequests", elemType: shared.FailedCreateSimulationJobRequest }),
        __metadata("design:type", Array)
    ], StartSimulationJobBatchResponse.prototype, "failedRequests", void 0);
    __decorate([
        Metadata({ data: "json, name=failureCode" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchResponse.prototype, "failureCode", void 0);
    __decorate([
        Metadata({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchResponse.prototype, "failureReason", void 0);
    __decorate([
        Metadata({ data: "json, name=pendingRequests", elemType: shared.SimulationJobRequest }),
        __metadata("design:type", Array)
    ], StartSimulationJobBatchResponse.prototype, "pendingRequests", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchResponse.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], StartSimulationJobBatchResponse.prototype, "tags", void 0);
    return StartSimulationJobBatchResponse;
}(SpeakeasyBase));
export { StartSimulationJobBatchResponse };
