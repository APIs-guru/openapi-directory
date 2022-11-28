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
import { DiskSnapshotInfo } from "./disksnapshotinfo";
import { InstanceSnapshotInfo } from "./instancesnapshotinfo";
import { ExportSnapshotRecordSourceTypeEnum } from "./exportsnapshotrecordsourcetypeenum";
// ExportSnapshotRecordSourceInfo
/**
 * Describes the source of an export snapshot record.
**/
var ExportSnapshotRecordSourceInfo = /** @class */ (function (_super) {
    __extends(ExportSnapshotRecordSourceInfo, _super);
    function ExportSnapshotRecordSourceInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], ExportSnapshotRecordSourceInfo.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], ExportSnapshotRecordSourceInfo.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskSnapshotInfo" }),
        __metadata("design:type", DiskSnapshotInfo)
    ], ExportSnapshotRecordSourceInfo.prototype, "diskSnapshotInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromResourceArn" }),
        __metadata("design:type", String)
    ], ExportSnapshotRecordSourceInfo.prototype, "fromResourceArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromResourceName" }),
        __metadata("design:type", String)
    ], ExportSnapshotRecordSourceInfo.prototype, "fromResourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceSnapshotInfo" }),
        __metadata("design:type", InstanceSnapshotInfo)
    ], ExportSnapshotRecordSourceInfo.prototype, "instanceSnapshotInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ExportSnapshotRecordSourceInfo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], ExportSnapshotRecordSourceInfo.prototype, "resourceType", void 0);
    return ExportSnapshotRecordSourceInfo;
}(SpeakeasyBase));
export { ExportSnapshotRecordSourceInfo };
