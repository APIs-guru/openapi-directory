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
var CsvOptions = /** @class */ (function (_super) {
    __extends(CsvOptions, _super);
    function CsvOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowJaggedRows" }),
        __metadata("design:type", Boolean)
    ], CsvOptions.prototype, "allowJaggedRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowQuotedNewlines" }),
        __metadata("design:type", Boolean)
    ], CsvOptions.prototype, "allowQuotedNewlines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding" }),
        __metadata("design:type", String)
    ], CsvOptions.prototype, "encoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldDelimiter" }),
        __metadata("design:type", String)
    ], CsvOptions.prototype, "fieldDelimiter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=null_marker" }),
        __metadata("design:type", String)
    ], CsvOptions.prototype, "nullMarker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preserveAsciiControlCharacters" }),
        __metadata("design:type", Boolean)
    ], CsvOptions.prototype, "preserveAsciiControlCharacters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quote" }),
        __metadata("design:type", String)
    ], CsvOptions.prototype, "quote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipLeadingRows" }),
        __metadata("design:type", String)
    ], CsvOptions.prototype, "skipLeadingRows", void 0);
    return CsvOptions;
}(SpeakeasyBase));
export { CsvOptions };
