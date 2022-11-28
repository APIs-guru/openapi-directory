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
import { UserGeneralUser } from "./usergeneraluser";
import { ContentCommentSummary } from "./contentcommentsummary";
import { ContentContentRepresentation } from "./contentcontentrepresentation";
var ContentContentItemPublicContract = /** @class */ (function (_super) {
    __extends(ContentContentItemPublicContract, _super);
    function ContentContentItemPublicContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentContentItemPublicContract.prototype, "allowComments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserGeneralUser)
    ], ContentContentItemPublicContract.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentContentItemPublicContract.prototype, "autoEnglishPropertyFallback", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentContentItemPublicContract.prototype, "cType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentContentItemPublicContract.prototype, "cmsPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentCommentSummary)
    ], ContentContentItemPublicContract.prototype, "commentSummary", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentContentItemPublicContract.prototype, "contentId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], ContentContentItemPublicContract.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], ContentContentItemPublicContract.prototype, "hasAgeGate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentContentItemPublicContract.prototype, "minimumAge", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], ContentContentItemPublicContract.prototype, "modifyDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ContentContentItemPublicContract.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentContentItemPublicContract.prototype, "ratingImagePath", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ContentContentRepresentation }),
        __metadata("design:type", Array)
    ], ContentContentItemPublicContract.prototype, "representations", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ContentContentItemPublicContract.prototype, "tags", void 0);
    return ContentContentItemPublicContract;
}(SpeakeasyBase));
export { ContentContentItemPublicContract };
