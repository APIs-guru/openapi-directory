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
import { RelationalDatabaseHardware } from "./relationaldatabasehardware";
import { ResourceLocation } from "./resourcelocation";
import { RelationalDatabaseEndpoint } from "./relationaldatabaseendpoint";
import { PendingMaintenanceAction } from "./pendingmaintenanceaction";
import { PendingModifiedRelationalDatabaseValues } from "./pendingmodifiedrelationaldatabasevalues";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
// RelationalDatabase
/**
 * Describes a database.
**/
var RelationalDatabase = /** @class */ (function (_super) {
    __extends(RelationalDatabase, _super);
    function RelationalDatabase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backupRetentionEnabled" }),
        __metadata("design:type", Boolean)
    ], RelationalDatabase.prototype, "backupRetentionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificateIdentifier" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "caCertificateIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], RelationalDatabase.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engine" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engineVersion" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hardware" }),
        __metadata("design:type", RelationalDatabaseHardware)
    ], RelationalDatabase.prototype, "hardware", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestRestorableTime" }),
        __metadata("design:type", Date)
    ], RelationalDatabase.prototype, "latestRestorableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", ResourceLocation)
    ], RelationalDatabase.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterDatabaseName" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "masterDatabaseName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterEndpoint" }),
        __metadata("design:type", RelationalDatabaseEndpoint)
    ], RelationalDatabase.prototype, "masterEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterUsername" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "masterUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterApplyStatus" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "parameterApplyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingMaintenanceActions", elemType: PendingMaintenanceAction }),
        __metadata("design:type", Array)
    ], RelationalDatabase.prototype, "pendingMaintenanceActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingModifiedValues" }),
        __metadata("design:type", PendingModifiedRelationalDatabaseValues)
    ], RelationalDatabase.prototype, "pendingModifiedValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredBackupWindow" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "preferredBackupWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferredMaintenanceWindow" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publiclyAccessible" }),
        __metadata("design:type", Boolean)
    ], RelationalDatabase.prototype, "publiclyAccessible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationalDatabaseBlueprintId" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "relationalDatabaseBlueprintId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationalDatabaseBundleId" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "relationalDatabaseBundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryAvailabilityZone" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "secondaryAvailabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportCode" }),
        __metadata("design:type", String)
    ], RelationalDatabase.prototype, "supportCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], RelationalDatabase.prototype, "tags", void 0);
    return RelationalDatabase;
}(SpeakeasyBase));
export { RelationalDatabase };
