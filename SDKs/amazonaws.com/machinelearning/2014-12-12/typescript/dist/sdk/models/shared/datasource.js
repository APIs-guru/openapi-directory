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
import { RdsMetadata } from "./rdsmetadata";
import { RedshiftMetadata } from "./redshiftmetadata";
import { EntityStatusEnum } from "./entitystatusenum";
// DataSource
/**
 * <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>
**/
var DataSource = /** @class */ (function (_super) {
    __extends(DataSource, _super);
    function DataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComputeStatistics" }),
        __metadata("design:type", Boolean)
    ], DataSource.prototype, "computeStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComputeTime" }),
        __metadata("design:type", Number)
    ], DataSource.prototype, "computeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], DataSource.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedByIamUser" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "createdByIamUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataLocationS3" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "dataLocationS3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataRearrangement" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "dataRearrangement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataSizeInBytes" }),
        __metadata("design:type", Number)
    ], DataSource.prototype, "dataSizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataSourceId" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "dataSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinishedAt" }),
        __metadata("design:type", Date)
    ], DataSource.prototype, "finishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" }),
        __metadata("design:type", Date)
    ], DataSource.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfFiles" }),
        __metadata("design:type", Number)
    ], DataSource.prototype, "numberOfFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RDSMetadata" }),
        __metadata("design:type", RdsMetadata)
    ], DataSource.prototype, "rdsMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RedshiftMetadata" }),
        __metadata("design:type", RedshiftMetadata)
    ], DataSource.prototype, "redshiftMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleARN" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartedAt" }),
        __metadata("design:type", Date)
    ], DataSource.prototype, "startedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "status", void 0);
    return DataSource;
}(SpeakeasyBase));
export { DataSource };
