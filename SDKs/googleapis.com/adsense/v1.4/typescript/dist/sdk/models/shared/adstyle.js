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
// AdStyleColors
/**
 * The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
**/
var AdStyleColors = /** @class */ (function (_super) {
    __extends(AdStyleColors, _super);
    function AdStyleColors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=background" }),
        __metadata("design:type", String)
    ], AdStyleColors.prototype, "background", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=border" }),
        __metadata("design:type", String)
    ], AdStyleColors.prototype, "border", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], AdStyleColors.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AdStyleColors.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AdStyleColors.prototype, "url", void 0);
    return AdStyleColors;
}(SpeakeasyBase));
export { AdStyleColors };
// AdStyleFont
/**
 * The font which is included in the style.
**/
var AdStyleFont = /** @class */ (function (_super) {
    __extends(AdStyleFont, _super);
    function AdStyleFont() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=family" }),
        __metadata("design:type", String)
    ], AdStyleFont.prototype, "family", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], AdStyleFont.prototype, "size", void 0);
    return AdStyleFont;
}(SpeakeasyBase));
export { AdStyleFont };
var AdStyle = /** @class */ (function (_super) {
    __extends(AdStyle, _super);
    function AdStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colors" }),
        __metadata("design:type", AdStyleColors)
    ], AdStyle.prototype, "colors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=corners" }),
        __metadata("design:type", String)
    ], AdStyle.prototype, "corners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=font" }),
        __metadata("design:type", AdStyleFont)
    ], AdStyle.prototype, "font", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AdStyle.prototype, "kind", void 0);
    return AdStyle;
}(SpeakeasyBase));
export { AdStyle };
