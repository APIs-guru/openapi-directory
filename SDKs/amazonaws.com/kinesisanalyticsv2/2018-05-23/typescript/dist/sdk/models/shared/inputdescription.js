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
import { InputParallelism } from "./inputparallelism";
import { InputProcessingConfigurationDescription } from "./inputprocessingconfigurationdescription";
import { SourceSchema } from "./sourceschema";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";
import { KinesisFirehoseInputDescription } from "./kinesisfirehoseinputdescription";
import { KinesisStreamsInputDescription } from "./kinesisstreamsinputdescription";
// InputDescription
/**
 * Describes the application input configuration for a SQL-based Kinesis Data Analytics application.
**/
var InputDescription = /** @class */ (function (_super) {
    __extends(InputDescription, _super);
    function InputDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InAppStreamNames" }),
        __metadata("design:type", Array)
    ], InputDescription.prototype, "inAppStreamNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputId" }),
        __metadata("design:type", String)
    ], InputDescription.prototype, "inputId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputParallelism" }),
        __metadata("design:type", InputParallelism)
    ], InputDescription.prototype, "inputParallelism", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputProcessingConfigurationDescription" }),
        __metadata("design:type", InputProcessingConfigurationDescription)
    ], InputDescription.prototype, "inputProcessingConfigurationDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputSchema" }),
        __metadata("design:type", SourceSchema)
    ], InputDescription.prototype, "inputSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputStartingPositionConfiguration" }),
        __metadata("design:type", InputStartingPositionConfiguration)
    ], InputDescription.prototype, "inputStartingPositionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KinesisFirehoseInputDescription" }),
        __metadata("design:type", KinesisFirehoseInputDescription)
    ], InputDescription.prototype, "kinesisFirehoseInputDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KinesisStreamsInputDescription" }),
        __metadata("design:type", KinesisStreamsInputDescription)
    ], InputDescription.prototype, "kinesisStreamsInputDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NamePrefix" }),
        __metadata("design:type", String)
    ], InputDescription.prototype, "namePrefix", void 0);
    return InputDescription;
}(SpeakeasyBase));
export { InputDescription };
