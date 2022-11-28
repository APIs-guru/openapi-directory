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
// CreateUploadShareRequest
/**
 * Request model for creating an Upload Share
**/
var CreateUploadShareRequest = /** @class */ (function (_super) {
    __extends(CreateUploadShareRequest, _super);
    function CreateUploadShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorLanguage" }),
        __metadata("design:type", String)
    ], CreateUploadShareRequest.prototype, "creatorLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration" }),
        __metadata("design:type", ObjectExpiration)
    ], CreateUploadShareRequest.prototype, "expiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesExpiryPeriod" }),
        __metadata("design:type", Number)
    ], CreateUploadShareRequest.prototype, "filesExpiryPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalNotes" }),
        __metadata("design:type", String)
    ], CreateUploadShareRequest.prototype, "internalNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailBody" }),
        __metadata("design:type", String)
    ], CreateUploadShareRequest.prototype, "mailBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailRecipients" }),
        __metadata("design:type", String)
    ], CreateUploadShareRequest.prototype, "mailRecipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mailSubject" }),
        __metadata("design:type", String)
    ], CreateUploadShareRequest.prototype, "mailSubject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSize" }),
        __metadata("design:type", Number)
    ], CreateUploadShareRequest.prototype, "maxSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSlots" }),
        __metadata("design:type", Number)
    ], CreateUploadShareRequest.prototype, "maxSlots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateUploadShareRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], CreateUploadShareRequest.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifyCreator" }),
        __metadata("design:type", Boolean)
    ], CreateUploadShareRequest.prototype, "notifyCreator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], CreateUploadShareRequest.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receiverLanguage" }),
        __metadata("design:type", String)
    ], CreateUploadShareRequest.prototype, "receiverLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendMail" }),
        __metadata("design:type", Boolean)
    ], CreateUploadShareRequest.prototype, "sendMail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendSms" }),
        __metadata("design:type", Boolean)
    ], CreateUploadShareRequest.prototype, "sendSms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorName" }),
        __metadata("design:type", Boolean)
    ], CreateUploadShareRequest.prototype, "showCreatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorUsername" }),
        __metadata("design:type", Boolean)
    ], CreateUploadShareRequest.prototype, "showCreatorUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showUploadedFiles" }),
        __metadata("design:type", Boolean)
    ], CreateUploadShareRequest.prototype, "showUploadedFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smsRecipients" }),
        __metadata("design:type", String)
    ], CreateUploadShareRequest.prototype, "smsRecipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetId" }),
        __metadata("design:type", Number)
    ], CreateUploadShareRequest.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textMessageRecipients" }),
        __metadata("design:type", Array)
    ], CreateUploadShareRequest.prototype, "textMessageRecipients", void 0);
    return CreateUploadShareRequest;
}(SpeakeasyBase));
export { CreateUploadShareRequest };
