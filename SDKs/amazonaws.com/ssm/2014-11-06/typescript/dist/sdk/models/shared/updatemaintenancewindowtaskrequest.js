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
var UpdateMaintenanceWindowTaskRequest = /** @class */ (function (_super) {
    __extends(UpdateMaintenanceWindowTaskRequest, _super);
    function UpdateMaintenanceWindowTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoggingInfo" }),
        __metadata("design:type", LoggingInfo)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "loggingInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrency" }),
        __metadata("design:type", String)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "maxConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxErrors" }),
        __metadata("design:type", String)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "maxErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Replace" }),
        __metadata("design:type", Boolean)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "replace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" }),
        __metadata("design:type", String)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "serviceRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target }),
        __metadata("design:type", Array)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskArn" }),
        __metadata("design:type", String)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "taskArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskInvocationParameters" }),
        __metadata("design:type", MaintenanceWindowTaskInvocationParameters)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "taskInvocationParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskParameters", elemType: MaintenanceWindowTaskParameterValueExpression }),
        __metadata("design:type", Map)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "taskParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WindowId" }),
        __metadata("design:type", String)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "windowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WindowTaskId" }),
        __metadata("design:type", String)
    ], UpdateMaintenanceWindowTaskRequest.prototype, "windowTaskId", void 0);
    return UpdateMaintenanceWindowTaskRequest;
}(SpeakeasyBase));
export { UpdateMaintenanceWindowTaskRequest };
