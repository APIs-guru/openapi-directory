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
import { PreviewEntity } from "./previewentity";
// FileEntity
/**
 * List Folders by path
**/
var FileEntity = /** @class */ (function (_super) {
    __extends(FileEntity, _super);
    function FileEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crc32" }),
        __metadata("design:type", String)
    ], FileEntity.prototype, "crc32", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], FileEntity.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_uri" }),
        __metadata("design:type", String)
    ], FileEntity.prototype, "downloadUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5" }),
        __metadata("design:type", String)
    ], FileEntity.prototype, "md5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mime_type" }),
        __metadata("design:type", String)
    ], FileEntity.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mtime" }),
        __metadata("design:type", Date)
    ], FileEntity.prototype, "mtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], FileEntity.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", String)
    ], FileEntity.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preview" }),
        __metadata("design:type", PreviewEntity)
    ], FileEntity.prototype, "preview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preview_id" }),
        __metadata("design:type", Number)
    ], FileEntity.prototype, "previewId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority_color" }),
        __metadata("design:type", String)
    ], FileEntity.prototype, "priorityColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provided_mtime" }),
        __metadata("design:type", Date)
    ], FileEntity.prototype, "providedMtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], FileEntity.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], FileEntity.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subfolders_locked?" }),
        __metadata("design:type", Boolean)
    ], FileEntity.prototype, "subfoldersLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FileEntity.prototype, "type", void 0);
    return FileEntity;
}(SpeakeasyBase));
export { FileEntity };
