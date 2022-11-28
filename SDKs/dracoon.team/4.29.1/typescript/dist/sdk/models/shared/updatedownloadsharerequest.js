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
import { ObjectExpiration } from "./objectexpiration";
// UpdateDownloadShareRequest
/**
 * Request model for updating a Download Share
**/
var UpdateDownloadShareRequest = /** @class */ (function (_super) {
    __extends(UpdateDownloadShareRequest, _super);
    function UpdateDownloadShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultCountry" }),
        __metadata("design:type", String)
    ], UpdateDownloadShareRequest.prototype, "defaultCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration" }),
        __metadata("design:type", ObjectExpiration)
    ], UpdateDownloadShareRequest.prototype, "expiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalNotes" }),
        __metadata("design:type", String)
    ], UpdateDownloadShareRequest.prototype, "internalNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDownloads" }),
        __metadata("design:type", Number)
    ], UpdateDownloadShareRequest.prototype, "maxDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateDownloadShareRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], UpdateDownloadShareRequest.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifyCreator" }),
        __metadata("design:type", Boolean)
    ], UpdateDownloadShareRequest.prototype, "notifyCreator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UpdateDownloadShareRequest.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receiverLanguage" }),
        __metadata("design:type", String)
    ], UpdateDownloadShareRequest.prototype, "receiverLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetMaxDownloads" }),
        __metadata("design:type", Boolean)
    ], UpdateDownloadShareRequest.prototype, "resetMaxDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetPassword" }),
        __metadata("design:type", Boolean)
    ], UpdateDownloadShareRequest.prototype, "resetPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorName" }),
        __metadata("design:type", Boolean)
    ], UpdateDownloadShareRequest.prototype, "showCreatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorUsername" }),
        __metadata("design:type", Boolean)
    ], UpdateDownloadShareRequest.prototype, "showCreatorUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textMessageRecipients" }),
        __metadata("design:type", Array)
    ], UpdateDownloadShareRequest.prototype, "textMessageRecipients", void 0);
    return UpdateDownloadShareRequest;
}(SpeakeasyBase));
export { UpdateDownloadShareRequest };
