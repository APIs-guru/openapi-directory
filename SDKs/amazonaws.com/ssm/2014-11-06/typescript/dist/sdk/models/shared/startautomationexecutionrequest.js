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
import { ExecutionModeEnum } from "./executionmodeenum";
import { Tag } from "./tag";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";
var StartAutomationExecutionRequest = /** @class */ (function (_super) {
    __extends(StartAutomationExecutionRequest, _super);
    function StartAutomationExecutionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientToken" }),
        __metadata("design:type", String)
    ], StartAutomationExecutionRequest.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentName" }),
        __metadata("design:type", String)
    ], StartAutomationExecutionRequest.prototype, "documentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], StartAutomationExecutionRequest.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrency" }),
        __metadata("design:type", String)
    ], StartAutomationExecutionRequest.prototype, "maxConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxErrors" }),
        __metadata("design:type", String)
    ], StartAutomationExecutionRequest.prototype, "maxErrors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mode" }),
        __metadata("design:type", String)
    ], StartAutomationExecutionRequest.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters" }),
        __metadata("design:type", Map)
    ], StartAutomationExecutionRequest.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], StartAutomationExecutionRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetLocations", elemType: TargetLocation }),
        __metadata("design:type", Array)
    ], StartAutomationExecutionRequest.prototype, "targetLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetMaps" }),
        __metadata("design:type", Array)
    ], StartAutomationExecutionRequest.prototype, "targetMaps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetParameterName" }),
        __metadata("design:type", String)
    ], StartAutomationExecutionRequest.prototype, "targetParameterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target }),
        __metadata("design:type", Array)
    ], StartAutomationExecutionRequest.prototype, "targets", void 0);
    return StartAutomationExecutionRequest;
}(SpeakeasyBase));
export { StartAutomationExecutionRequest };
