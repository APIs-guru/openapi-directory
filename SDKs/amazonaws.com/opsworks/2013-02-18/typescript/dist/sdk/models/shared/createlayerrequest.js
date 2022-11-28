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
import { CloudWatchLogsConfiguration } from "./cloudwatchlogsconfiguration";
import { Recipes } from "./recipes";
import { LifecycleEventConfiguration } from "./lifecycleeventconfiguration";
import { LayerTypeEnum } from "./layertypeenum";
import { VolumeConfiguration } from "./volumeconfiguration";
var CreateLayerRequest = /** @class */ (function (_super) {
    __extends(CreateLayerRequest, _super);
    function CreateLayerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attributes" }),
        __metadata("design:type", Map)
    ], CreateLayerRequest.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoAssignElasticIps" }),
        __metadata("design:type", Boolean)
    ], CreateLayerRequest.prototype, "autoAssignElasticIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoAssignPublicIps" }),
        __metadata("design:type", Boolean)
    ], CreateLayerRequest.prototype, "autoAssignPublicIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudWatchLogsConfiguration" }),
        __metadata("design:type", CloudWatchLogsConfiguration)
    ], CreateLayerRequest.prototype, "cloudWatchLogsConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomInstanceProfileArn" }),
        __metadata("design:type", String)
    ], CreateLayerRequest.prototype, "customInstanceProfileArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomJson" }),
        __metadata("design:type", String)
    ], CreateLayerRequest.prototype, "customJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomRecipes" }),
        __metadata("design:type", Recipes)
    ], CreateLayerRequest.prototype, "customRecipes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomSecurityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateLayerRequest.prototype, "customSecurityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAutoHealing" }),
        __metadata("design:type", Boolean)
    ], CreateLayerRequest.prototype, "enableAutoHealing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstallUpdatesOnBoot" }),
        __metadata("design:type", Boolean)
    ], CreateLayerRequest.prototype, "installUpdatesOnBoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LifecycleEventConfiguration" }),
        __metadata("design:type", LifecycleEventConfiguration)
    ], CreateLayerRequest.prototype, "lifecycleEventConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateLayerRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Packages" }),
        __metadata("design:type", Array)
    ], CreateLayerRequest.prototype, "packages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Shortname" }),
        __metadata("design:type", String)
    ], CreateLayerRequest.prototype, "shortname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StackId" }),
        __metadata("design:type", String)
    ], CreateLayerRequest.prototype, "stackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], CreateLayerRequest.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UseEbsOptimizedInstances" }),
        __metadata("design:type", Boolean)
    ], CreateLayerRequest.prototype, "useEbsOptimizedInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeConfigurations", elemType: VolumeConfiguration }),
        __metadata("design:type", Array)
    ], CreateLayerRequest.prototype, "volumeConfigurations", void 0);
    return CreateLayerRequest;
}(SpeakeasyBase));
export { CreateLayerRequest };
