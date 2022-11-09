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
var TeamPpaDefenseCumulative = /** @class */ (function (_super) {
    __extends(TeamPpaDefenseCumulative, _super);
    function TeamPpaDefenseCumulative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=passing" }),
        __metadata("design:type", Number)
    ], TeamPpaDefenseCumulative.prototype, "passing", void 0);
    __decorate([
        Metadata({ data: "json, name=rushing" }),
        __metadata("design:type", Number)
    ], TeamPpaDefenseCumulative.prototype, "rushing", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], TeamPpaDefenseCumulative.prototype, "total", void 0);
    return TeamPpaDefenseCumulative;
}(SpeakeasyBase));
export { TeamPpaDefenseCumulative };
var TeamPpaDefense = /** @class */ (function (_super) {
    __extends(TeamPpaDefense, _super);
    function TeamPpaDefense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cumulative" }),
        __metadata("design:type", TeamPpaDefenseCumulative)
    ], TeamPpaDefense.prototype, "cumulative", void 0);
    __decorate([
        Metadata({ data: "json, name=firstDown" }),
        __metadata("design:type", Number)
    ], TeamPpaDefense.prototype, "firstDown", void 0);
    __decorate([
        Metadata({ data: "json, name=overall" }),
        __metadata("design:type", Number)
    ], TeamPpaDefense.prototype, "overall", void 0);
    __decorate([
        Metadata({ data: "json, name=passing" }),
        __metadata("design:type", Number)
    ], TeamPpaDefense.prototype, "passing", void 0);
    __decorate([
        Metadata({ data: "json, name=rushing" }),
        __metadata("design:type", Number)
    ], TeamPpaDefense.prototype, "rushing", void 0);
    __decorate([
        Metadata({ data: "json, name=secondDown" }),
        __metadata("design:type", Number)
    ], TeamPpaDefense.prototype, "secondDown", void 0);
    __decorate([
        Metadata({ data: "json, name=thirdDown" }),
        __metadata("design:type", Number)
    ], TeamPpaDefense.prototype, "thirdDown", void 0);
    return TeamPpaDefense;
}(SpeakeasyBase));
export { TeamPpaDefense };
var TeamPpaOffenseCumulative = /** @class */ (function (_super) {
    __extends(TeamPpaOffenseCumulative, _super);
    function TeamPpaOffenseCumulative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=passing" }),
        __metadata("design:type", Number)
    ], TeamPpaOffenseCumulative.prototype, "passing", void 0);
    __decorate([
        Metadata({ data: "json, name=rushing" }),
        __metadata("design:type", Number)
    ], TeamPpaOffenseCumulative.prototype, "rushing", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], TeamPpaOffenseCumulative.prototype, "total", void 0);
    return TeamPpaOffenseCumulative;
}(SpeakeasyBase));
export { TeamPpaOffenseCumulative };
var TeamPpaOffense = /** @class */ (function (_super) {
    __extends(TeamPpaOffense, _super);
    function TeamPpaOffense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cumulative" }),
        __metadata("design:type", TeamPpaOffenseCumulative)
    ], TeamPpaOffense.prototype, "cumulative", void 0);
    __decorate([
        Metadata({ data: "json, name=firstDown" }),
        __metadata("design:type", Number)
    ], TeamPpaOffense.prototype, "firstDown", void 0);
    __decorate([
        Metadata({ data: "json, name=overall" }),
        __metadata("design:type", Number)
    ], TeamPpaOffense.prototype, "overall", void 0);
    __decorate([
        Metadata({ data: "json, name=passing" }),
        __metadata("design:type", Number)
    ], TeamPpaOffense.prototype, "passing", void 0);
    __decorate([
        Metadata({ data: "json, name=rushing" }),
        __metadata("design:type", Number)
    ], TeamPpaOffense.prototype, "rushing", void 0);
    __decorate([
        Metadata({ data: "json, name=secondDown" }),
        __metadata("design:type", Number)
    ], TeamPpaOffense.prototype, "secondDown", void 0);
    __decorate([
        Metadata({ data: "json, name=thirdDown" }),
        __metadata("design:type", Number)
    ], TeamPpaOffense.prototype, "thirdDown", void 0);
    return TeamPpaOffense;
}(SpeakeasyBase));
export { TeamPpaOffense };
var TeamPpa = /** @class */ (function (_super) {
    __extends(TeamPpa, _super);
    function TeamPpa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=conference" }),
        __metadata("design:type", String)
    ], TeamPpa.prototype, "conference", void 0);
    __decorate([
        Metadata({ data: "json, name=defense" }),
        __metadata("design:type", TeamPpaDefense)
    ], TeamPpa.prototype, "defense", void 0);
    __decorate([
        Metadata({ data: "json, name=offense" }),
        __metadata("design:type", TeamPpaOffense)
    ], TeamPpa.prototype, "offense", void 0);
    __decorate([
        Metadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], TeamPpa.prototype, "season", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], TeamPpa.prototype, "team", void 0);
    return TeamPpa;
}(SpeakeasyBase));
export { TeamPpa };
