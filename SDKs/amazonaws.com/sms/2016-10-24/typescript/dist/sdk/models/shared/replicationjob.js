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
import { LicenseTypeEnum } from "./licensetypeenum";
import { ReplicationRun } from "./replicationrun";
import { ServerTypeEnum } from "./servertypeenum";
import { ReplicationJobStateEnum } from "./replicationjobstateenum";
import { VmServer } from "./vmserver";
// ReplicationJob
/**
 * Represents a replication job.
**/
var ReplicationJob = /** @class */ (function (_super) {
    __extends(ReplicationJob, _super);
    function ReplicationJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReplicationJob.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encrypted" }),
        __metadata("design:type", Boolean)
    ], ReplicationJob.prototype, "encrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequency" }),
        __metadata("design:type", Number)
    ], ReplicationJob.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyId" }),
        __metadata("design:type", String)
    ], ReplicationJob.prototype, "kmsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestAmiId" }),
        __metadata("design:type", String)
    ], ReplicationJob.prototype, "latestAmiId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenseType" }),
        __metadata("design:type", String)
    ], ReplicationJob.prototype, "licenseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextReplicationRunStartTime" }),
        __metadata("design:type", Date)
    ], ReplicationJob.prototype, "nextReplicationRunStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfRecentAmisToKeep" }),
        __metadata("design:type", Number)
    ], ReplicationJob.prototype, "numberOfRecentAmisToKeep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicationJobId" }),
        __metadata("design:type", String)
    ], ReplicationJob.prototype, "replicationJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicationRunList", elemType: ReplicationRun }),
        __metadata("design:type", Array)
    ], ReplicationJob.prototype, "replicationRunList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleName" }),
        __metadata("design:type", String)
    ], ReplicationJob.prototype, "roleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runOnce" }),
        __metadata("design:type", Boolean)
    ], ReplicationJob.prototype, "runOnce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seedReplicationTime" }),
        __metadata("design:type", Date)
    ], ReplicationJob.prototype, "seedReplicationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverId" }),
        __metadata("design:type", String)
    ], ReplicationJob.prototype, "serverId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverType" }),
        __metadata("design:type", String)
    ], ReplicationJob.prototype, "serverType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ReplicationJob.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], ReplicationJob.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmServer" }),
        __metadata("design:type", VmServer)
    ], ReplicationJob.prototype, "vmServer", void 0);
    return ReplicationJob;
}(SpeakeasyBase));
export { ReplicationJob };
