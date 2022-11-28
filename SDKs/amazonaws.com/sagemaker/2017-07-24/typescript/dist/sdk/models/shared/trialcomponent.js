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
import { UserContext } from "./usercontext";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { MetadataProperties } from "./metadataproperties";
import { TrialComponentMetricSummary } from "./trialcomponentmetricsummary";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { Parent } from "./parent";
import { TrialComponentSource } from "./trialcomponentsource";
import { TrialComponentSourceDetail } from "./trialcomponentsourcedetail";
import { TrialComponentStatus } from "./trialcomponentstatus";
import { Tag } from "./tag";
// TrialComponent
/**
 * The properties of a trial component as returned by the <a>Search</a> API.
**/
var TrialComponent = /** @class */ (function (_super) {
    __extends(TrialComponent, _super);
    function TrialComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedBy" }),
        __metadata("design:type", UserContext)
    ], TrialComponent.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], TrialComponent.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], TrialComponent.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], TrialComponent.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputArtifacts", elemType: TrialComponentArtifact }),
        __metadata("design:type", Map)
    ], TrialComponent.prototype, "inputArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedBy" }),
        __metadata("design:type", UserContext)
    ], TrialComponent.prototype, "lastModifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], TrialComponent.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataProperties" }),
        __metadata("design:type", MetadataProperties)
    ], TrialComponent.prototype, "metadataProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Metrics", elemType: TrialComponentMetricSummary }),
        __metadata("design:type", Array)
    ], TrialComponent.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputArtifacts", elemType: TrialComponentArtifact }),
        __metadata("design:type", Map)
    ], TrialComponent.prototype, "outputArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters", elemType: TrialComponentParameterValue }),
        __metadata("design:type", Map)
    ], TrialComponent.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parents", elemType: Parent }),
        __metadata("design:type", Array)
    ], TrialComponent.prototype, "parents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Source" }),
        __metadata("design:type", TrialComponentSource)
    ], TrialComponent.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceDetail" }),
        __metadata("design:type", TrialComponentSourceDetail)
    ], TrialComponent.prototype, "sourceDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], TrialComponent.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", TrialComponentStatus)
    ], TrialComponent.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], TrialComponent.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrialComponentArn" }),
        __metadata("design:type", String)
    ], TrialComponent.prototype, "trialComponentArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrialComponentName" }),
        __metadata("design:type", String)
    ], TrialComponent.prototype, "trialComponentName", void 0);
    return TrialComponent;
}(SpeakeasyBase));
export { TrialComponent };
