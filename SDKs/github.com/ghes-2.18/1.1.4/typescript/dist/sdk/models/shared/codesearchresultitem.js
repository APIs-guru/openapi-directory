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
import { MinimalRepository } from "./minimalrepository";
import { SearchResultTextMatches } from "./searchresulttextmatches";
// CodeSearchResultItem
/**
 * Code Search Result Item
**/
var CodeSearchResultItem = /** @class */ (function (_super) {
    __extends(CodeSearchResultItem, _super);
    function CodeSearchResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_size" }),
        __metadata("design:type", Number)
    ], CodeSearchResultItem.prototype, "fileSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=git_url" }),
        __metadata("design:type", String)
    ], CodeSearchResultItem.prototype, "gitUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CodeSearchResultItem.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], CodeSearchResultItem.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_modified_at" }),
        __metadata("design:type", Date)
    ], CodeSearchResultItem.prototype, "lastModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_numbers" }),
        __metadata("design:type", Array)
    ], CodeSearchResultItem.prototype, "lineNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CodeSearchResultItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], CodeSearchResultItem.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", MinimalRepository)
    ], CodeSearchResultItem.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], CodeSearchResultItem.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], CodeSearchResultItem.prototype, "sha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text_matches", elemType: SearchResultTextMatches }),
        __metadata("design:type", Array)
    ], CodeSearchResultItem.prototype, "textMatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CodeSearchResultItem.prototype, "url", void 0);
    return CodeSearchResultItem;
}(SpeakeasyBase));
export { CodeSearchResultItem };
