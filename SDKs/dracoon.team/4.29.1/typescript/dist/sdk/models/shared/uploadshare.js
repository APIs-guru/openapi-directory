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
import { UserInfo } from "./userinfo";
// UploadShare
/**
 * Upload Share information
**/
var UploadShare = /** @class */ (function (_super) {
    __extends(UploadShare, _super);
    function UploadShare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessKey" }),
        __metadata("design:type", String)
    ], UploadShare.prototype, "accessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntFiles" }),
        __metadata("design:type", Number)
    ], UploadShare.prototype, "cntFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntUploads" }),
        __metadata("design:type", Number)
    ], UploadShare.prototype, "cntUploads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], UploadShare.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", UserInfo)
    ], UploadShare.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataUrl" }),
        __metadata("design:type", String)
    ], UploadShare.prototype, "dataUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireAt" }),
        __metadata("design:type", Date)
    ], UploadShare.prototype, "expireAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesExpiryPeriod" }),
        __metadata("design:type", Number)
    ], UploadShare.prototype, "filesExpiryPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UploadShare.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalNotes" }),
        __metadata("design:type", String)
    ], UploadShare.prototype, "internalNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEncrypted" }),
        __metadata("design:type", Boolean)
    ], UploadShare.prototype, "isEncrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isProtected" }),
        __metadata("design:type", Boolean)
    ], UploadShare.prototype, "isProtected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSize" }),
        __metadata("design:type", Number)
    ], UploadShare.prototype, "maxSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSlots" }),
        __metadata("design:type", Number)
    ], UploadShare.prototype, "maxSlots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UploadShare.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], UploadShare.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifyCreator" }),
        __metadata("design:type", Boolean)
    ], UploadShare.prototype, "notifyCreator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipients" }),
        __metadata("design:type", String)
    ], UploadShare.prototype, "recipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorName" }),
        __metadata("design:type", Boolean)
    ], UploadShare.prototype, "showCreatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorUsername" }),
        __metadata("design:type", Boolean)
    ], UploadShare.prototype, "showCreatorUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showUploadedFiles" }),
        __metadata("design:type", Boolean)
    ], UploadShare.prototype, "showUploadedFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smsRecipients" }),
        __metadata("design:type", String)
    ], UploadShare.prototype, "smsRecipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetId" }),
        __metadata("design:type", Number)
    ], UploadShare.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetPath" }),
        __metadata("design:type", String)
    ], UploadShare.prototype, "targetPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetType" }),
        __metadata("design:type", String)
    ], UploadShare.prototype, "targetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], UploadShare.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", UserInfo)
    ], UploadShare.prototype, "updatedBy", void 0);
    return UploadShare;
}(SpeakeasyBase));
export { UploadShare };
