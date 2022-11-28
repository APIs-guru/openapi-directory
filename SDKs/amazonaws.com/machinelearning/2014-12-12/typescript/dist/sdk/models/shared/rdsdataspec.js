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
import { RdsDatabaseCredentials } from "./rdsdatabasecredentials";
import { RdsDatabase } from "./rdsdatabase";
// RdsDataSpec
/**
 * The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.
**/
var RdsDataSpec = /** @class */ (function (_super) {
    __extends(RdsDataSpec, _super);
    function RdsDataSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataRearrangement" }),
        __metadata("design:type", String)
    ], RdsDataSpec.prototype, "dataRearrangement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataSchema" }),
        __metadata("design:type", String)
    ], RdsDataSpec.prototype, "dataSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DataSchemaUri" }),
        __metadata("design:type", String)
    ], RdsDataSpec.prototype, "dataSchemaUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseCredentials" }),
        __metadata("design:type", RdsDatabaseCredentials)
    ], RdsDataSpec.prototype, "databaseCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DatabaseInformation" }),
        __metadata("design:type", RdsDatabase)
    ], RdsDataSpec.prototype, "databaseInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceRole" }),
        __metadata("design:type", String)
    ], RdsDataSpec.prototype, "resourceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3StagingLocation" }),
        __metadata("design:type", String)
    ], RdsDataSpec.prototype, "s3StagingLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" }),
        __metadata("design:type", Array)
    ], RdsDataSpec.prototype, "securityGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SelectSqlQuery" }),
        __metadata("design:type", String)
    ], RdsDataSpec.prototype, "selectSqlQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceRole" }),
        __metadata("design:type", String)
    ], RdsDataSpec.prototype, "serviceRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetId" }),
        __metadata("design:type", String)
    ], RdsDataSpec.prototype, "subnetId", void 0);
    return RdsDataSpec;
}(SpeakeasyBase));
export { RdsDataSpec };
