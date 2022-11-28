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
var ContentAttributesArtwork = /** @class */ (function (_super) {
    __extends(ContentAttributesArtwork, _super);
    function ContentAttributesArtwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ContentAttributesArtwork.prototype, "url", void 0);
    return ContentAttributesArtwork;
}(SpeakeasyBase));
export { ContentAttributesArtwork };
var ContentAttributes = /** @class */ (function (_super) {
    __extends(ContentAttributes, _super);
    function ContentAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=albumName" }),
        __metadata("design:type", String)
    ], ContentAttributes.prototype, "albumName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artistName" }),
        __metadata("design:type", String)
    ], ContentAttributes.prototype, "artistName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artwork" }),
        __metadata("design:type", ContentAttributesArtwork)
    ], ContentAttributes.prototype, "artwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=composerName" }),
        __metadata("design:type", String)
    ], ContentAttributes.prototype, "composerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationInMillis" }),
        __metadata("design:type", Number)
    ], ContentAttributes.prototype, "durationInMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genreNames" }),
        __metadata("design:type", Array)
    ], ContentAttributes.prototype, "genreNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContentAttributes.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackNumber" }),
        __metadata("design:type", Number)
    ], ContentAttributes.prototype, "trackNumber", void 0);
    return ContentAttributes;
}(SpeakeasyBase));
export { ContentAttributes };
