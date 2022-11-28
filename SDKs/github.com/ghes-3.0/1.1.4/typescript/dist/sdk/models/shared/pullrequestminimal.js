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
var PullRequestMinimalBaseRepo = /** @class */ (function (_super) {
    __extends(PullRequestMinimalBaseRepo, _super);
    function PullRequestMinimalBaseRepo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestMinimalBaseRepo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PullRequestMinimalBaseRepo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestMinimalBaseRepo.prototype, "url", void 0);
    return PullRequestMinimalBaseRepo;
}(SpeakeasyBase));
export { PullRequestMinimalBaseRepo };
var PullRequestMinimalBase = /** @class */ (function (_super) {
    __extends(PullRequestMinimalBase, _super);
    function PullRequestMinimalBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], PullRequestMinimalBase.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repo" }),
        __metadata("design:type", PullRequestMinimalBaseRepo)
    ], PullRequestMinimalBase.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], PullRequestMinimalBase.prototype, "sha", void 0);
    return PullRequestMinimalBase;
}(SpeakeasyBase));
export { PullRequestMinimalBase };
var PullRequestMinimalHeadRepo = /** @class */ (function (_super) {
    __extends(PullRequestMinimalHeadRepo, _super);
    function PullRequestMinimalHeadRepo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestMinimalHeadRepo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PullRequestMinimalHeadRepo.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestMinimalHeadRepo.prototype, "url", void 0);
    return PullRequestMinimalHeadRepo;
}(SpeakeasyBase));
export { PullRequestMinimalHeadRepo };
var PullRequestMinimalHead = /** @class */ (function (_super) {
    __extends(PullRequestMinimalHead, _super);
    function PullRequestMinimalHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], PullRequestMinimalHead.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repo" }),
        __metadata("design:type", PullRequestMinimalHeadRepo)
    ], PullRequestMinimalHead.prototype, "repo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], PullRequestMinimalHead.prototype, "sha", void 0);
    return PullRequestMinimalHead;
}(SpeakeasyBase));
export { PullRequestMinimalHead };
var PullRequestMinimal = /** @class */ (function (_super) {
    __extends(PullRequestMinimal, _super);
    function PullRequestMinimal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base" }),
        __metadata("design:type", PullRequestMinimalBase)
    ], PullRequestMinimal.prototype, "base", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=head" }),
        __metadata("design:type", PullRequestMinimalHead)
    ], PullRequestMinimal.prototype, "head", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PullRequestMinimal.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], PullRequestMinimal.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullRequestMinimal.prototype, "url", void 0);
    return PullRequestMinimal;
}(SpeakeasyBase));
export { PullRequestMinimal };
