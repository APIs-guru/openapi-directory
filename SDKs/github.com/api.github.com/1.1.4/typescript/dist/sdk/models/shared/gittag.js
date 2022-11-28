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
import { Verification } from "./verification";
var GitTagObject = /** @class */ (function (_super) {
    __extends(GitTagObject, _super);
    function GitTagObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], GitTagObject.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GitTagObject.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GitTagObject.prototype, "url", void 0);
    return GitTagObject;
}(SpeakeasyBase));
export { GitTagObject };
var GitTagTagger = /** @class */ (function (_super) {
    __extends(GitTagTagger, _super);
    function GitTagTagger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], GitTagTagger.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GitTagTagger.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitTagTagger.prototype, "name", void 0);
    return GitTagTagger;
}(SpeakeasyBase));
export { GitTagTagger };
// GitTag
/**
 * Metadata for a Git tag
**/
var GitTag = /** @class */ (function (_super) {
    __extends(GitTag, _super);
    function GitTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GitTag.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], GitTag.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", GitTagObject)
    ], GitTag.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], GitTag.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], GitTag.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagger" }),
        __metadata("design:type", GitTagTagger)
    ], GitTag.prototype, "tagger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GitTag.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification" }),
        __metadata("design:type", Verification)
    ], GitTag.prototype, "verification", void 0);
    return GitTag;
}(SpeakeasyBase));
export { GitTag };
