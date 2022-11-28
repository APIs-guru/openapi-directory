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
import { DbInstanceAutomatedBackupsReplication } from "./dbinstanceautomatedbackupsreplication";
import { RestoreWindow } from "./restorewindow";
// DbInstanceAutomatedBackup
/**
 * An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
**/
var DbInstanceAutomatedBackup = /** @class */ (function (_super) {
    __extends(DbInstanceAutomatedBackup, _super);
    function DbInstanceAutomatedBackup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DbInstanceAutomatedBackup.prototype, "allocatedStorage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DbInstanceAutomatedBackup.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "dbInstanceArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "dbInstanceAutomatedBackupsArn", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DbInstanceAutomatedBackupsReplication }),
        __metadata("design:type", Array)
    ], DbInstanceAutomatedBackup.prototype, "dbInstanceAutomatedBackupsReplications", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "dbiResourceId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DbInstanceAutomatedBackup.prototype, "encrypted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DbInstanceAutomatedBackup.prototype, "iamDatabaseAuthenticationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DbInstanceAutomatedBackup.prototype, "instanceCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DbInstanceAutomatedBackup.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "licenseModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "masterUsername", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "optionGroupName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DbInstanceAutomatedBackup.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreWindow)
    ], DbInstanceAutomatedBackup.prototype, "restoreWindow", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "storageType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "tdeCredentialArn", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DbInstanceAutomatedBackup.prototype, "vpcId", void 0);
    return DbInstanceAutomatedBackup;
}(SpeakeasyBase));
export { DbInstanceAutomatedBackup };
