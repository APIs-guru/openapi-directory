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
var ReactionRollup = /** @class */ (function (_super) {
    __extends(ReactionRollup, _super);
    function ReactionRollup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=+1" }),
        __metadata("design:type", Number)
    ], ReactionRollup.prototype, "plus1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=-1" }),
        __metadata("design:type", Number)
    ], ReactionRollup.prototype, "minus1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confused" }),
        __metadata("design:type", Number)
    ], ReactionRollup.prototype, "confused", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eyes" }),
        __metadata("design:type", Number)
    ], ReactionRollup.prototype, "eyes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heart" }),
        __metadata("design:type", Number)
    ], ReactionRollup.prototype, "heart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hooray" }),
        __metadata("design:type", Number)
    ], ReactionRollup.prototype, "hooray", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=laugh" }),
        __metadata("design:type", Number)
    ], ReactionRollup.prototype, "laugh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rocket" }),
        __metadata("design:type", Number)
    ], ReactionRollup.prototype, "rocket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], ReactionRollup.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ReactionRollup.prototype, "url", void 0);
    return ReactionRollup;
}(SpeakeasyBase));
export { ReactionRollup };
