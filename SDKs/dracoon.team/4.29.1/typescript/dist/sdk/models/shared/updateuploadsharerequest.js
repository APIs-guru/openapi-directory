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
// UpdateUploadShareRequest
/**
 * Request model for updating an Upload Share
**/
var UpdateUploadShareRequest = /** @class */ (function (_super) {
    __extends(UpdateUploadShareRequest, _super);
    function UpdateUploadShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultCountry" }),
        __metadata("design:type", String)
    ], UpdateUploadShareRequest.prototype, "defaultCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiration" }),
        __metadata("design:type", ObjectExpiration)
    ], UpdateUploadShareRequest.prototype, "expiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesExpiryPeriod" }),
        __metadata("design:type", Number)
    ], UpdateUploadShareRequest.prototype, "filesExpiryPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalNotes" }),
        __metadata("design:type", String)
    ], UpdateUploadShareRequest.prototype, "internalNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSize" }),
        __metadata("design:type", Number)
    ], UpdateUploadShareRequest.prototype, "maxSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSlots" }),
        __metadata("design:type", Number)
    ], UpdateUploadShareRequest.prototype, "maxSlots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateUploadShareRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], UpdateUploadShareRequest.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifyCreator" }),
        __metadata("design:type", Boolean)
    ], UpdateUploadShareRequest.prototype, "notifyCreator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UpdateUploadShareRequest.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receiverLanguage" }),
        __metadata("design:type", String)
    ], UpdateUploadShareRequest.prototype, "receiverLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetFilesExpiryPeriod" }),
        __metadata("design:type", Boolean)
    ], UpdateUploadShareRequest.prototype, "resetFilesExpiryPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetMaxSize" }),
        __metadata("design:type", Boolean)
    ], UpdateUploadShareRequest.prototype, "resetMaxSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetMaxSlots" }),
        __metadata("design:type", Boolean)
    ], UpdateUploadShareRequest.prototype, "resetMaxSlots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetPassword" }),
        __metadata("design:type", Boolean)
    ], UpdateUploadShareRequest.prototype, "resetPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorName" }),
        __metadata("design:type", Boolean)
    ], UpdateUploadShareRequest.prototype, "showCreatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showCreatorUsername" }),
        __metadata("design:type", Boolean)
    ], UpdateUploadShareRequest.prototype, "showCreatorUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showUploadedFiles" }),
        __metadata("design:type", Boolean)
    ], UpdateUploadShareRequest.prototype, "showUploadedFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textMessageRecipients" }),
        __metadata("design:type", Array)
    ], UpdateUploadShareRequest.prototype, "textMessageRecipients", void 0);
    return UpdateUploadShareRequest;
}(SpeakeasyBase));
export { UpdateUploadShareRequest };
