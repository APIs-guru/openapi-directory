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
import { PublicUploadedFileData } from "./publicuploadedfiledata";
import { UserUserPublicKeyListOutput } from "./useruserpublickeylist";
// PublicUploadShareOutput
/**
 * Upload Share information
**/
var PublicUploadShareOutput = /** @class */ (function (_super) {
    __extends(PublicUploadShareOutput, _super);
    function PublicUploadShareOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], PublicUploadShareOutput.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorName" }),
        __metadata("design:type", String)
    ], PublicUploadShareOutput.prototype, "creatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorUsername" }),
        __metadata("design:type", String)
    ], PublicUploadShareOutput.prototype, "creatorUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireAt" }),
        __metadata("design:type", Date)
    ], PublicUploadShareOutput.prototype, "expireAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEncrypted" }),
        __metadata("design:type", Boolean)
    ], PublicUploadShareOutput.prototype, "isEncrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isProtected" }),
        __metadata("design:type", Boolean)
    ], PublicUploadShareOutput.prototype, "isProtected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSize" }),
        __metadata("design:type", Number)
    ], PublicUploadShareOutput.prototype, "maxSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSlots" }),
        __metadata("design:type", Number)
    ], PublicUploadShareOutput.prototype, "maxSlots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PublicUploadShareOutput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], PublicUploadShareOutput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingSize" }),
        __metadata("design:type", Number)
    ], PublicUploadShareOutput.prototype, "remainingSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingSlots" }),
        __metadata("design:type", Number)
    ], PublicUploadShareOutput.prototype, "remainingSlots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showUploadedFiles" }),
        __metadata("design:type", Boolean)
    ], PublicUploadShareOutput.prototype, "showUploadedFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uploadedFiles", elemType: PublicUploadedFileData }),
        __metadata("design:type", Array)
    ], PublicUploadShareOutput.prototype, "uploadedFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userUserPublicKeyList" }),
        __metadata("design:type", UserUserPublicKeyListOutput)
    ], PublicUploadShareOutput.prototype, "userUserPublicKeyList", void 0);
    return PublicUploadShareOutput;
}(SpeakeasyBase));
export { PublicUploadShareOutput };
