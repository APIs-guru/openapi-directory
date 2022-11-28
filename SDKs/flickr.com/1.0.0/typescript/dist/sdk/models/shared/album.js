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
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_comment" }),
        __metadata("design:type", Boolean)
    ], Album.prototype, "canComment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count_comments" }),
        __metadata("design:type", Number)
    ], Album.prototype, "countComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count_views" }),
        __metadata("design:type", Number)
    ], Album.prototype, "countViews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_create" }),
        __metadata("design:type", Number)
    ], Album.prototype, "dateCreate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_update" }),
        __metadata("design:type", Number)
    ], Album.prototype, "dateUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Album.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=farm" }),
        __metadata("design:type", String)
    ], Album.prototype, "farm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Album.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photos" }),
        __metadata("design:type", Number)
    ], Album.prototype, "photos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", String)
    ], Album.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], Album.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", String)
    ], Album.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Album.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", Number)
    ], Album.prototype, "videos", void 0);
    return Album;
}(SpeakeasyBase));
export { Album };
