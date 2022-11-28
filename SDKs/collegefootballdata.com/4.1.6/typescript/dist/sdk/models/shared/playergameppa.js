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
var PlayerGamePpaAveragePpa = /** @class */ (function (_super) {
    __extends(PlayerGamePpaAveragePpa, _super);
    function PlayerGamePpaAveragePpa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=all" }),
        __metadata("design:type", Number)
    ], PlayerGamePpaAveragePpa.prototype, "all", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pass" }),
        __metadata("design:type", Number)
    ], PlayerGamePpaAveragePpa.prototype, "pass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rush" }),
        __metadata("design:type", Number)
    ], PlayerGamePpaAveragePpa.prototype, "rush", void 0);
    return PlayerGamePpaAveragePpa;
}(SpeakeasyBase));
export { PlayerGamePpaAveragePpa };
var PlayerGamePpa = /** @class */ (function (_super) {
    __extends(PlayerGamePpa, _super);
    function PlayerGamePpa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averagePPA" }),
        __metadata("design:type", PlayerGamePpaAveragePpa)
    ], PlayerGamePpa.prototype, "averagePpa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PlayerGamePpa.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opponent" }),
        __metadata("design:type", String)
    ], PlayerGamePpa.prototype, "opponent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], PlayerGamePpa.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], PlayerGamePpa.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], PlayerGamePpa.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=week" }),
        __metadata("design:type", Number)
    ], PlayerGamePpa.prototype, "week", void 0);
    return PlayerGamePpa;
}(SpeakeasyBase));
export { PlayerGamePpa };
