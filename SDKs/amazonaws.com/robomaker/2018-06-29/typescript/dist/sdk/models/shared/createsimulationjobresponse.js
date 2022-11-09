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
import { ComputeResponse } from "./computeresponse";
import { FailureBehaviorEnum } from "./failurebehaviorenum";
import { SimulationJobErrorCodeEnum } from "./simulationjoberrorcodeenum";
import { LoggingConfig } from "./loggingconfig";
import { OutputLocation } from "./outputlocation";
import { SimulationJobStatusEnum } from "./simulationjobstatusenum";
import { VpcConfigResponse } from "./vpcconfigresponse";
var CreateSimulationJobResponse = /** @class */ (function (_super) {
    __extends(CreateSimulationJobResponse, _super);
    function CreateSimulationJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], CreateSimulationJobResponse.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateSimulationJobResponse.prototype, "clientRequestToken", void 0);
    __decorate([
        Metadata({ data: "json, name=compute" }),
        __metadata("design:type", ComputeResponse)
    ], CreateSimulationJobResponse.prototype, "compute", void 0);
    __decorate([
        Metadata({ data: "json, name=dataSources", elemType: shared.DataSource }),
        __metadata("design:type", Array)
    ], CreateSimulationJobResponse.prototype, "dataSources", void 0);
    __decorate([
        Metadata({ data: "json, name=failureBehavior" }),
        __metadata("design:type", String)
    ], CreateSimulationJobResponse.prototype, "failureBehavior", void 0);
    __decorate([
        Metadata({ data: "json, name=failureCode" }),
        __metadata("design:type", String)
    ], CreateSimulationJobResponse.prototype, "failureCode", void 0);
    __decorate([
        Metadata({ data: "json, name=iamRole" }),
        __metadata("design:type", String)
    ], CreateSimulationJobResponse.prototype, "iamRole", void 0);
    __decorate([
        Metadata({ data: "json, name=lastStartedAt" }),
        __metadata("design:type", Date)
    ], CreateSimulationJobResponse.prototype, "lastStartedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], CreateSimulationJobResponse.prototype, "lastUpdatedAt", void 0);
    __decorate([
        Metadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", LoggingConfig)
    ], CreateSimulationJobResponse.prototype, "loggingConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=maxJobDurationInSeconds" }),
        __metadata("design:type", Number)
    ], CreateSimulationJobResponse.prototype, "maxJobDurationInSeconds", void 0);
    __decorate([
        Metadata({ data: "json, name=outputLocation" }),
        __metadata("design:type", OutputLocation)
    ], CreateSimulationJobResponse.prototype, "outputLocation", void 0);
    __decorate([
        Metadata({ data: "json, name=robotApplications", elemType: shared.RobotApplicationConfig }),
        __metadata("design:type", Array)
    ], CreateSimulationJobResponse.prototype, "robotApplications", void 0);
    __decorate([
        Metadata({ data: "json, name=simulationApplications", elemType: shared.SimulationApplicationConfig }),
        __metadata("design:type", Array)
    ], CreateSimulationJobResponse.prototype, "simulationApplications", void 0);
    __decorate([
        Metadata({ data: "json, name=simulationTimeMillis" }),
        __metadata("design:type", Number)
    ], CreateSimulationJobResponse.prototype, "simulationTimeMillis", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CreateSimulationJobResponse.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateSimulationJobResponse.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=vpcConfig" }),
        __metadata("design:type", VpcConfigResponse)
    ], CreateSimulationJobResponse.prototype, "vpcConfig", void 0);
    return CreateSimulationJobResponse;
}(SpeakeasyBase));
export { CreateSimulationJobResponse };
