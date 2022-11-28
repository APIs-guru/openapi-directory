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
// UsageSnapshotEntity
/**
 * List Usage Snapshots
**/
var UsageSnapshotEntity = /** @class */ (function (_super) {
    __extends(UsageSnapshotEntity, _super);
    function UsageSnapshotEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], UsageSnapshotEntity.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_storage" }),
        __metadata("design:type", Number)
    ], UsageSnapshotEntity.prototype, "currentStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted_files_counted_in_minimum" }),
        __metadata("design:type", Number)
    ], UsageSnapshotEntity.prototype, "deletedFilesCountedInMinimum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted_files_storage" }),
        __metadata("design:type", Number)
    ], UsageSnapshotEntity.prototype, "deletedFilesStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_at" }),
        __metadata("design:type", Date)
    ], UsageSnapshotEntity.prototype, "endAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=high_water_storage" }),
        __metadata("design:type", Number)
    ], UsageSnapshotEntity.prototype, "highWaterStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=high_water_user_count" }),
        __metadata("design:type", Number)
    ], UsageSnapshotEntity.prototype, "highWaterUserCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UsageSnapshotEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root_storage" }),
        __metadata("design:type", Number)
    ], UsageSnapshotEntity.prototype, "rootStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_at" }),
        __metadata("design:type", Date)
    ], UsageSnapshotEntity.prototype, "startAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_downloads" }),
        __metadata("design:type", Number)
    ], UsageSnapshotEntity.prototype, "totalDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_uploads" }),
        __metadata("design:type", Number)
    ], UsageSnapshotEntity.prototype, "totalUploads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], UsageSnapshotEntity.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage_by_top_level_dir" }),
        __metadata("design:type", Map)
    ], UsageSnapshotEntity.prototype, "usageByTopLevelDir", void 0);
    return UsageSnapshotEntity;
}(SpeakeasyBase));
export { UsageSnapshotEntity };
