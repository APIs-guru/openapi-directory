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
// DownloadShare
/**
 * Download Share information
**/
var DownloadShare = /** @class */ (function (_super) {
    __extends(DownloadShare, _super);
    function DownloadShare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessKey" }),
        __metadata("design:type", String)
    ], DownloadShare.prototype, "accessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classification" }),
        __metadata("design:type", Number)
    ], DownloadShare.prototype, "classification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cntDownloads" }),
        __metadata("design:type", Number)
    ], DownloadShare.prototype, "cntDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], DownloadShare.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", UserInfo)
    ], DownloadShare.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataUrl" }),
        __metadata("design:type", String)
    ], DownloadShare.prototype, "dataUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireAt" }),
        __metadata("design:type", Date)
    ], DownloadShare.prototype, "expireAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DownloadShare.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalNotes" }),
        __metadata("design:type", String)
    ], DownloadShare.prototype, "internalNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEncrypted" }),
        __metadata("design:type", Boolean)
    ], DownloadShare.prototype, "isEncrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isProtected" }),
        __metadata("design:type", Boolean)
    ], DownloadShare.prototype, "isProtected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDownloads" }),
        __metadata("design:type", Number)
    ], DownloadShare.prototype, "maxDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DownloadShare.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeId" }),
        __metadata("design:type", Number)
    ], DownloadShare.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodePath" }),
        __metadata("design:type", String)
    ], DownloadShare.prototype, "nodePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeType" }),
        __metadata("design:type", String)
    ], DownloadShare.prototype, "nodeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], DownloadShare.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifyCreator" }),
        __metadata("design:type", Boolean)
    ], DownloadShare.prototype, "notifyCreator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipients" }),
        __metadata("design:type", String)
    ], DownloadShare.prototype, "recipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorName" }),
        __metadata("design:type", Boolean)
    ], DownloadShare.prototype, "showCreatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorUsername" }),
        __metadata("design:type", Boolean)
    ], DownloadShare.prototype, "showCreatorUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smsRecipients" }),
        __metadata("design:type", String)
    ], DownloadShare.prototype, "smsRecipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], DownloadShare.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedBy" }),
        __metadata("design:type", UserInfo)
    ], DownloadShare.prototype, "updatedBy", void 0);
    return DownloadShare;
}(SpeakeasyBase));
export { DownloadShare };
