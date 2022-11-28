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
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentStatus } from "./trialcomponentstatus";
var UpdateTrialComponentRequest = /** @class */ (function (_super) {
    __extends(UpdateTrialComponentRequest, _super);
    function UpdateTrialComponentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], UpdateTrialComponentRequest.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], UpdateTrialComponentRequest.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputArtifacts", elemType: TrialComponentArtifact }),
        __metadata("design:type", Map)
    ], UpdateTrialComponentRequest.prototype, "inputArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputArtifactsToRemove" }),
        __metadata("design:type", Array)
    ], UpdateTrialComponentRequest.prototype, "inputArtifactsToRemove", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputArtifacts", elemType: TrialComponentArtifact }),
        __metadata("design:type", Map)
    ], UpdateTrialComponentRequest.prototype, "outputArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputArtifactsToRemove" }),
        __metadata("design:type", Array)
    ], UpdateTrialComponentRequest.prototype, "outputArtifactsToRemove", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters", elemType: TrialComponentParameterValue }),
        __metadata("design:type", Map)
    ], UpdateTrialComponentRequest.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParametersToRemove" }),
        __metadata("design:type", Array)
    ], UpdateTrialComponentRequest.prototype, "parametersToRemove", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], UpdateTrialComponentRequest.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", TrialComponentStatus)
    ], UpdateTrialComponentRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrialComponentName" }),
        __metadata("design:type", String)
    ], UpdateTrialComponentRequest.prototype, "trialComponentName", void 0);
    return UpdateTrialComponentRequest;
}(SpeakeasyBase));
export { UpdateTrialComponentRequest };
