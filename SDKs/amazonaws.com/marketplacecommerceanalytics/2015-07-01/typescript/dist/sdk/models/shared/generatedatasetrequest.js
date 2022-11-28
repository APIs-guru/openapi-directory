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
import { DataSetTypeEnum } from "./datasettypeenum";
// GenerateDataSetRequest
/**
 * Container for the parameters to the GenerateDataSet operation.
**/
var GenerateDataSetRequest = /** @class */ (function (_super) {
    __extends(GenerateDataSetRequest, _super);
    function GenerateDataSetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerDefinedValues" }),
        __metadata("design:type", Map)
    ], GenerateDataSetRequest.prototype, "customerDefinedValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSetPublicationDate" }),
        __metadata("design:type", Date)
    ], GenerateDataSetRequest.prototype, "dataSetPublicationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSetType" }),
        __metadata("design:type", String)
    ], GenerateDataSetRequest.prototype, "dataSetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationS3BucketName" }),
        __metadata("design:type", String)
    ], GenerateDataSetRequest.prototype, "destinationS3BucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationS3Prefix" }),
        __metadata("design:type", String)
    ], GenerateDataSetRequest.prototype, "destinationS3Prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleNameArn" }),
        __metadata("design:type", String)
    ], GenerateDataSetRequest.prototype, "roleNameArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snsTopicArn" }),
        __metadata("design:type", String)
    ], GenerateDataSetRequest.prototype, "snsTopicArn", void 0);
    return GenerateDataSetRequest;
}(SpeakeasyBase));
export { GenerateDataSetRequest };
