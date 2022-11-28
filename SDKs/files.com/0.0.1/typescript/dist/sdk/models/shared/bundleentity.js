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
import { FormFieldSetEntity } from "./formfieldsetentity";
// BundleEntity
/**
 * Create Bundle
**/
var BundleEntity = /** @class */ (function (_super) {
    __extends(BundleEntity, _super);
    function BundleEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickwrap_body" }),
        __metadata("design:type", String)
    ], BundleEntity.prototype, "clickwrapBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickwrap_id" }),
        __metadata("design:type", Number)
    ], BundleEntity.prototype, "clickwrapId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], BundleEntity.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], BundleEntity.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BundleEntity.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", Date)
    ], BundleEntity.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_field_set" }),
        __metadata("design:type", FormFieldSetEntity)
    ], BundleEntity.prototype, "formFieldSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_inbox" }),
        __metadata("design:type", Boolean)
    ], BundleEntity.prototype, "hasInbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BundleEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbox_id" }),
        __metadata("design:type", Number)
    ], BundleEntity.prototype, "inboxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_uses" }),
        __metadata("design:type", Number)
    ], BundleEntity.prototype, "maxUses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], BundleEntity.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password_protected" }),
        __metadata("design:type", Boolean)
    ], BundleEntity.prototype, "passwordProtected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paths" }),
        __metadata("design:type", Array)
    ], BundleEntity.prototype, "paths", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preview_only" }),
        __metadata("design:type", Boolean)
    ], BundleEntity.prototype, "previewOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=require_registration" }),
        __metadata("design:type", Boolean)
    ], BundleEntity.prototype, "requireRegistration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=require_share_recipient" }),
        __metadata("design:type", Boolean)
    ], BundleEntity.prototype, "requireShareRecipient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], BundleEntity.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], BundleEntity.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], BundleEntity.prototype, "username", void 0);
    return BundleEntity;
}(SpeakeasyBase));
export { BundleEntity };
