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
// ActionNotificationExportResultEntity
/**
 * List Action Notification Export Results
**/
var ActionNotificationExportResultEntity = /** @class */ (function (_super) {
    __extends(ActionNotificationExportResultEntity, _super);
    function ActionNotificationExportResultEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], ActionNotificationExportResultEntity.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folder" }),
        __metadata("design:type", String)
    ], ActionNotificationExportResultEntity.prototype, "folder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ActionNotificationExportResultEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ActionNotificationExportResultEntity.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ActionNotificationExportResultEntity.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_headers" }),
        __metadata("design:type", String)
    ], ActionNotificationExportResultEntity.prototype, "requestHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_method" }),
        __metadata("design:type", String)
    ], ActionNotificationExportResultEntity.prototype, "requestMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_url" }),
        __metadata("design:type", String)
    ], ActionNotificationExportResultEntity.prototype, "requestUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], ActionNotificationExportResultEntity.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], ActionNotificationExportResultEntity.prototype, "success", void 0);
    return ActionNotificationExportResultEntity;
}(SpeakeasyBase));
export { ActionNotificationExportResultEntity };
