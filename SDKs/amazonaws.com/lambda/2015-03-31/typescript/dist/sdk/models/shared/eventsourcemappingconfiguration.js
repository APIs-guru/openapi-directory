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
import { DestinationConfig } from "./destinationconfig";
import { SelfManagedEventSource } from "./selfmanagedeventsource";
import { SourceAccessConfiguration } from "./sourceaccessconfiguration";
import { EventSourcePositionEnum } from "./eventsourcepositionenum";
// EventSourceMappingConfiguration
/**
 * A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.
**/
var EventSourceMappingConfiguration = /** @class */ (function (_super) {
    __extends(EventSourceMappingConfiguration, _super);
    function EventSourceMappingConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BatchSize" }),
        __metadata("design:type", Number)
    ], EventSourceMappingConfiguration.prototype, "batchSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BisectBatchOnFunctionError" }),
        __metadata("design:type", Boolean)
    ], EventSourceMappingConfiguration.prototype, "bisectBatchOnFunctionError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationConfig" }),
        __metadata("design:type", DestinationConfig)
    ], EventSourceMappingConfiguration.prototype, "destinationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventSourceArn" }),
        __metadata("design:type", String)
    ], EventSourceMappingConfiguration.prototype, "eventSourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FunctionArn" }),
        __metadata("design:type", String)
    ], EventSourceMappingConfiguration.prototype, "functionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FunctionResponseTypes" }),
        __metadata("design:type", Array)
    ], EventSourceMappingConfiguration.prototype, "functionResponseTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModified" }),
        __metadata("design:type", Date)
    ], EventSourceMappingConfiguration.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastProcessingResult" }),
        __metadata("design:type", String)
    ], EventSourceMappingConfiguration.prototype, "lastProcessingResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumBatchingWindowInSeconds" }),
        __metadata("design:type", Number)
    ], EventSourceMappingConfiguration.prototype, "maximumBatchingWindowInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumRecordAgeInSeconds" }),
        __metadata("design:type", Number)
    ], EventSourceMappingConfiguration.prototype, "maximumRecordAgeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumRetryAttempts" }),
        __metadata("design:type", Number)
    ], EventSourceMappingConfiguration.prototype, "maximumRetryAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParallelizationFactor" }),
        __metadata("design:type", Number)
    ], EventSourceMappingConfiguration.prototype, "parallelizationFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Queues" }),
        __metadata("design:type", Array)
    ], EventSourceMappingConfiguration.prototype, "queues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SelfManagedEventSource" }),
        __metadata("design:type", SelfManagedEventSource)
    ], EventSourceMappingConfiguration.prototype, "selfManagedEventSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceAccessConfigurations", elemType: SourceAccessConfiguration }),
        __metadata("design:type", Array)
    ], EventSourceMappingConfiguration.prototype, "sourceAccessConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartingPosition" }),
        __metadata("design:type", String)
    ], EventSourceMappingConfiguration.prototype, "startingPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartingPositionTimestamp" }),
        __metadata("design:type", Date)
    ], EventSourceMappingConfiguration.prototype, "startingPositionTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], EventSourceMappingConfiguration.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StateTransitionReason" }),
        __metadata("design:type", String)
    ], EventSourceMappingConfiguration.prototype, "stateTransitionReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Topics" }),
        __metadata("design:type", Array)
    ], EventSourceMappingConfiguration.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TumblingWindowInSeconds" }),
        __metadata("design:type", Number)
    ], EventSourceMappingConfiguration.prototype, "tumblingWindowInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UUID" }),
        __metadata("design:type", String)
    ], EventSourceMappingConfiguration.prototype, "uuid", void 0);
    return EventSourceMappingConfiguration;
}(SpeakeasyBase));
export { EventSourceMappingConfiguration };
