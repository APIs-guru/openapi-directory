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
import { ProcessingS3DataDistributionTypeEnum } from "./processings3datadistributiontypeenum";
import { ProcessingS3InputModeEnum } from "./processings3inputmodeenum";
// EndpointInput
/**
 * Input object for the endpoint
**/
var EndpointInput = /** @class */ (function (_super) {
    __extends(EndpointInput, _super);
    function EndpointInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTimeOffset" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "endTimeOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndpointName" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "endpointName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeaturesAttribute" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "featuresAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InferenceAttribute" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "inferenceAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalPath" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "localPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProbabilityAttribute" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "probabilityAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProbabilityThresholdAttribute" }),
        __metadata("design:type", Number)
    ], EndpointInput.prototype, "probabilityThresholdAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3DataDistributionType" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "s3DataDistributionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3InputMode" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "s3InputMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTimeOffset" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "startTimeOffset", void 0);
    return EndpointInput;
}(SpeakeasyBase));
export { EndpointInput };
