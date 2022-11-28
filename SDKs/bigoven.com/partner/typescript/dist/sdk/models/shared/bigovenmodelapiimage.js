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
import { BigOvenModelApiUserInfo } from "./bigovenmodelapiuserinfo";
var BigOvenModelApiImage = /** @class */ (function (_super) {
    __extends(BigOvenModelApiImage, _super);
    function BigOvenModelApiImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Caption" }),
        __metadata("design:type", String)
    ], BigOvenModelApiImage.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], BigOvenModelApiImage.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiImage.prototype, "imageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageSquares" }),
        __metadata("design:type", Array)
    ], BigOvenModelApiImage.prototype, "imageSquares", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiImage.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL120" }),
        __metadata("design:type", String)
    ], BigOvenModelApiImage.prototype, "imageUrl120", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL128" }),
        __metadata("design:type", String)
    ], BigOvenModelApiImage.prototype, "imageUrl128", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL200" }),
        __metadata("design:type", String)
    ], BigOvenModelApiImage.prototype, "imageUrl200", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL256" }),
        __metadata("design:type", String)
    ], BigOvenModelApiImage.prototype, "imageUrl256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL48" }),
        __metadata("design:type", String)
    ], BigOvenModelApiImage.prototype, "imageUrl48", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL64" }),
        __metadata("design:type", String)
    ], BigOvenModelApiImage.prototype, "imageUrl64", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPrimary" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiImage.prototype, "isPrimary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxImageSquare" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiImage.prototype, "maxImageSquare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Poster" }),
        __metadata("design:type", BigOvenModelApiUserInfo)
    ], BigOvenModelApiImage.prototype, "poster", void 0);
    return BigOvenModelApiImage;
}(SpeakeasyBase));
export { BigOvenModelApiImage };
