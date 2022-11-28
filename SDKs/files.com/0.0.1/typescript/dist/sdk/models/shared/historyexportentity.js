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
// HistoryExportEntity
/**
 * Show History Export
**/
var HistoryExportEntity = /** @class */ (function (_super) {
    __extends(HistoryExportEntity, _super);
    function HistoryExportEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_at" }),
        __metadata("design:type", Date)
    ], HistoryExportEntity.prototype, "endAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=history_version" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "historyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], HistoryExportEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_action" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_destination" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_failure_type" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryFailureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_file_id" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryFileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_folder" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryFolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_interface" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryInterface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_ip" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_parent_id" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryParentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_path" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_src" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "querySrc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_target_id" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryTargetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_target_name" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryTargetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_target_permission" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryTargetPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_target_permission_set" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryTargetPermissionSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_target_platform" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryTargetPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_target_user_id" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryTargetUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_target_username" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryTargetUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_user_id" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query_username" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "queryUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results_url" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "resultsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_at" }),
        __metadata("design:type", Date)
    ], HistoryExportEntity.prototype, "startAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], HistoryExportEntity.prototype, "status", void 0);
    return HistoryExportEntity;
}(SpeakeasyBase));
export { HistoryExportEntity };
