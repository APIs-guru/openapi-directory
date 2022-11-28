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
var PlayerUsageUsage = /** @class */ (function (_super) {
    __extends(PlayerUsageUsage, _super);
    function PlayerUsageUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstDown" }),
        __metadata("design:type", Number)
    ], PlayerUsageUsage.prototype, "firstDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overall" }),
        __metadata("design:type", Number)
    ], PlayerUsageUsage.prototype, "overall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pass" }),
        __metadata("design:type", Number)
    ], PlayerUsageUsage.prototype, "pass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", Number)
    ], PlayerUsageUsage.prototype, "passingDowns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rush" }),
        __metadata("design:type", Number)
    ], PlayerUsageUsage.prototype, "rush", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondDown" }),
        __metadata("design:type", Number)
    ], PlayerUsageUsage.prototype, "secondDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", Number)
    ], PlayerUsageUsage.prototype, "standardDowns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdDown" }),
        __metadata("design:type", Number)
    ], PlayerUsageUsage.prototype, "thirdDown", void 0);
    return PlayerUsageUsage;
}(SpeakeasyBase));
export { PlayerUsageUsage };
var PlayerUsage = /** @class */ (function (_super) {
    __extends(PlayerUsage, _super);
    function PlayerUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conference" }),
        __metadata("design:type", String)
    ], PlayerUsage.prototype, "conference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PlayerUsage.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PlayerUsage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], PlayerUsage.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], PlayerUsage.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], PlayerUsage.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage" }),
        __metadata("design:type", PlayerUsageUsage)
    ], PlayerUsage.prototype, "usage", void 0);
    return PlayerUsage;
}(SpeakeasyBase));
export { PlayerUsage };
