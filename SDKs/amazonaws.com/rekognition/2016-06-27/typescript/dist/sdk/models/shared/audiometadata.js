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
// AudioMetadata
/**
 * Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>.
**/
var AudioMetadata = /** @class */ (function (_super) {
    __extends(AudioMetadata, _super);
    function AudioMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Codec" }),
        __metadata("design:type", String)
    ], AudioMetadata.prototype, "codec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DurationMillis" }),
        __metadata("design:type", Number)
    ], AudioMetadata.prototype, "durationMillis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfChannels" }),
        __metadata("design:type", Number)
    ], AudioMetadata.prototype, "numberOfChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SampleRate" }),
        __metadata("design:type", Number)
    ], AudioMetadata.prototype, "sampleRate", void 0);
    return AudioMetadata;
}(SpeakeasyBase));
export { AudioMetadata };
