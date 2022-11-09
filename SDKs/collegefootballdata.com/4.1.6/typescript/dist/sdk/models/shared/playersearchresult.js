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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var PlayerSearchResult = /** @class */ (function (_super) {
    __extends(PlayerSearchResult, _super);
    function PlayerSearchResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], PlayerSearchResult.prototype, "firstName", void 0);
    __decorate([
        Metadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], PlayerSearchResult.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "json, name=hometown" }),
        __metadata("design:type", String)
    ], PlayerSearchResult.prototype, "hometown", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PlayerSearchResult.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=jersey" }),
        __metadata("design:type", Number)
    ], PlayerSearchResult.prototype, "jersey", void 0);
    __decorate([
        Metadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], PlayerSearchResult.prototype, "lastName", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PlayerSearchResult.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], PlayerSearchResult.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], PlayerSearchResult.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "json, name=teamColor" }),
        __metadata("design:type", String)
    ], PlayerSearchResult.prototype, "teamColor", void 0);
    __decorate([
        Metadata({ data: "json, name=teamColorSecondary" }),
        __metadata("design:type", String)
    ], PlayerSearchResult.prototype, "teamColorSecondary", void 0);
    __decorate([
        Metadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], PlayerSearchResult.prototype, "weight", void 0);
    return PlayerSearchResult;
}(SpeakeasyBase));
export { PlayerSearchResult };
