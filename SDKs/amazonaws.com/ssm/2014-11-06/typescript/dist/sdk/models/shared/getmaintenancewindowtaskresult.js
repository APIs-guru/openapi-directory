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
import { LoggingInfo } from "./logginginfo";
import { Target } from "./target";
import { MaintenanceWindowTaskInvocationParameters } from "./maintenancewindowtaskinvocationparameters";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
var GetMaintenanceWindowTaskResult = /** @class */ (function (_super) {
    __extends(GetMaintenanceWindowTaskResult, _super);
    function GetMaintenanceWindowTaskResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowTaskResult.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoggingInfo" }),
        __metadata("design:type", LoggingInfo)
    ], GetMaintenanceWindowTaskResult.prototype, "loggingInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrency" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowTaskResult.prototype, "maxConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxErrors" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowTaskResult.prototype, "maxErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowTaskResult.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], GetMaintenanceWindowTaskResult.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowTaskResult.prototype, "serviceRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target }),
        __metadata("design:type", Array)
    ], GetMaintenanceWindowTaskResult.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskArn" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowTaskResult.prototype, "taskArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskInvocationParameters" }),
        __metadata("design:type", MaintenanceWindowTaskInvocationParameters)
    ], GetMaintenanceWindowTaskResult.prototype, "taskInvocationParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskParameters", elemType: MaintenanceWindowTaskParameterValueExpression }),
        __metadata("design:type", Map)
    ], GetMaintenanceWindowTaskResult.prototype, "taskParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskType" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowTaskResult.prototype, "taskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WindowId" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowTaskResult.prototype, "windowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WindowTaskId" }),
        __metadata("design:type", String)
    ], GetMaintenanceWindowTaskResult.prototype, "windowTaskId", void 0);
    return GetMaintenanceWindowTaskResult;
}(SpeakeasyBase));
export { GetMaintenanceWindowTaskResult };
