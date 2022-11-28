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
export var FileMigrationEntityOperationEnum;
(function (FileMigrationEntityOperationEnum) {
    FileMigrationEntityOperationEnum["Delete"] = "delete";
    FileMigrationEntityOperationEnum["Move"] = "move";
    FileMigrationEntityOperationEnum["Copy"] = "copy";
})(FileMigrationEntityOperationEnum || (FileMigrationEntityOperationEnum = {}));
export var FileMigrationEntityStatusEnum;
(function (FileMigrationEntityStatusEnum) {
    FileMigrationEntityStatusEnum["Pending"] = "pending";
    FileMigrationEntityStatusEnum["Counting"] = "counting";
    FileMigrationEntityStatusEnum["Processing"] = "processing";
    FileMigrationEntityStatusEnum["Complete"] = "complete";
    FileMigrationEntityStatusEnum["ProcessingSubfolders"] = "processing_subfolders";
    FileMigrationEntityStatusEnum["Finishing"] = "finishing";
    FileMigrationEntityStatusEnum["CreatingDestFolder"] = "creating_dest_folder";
    FileMigrationEntityStatusEnum["WaitingForOtherJobs"] = "waiting_for_other_jobs";
    FileMigrationEntityStatusEnum["WaitingForAllFiles"] = "waiting_for_all_files";
    FileMigrationEntityStatusEnum["WaitingForPendingSubfolders"] = "waiting_for_pending_subfolders";
    FileMigrationEntityStatusEnum["WaitingForAllSubfolders"] = "waiting_for_all_subfolders";
    FileMigrationEntityStatusEnum["Failed"] = "failed";
    FileMigrationEntityStatusEnum["WaitingForEnqueuedOperations"] = "waiting_for_enqueued_operations";
    FileMigrationEntityStatusEnum["ProcessingDeferredFolders"] = "processing_deferred_folders";
    FileMigrationEntityStatusEnum["ProcessingRecursively"] = "processing_recursively";
    FileMigrationEntityStatusEnum["RemovingDeferredFolders"] = "removing_deferred_folders";
})(FileMigrationEntityStatusEnum || (FileMigrationEntityStatusEnum = {}));
// FileMigrationEntity
/**
 * Show File Migration
**/
var FileMigrationEntity = /** @class */ (function (_super) {
    __extends(FileMigrationEntity, _super);
    function FileMigrationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dest_path" }),
        __metadata("design:type", String)
    ], FileMigrationEntity.prototype, "destPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files_moved" }),
        __metadata("design:type", Number)
    ], FileMigrationEntity.prototype, "filesMoved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files_total" }),
        __metadata("design:type", Number)
    ], FileMigrationEntity.prototype, "filesTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FileMigrationEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=log_url" }),
        __metadata("design:type", String)
    ], FileMigrationEntity.prototype, "logUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], FileMigrationEntity.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], FileMigrationEntity.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], FileMigrationEntity.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], FileMigrationEntity.prototype, "status", void 0);
    return FileMigrationEntity;
}(SpeakeasyBase));
export { FileMigrationEntity };
