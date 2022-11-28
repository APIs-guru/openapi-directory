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
import { EncryptionKey } from "./encryptionkey";
// TerminologyProperties
/**
 * The properties of the custom terminology.
**/
var TerminologyProperties = /** @class */ (function (_super) {
    __extends(TerminologyProperties, _super);
    function TerminologyProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], TerminologyProperties.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], TerminologyProperties.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], TerminologyProperties.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionKey" }),
        __metadata("design:type", EncryptionKey)
    ], TerminologyProperties.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" }),
        __metadata("design:type", Date)
    ], TerminologyProperties.prototype, "lastUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], TerminologyProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SizeBytes" }),
        __metadata("design:type", Number)
    ], TerminologyProperties.prototype, "sizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceLanguageCode" }),
        __metadata("design:type", String)
    ], TerminologyProperties.prototype, "sourceLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetLanguageCodes" }),
        __metadata("design:type", Array)
    ], TerminologyProperties.prototype, "targetLanguageCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TermCount" }),
        __metadata("design:type", Number)
    ], TerminologyProperties.prototype, "termCount", void 0);
    return TerminologyProperties;
}(SpeakeasyBase));
export { TerminologyProperties };
