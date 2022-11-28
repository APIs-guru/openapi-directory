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
import { ProcessingS3CompressionTypeEnum } from "./processings3compressiontypeenum";
import { ProcessingS3DataDistributionTypeEnum } from "./processings3datadistributiontypeenum";
import { ProcessingS3DataTypeEnum } from "./processings3datatypeenum";
import { ProcessingS3InputModeEnum } from "./processings3inputmodeenum";
// ProcessingS3Input
/**
 * Configuration for downloading input data from Amazon S3 into the processing container.
**/
var ProcessingS3Input = /** @class */ (function (_super) {
    __extends(ProcessingS3Input, _super);
    function ProcessingS3Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalPath" }),
        __metadata("design:type", String)
    ], ProcessingS3Input.prototype, "localPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3CompressionType" }),
        __metadata("design:type", String)
    ], ProcessingS3Input.prototype, "s3CompressionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3DataDistributionType" }),
        __metadata("design:type", String)
    ], ProcessingS3Input.prototype, "s3DataDistributionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3DataType" }),
        __metadata("design:type", String)
    ], ProcessingS3Input.prototype, "s3DataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3InputMode" }),
        __metadata("design:type", String)
    ], ProcessingS3Input.prototype, "s3InputMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Uri" }),
        __metadata("design:type", String)
    ], ProcessingS3Input.prototype, "s3Uri", void 0);
    return ProcessingS3Input;
}(SpeakeasyBase));
export { ProcessingS3Input };
