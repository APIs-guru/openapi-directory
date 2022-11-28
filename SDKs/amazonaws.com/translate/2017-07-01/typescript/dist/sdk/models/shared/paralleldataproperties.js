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
import { EncryptionKey } from "./encryptionkey";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";
import { ParallelDataConfig } from "./paralleldataconfig";
// ParallelDataProperties
/**
 * The properties of a parallel data resource.
**/
var ParallelDataProperties = /** @class */ (function (_super) {
    __extends(ParallelDataProperties, _super);
    function ParallelDataProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], ParallelDataProperties.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], ParallelDataProperties.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ParallelDataProperties.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionKey" }),
        __metadata("design:type", EncryptionKey)
    ], ParallelDataProperties.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailedRecordCount" }),
        __metadata("design:type", Number)
    ], ParallelDataProperties.prototype, "failedRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportedDataSize" }),
        __metadata("design:type", Number)
    ], ParallelDataProperties.prototype, "importedDataSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImportedRecordCount" }),
        __metadata("design:type", Number)
    ], ParallelDataProperties.prototype, "importedRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" }),
        __metadata("design:type", Date)
    ], ParallelDataProperties.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LatestUpdateAttemptAt" }),
        __metadata("design:type", Date)
    ], ParallelDataProperties.prototype, "latestUpdateAttemptAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LatestUpdateAttemptStatus" }),
        __metadata("design:type", String)
    ], ParallelDataProperties.prototype, "latestUpdateAttemptStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], ParallelDataProperties.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ParallelDataProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParallelDataConfig" }),
        __metadata("design:type", ParallelDataConfig)
    ], ParallelDataProperties.prototype, "parallelDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SkippedRecordCount" }),
        __metadata("design:type", Number)
    ], ParallelDataProperties.prototype, "skippedRecordCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceLanguageCode" }),
        __metadata("design:type", String)
    ], ParallelDataProperties.prototype, "sourceLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ParallelDataProperties.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetLanguageCodes" }),
        __metadata("design:type", Array)
    ], ParallelDataProperties.prototype, "targetLanguageCodes", void 0);
    return ParallelDataProperties;
}(SpeakeasyBase));
export { ParallelDataProperties };
