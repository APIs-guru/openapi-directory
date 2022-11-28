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
import { FileKey } from "./filekey";
import { UserKeyPairContainer } from "./userkeypaircontainer";
// CreateDownloadShareRequest
/**
 * Request model for creating a Download Share
**/
var CreateDownloadShareRequest = /** @class */ (function (_super) {
    __extends(CreateDownloadShareRequest, _super);
    function CreateDownloadShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorLanguage" }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "creatorLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration" }),
        __metadata("design:type", ObjectExpiration)
    ], CreateDownloadShareRequest.prototype, "expiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileKey" }),
        __metadata("design:type", FileKey)
    ], CreateDownloadShareRequest.prototype, "fileKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalNotes" }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "internalNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyPair" }),
        __metadata("design:type", UserKeyPairContainer)
    ], CreateDownloadShareRequest.prototype, "keyPair", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailBody" }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "mailBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailRecipients" }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "mailRecipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailSubject" }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "mailSubject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDownloads" }),
        __metadata("design:type", Number)
    ], CreateDownloadShareRequest.prototype, "maxDownloads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeId" }),
        __metadata("design:type", Number)
    ], CreateDownloadShareRequest.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifyCreator" }),
        __metadata("design:type", Boolean)
    ], CreateDownloadShareRequest.prototype, "notifyCreator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receiverLanguage" }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "receiverLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendMail" }),
        __metadata("design:type", Boolean)
    ], CreateDownloadShareRequest.prototype, "sendMail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendSms" }),
        __metadata("design:type", Boolean)
    ], CreateDownloadShareRequest.prototype, "sendSms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorName" }),
        __metadata("design:type", Boolean)
    ], CreateDownloadShareRequest.prototype, "showCreatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorUsername" }),
        __metadata("design:type", Boolean)
    ], CreateDownloadShareRequest.prototype, "showCreatorUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smsRecipients" }),
        __metadata("design:type", String)
    ], CreateDownloadShareRequest.prototype, "smsRecipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textMessageRecipients" }),
        __metadata("design:type", Array)
    ], CreateDownloadShareRequest.prototype, "textMessageRecipients", void 0);
    return CreateDownloadShareRequest;
}(SpeakeasyBase));
export { CreateDownloadShareRequest };
