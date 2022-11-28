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
var CommitDetail = /** @class */ (function (_super) {
    __extends(CommitDetail, _super);
    function CommitDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_date" }),
        __metadata("design:type", Date)
    ], CommitDetail.prototype, "authorDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_email" }),
        __metadata("design:type", String)
    ], CommitDetail.prototype, "authorEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_login" }),
        __metadata("design:type", String)
    ], CommitDetail.prototype, "authorLogin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author_name" }),
        __metadata("design:type", String)
    ], CommitDetail.prototype, "authorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], CommitDetail.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit" }),
        __metadata("design:type", String)
    ], CommitDetail.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_url" }),
        __metadata("design:type", String)
    ], CommitDetail.prototype, "commitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer_date" }),
        __metadata("design:type", Date)
    ], CommitDetail.prototype, "committerDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer_email" }),
        __metadata("design:type", String)
    ], CommitDetail.prototype, "committerEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer_login" }),
        __metadata("design:type", String)
    ], CommitDetail.prototype, "committerLogin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committer_name" }),
        __metadata("design:type", String)
    ], CommitDetail.prototype, "committerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], CommitDetail.prototype, "subject", void 0);
    return CommitDetail;
}(SpeakeasyBase));
export { CommitDetail };
