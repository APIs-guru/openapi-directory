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
var SimpleCommitAuthor = /** @class */ (function (_super) {
    __extends(SimpleCommitAuthor, _super);
    function SimpleCommitAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], SimpleCommitAuthor.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SimpleCommitAuthor.prototype, "name", void 0);
    return SimpleCommitAuthor;
}(SpeakeasyBase));
export { SimpleCommitAuthor };
var SimpleCommitCommitter = /** @class */ (function (_super) {
    __extends(SimpleCommitCommitter, _super);
    function SimpleCommitCommitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], SimpleCommitCommitter.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SimpleCommitCommitter.prototype, "name", void 0);
    return SimpleCommitCommitter;
}(SpeakeasyBase));
export { SimpleCommitCommitter };
// SimpleCommit
/**
 * Simple Commit
**/
var SimpleCommit = /** @class */ (function (_super) {
    __extends(SimpleCommit, _super);
    function SimpleCommit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", SimpleCommitAuthor)
    ], SimpleCommit.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer" }),
        __metadata("design:type", SimpleCommitCommitter)
    ], SimpleCommit.prototype, "committer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SimpleCommit.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SimpleCommit.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], SimpleCommit.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tree_id" }),
        __metadata("design:type", String)
    ], SimpleCommit.prototype, "treeId", void 0);
    return SimpleCommit;
}(SpeakeasyBase));
export { SimpleCommit };
