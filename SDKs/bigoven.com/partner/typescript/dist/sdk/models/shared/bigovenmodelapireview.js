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
import { BigOvenModelApiReply } from "./bigovenmodelapireply";
import { BigOvenModelApiUserInfo } from "./bigovenmodelapiuserinfo";
var BigOvenModelApiReview = /** @class */ (function (_super) {
    __extends(BigOvenModelApiReview, _super);
    function BigOvenModelApiReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveMinutes" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiReview.prototype, "activeMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Comment" }),
        __metadata("design:type", String)
    ], BigOvenModelApiReview.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], BigOvenModelApiReview.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeaturedReply" }),
        __metadata("design:type", BigOvenModelApiReply)
    ], BigOvenModelApiReview.prototype, "featuredReply", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GUID" }),
        __metadata("design:type", String)
    ], BigOvenModelApiReview.prototype, "guid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ID" }),
        __metadata("design:type", String)
    ], BigOvenModelApiReview.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModified" }),
        __metadata("design:type", Date)
    ], BigOvenModelApiReview.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiReview.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Poster" }),
        __metadata("design:type", BigOvenModelApiUserInfo)
    ], BigOvenModelApiReview.prototype, "poster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Replies", elemType: BigOvenModelApiReview }),
        __metadata("design:type", Array)
    ], BigOvenModelApiReview.prototype, "replies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReplyCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiReview.prototype, "replyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReviewID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiReview.prototype, "reviewId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StarRating" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiReview.prototype, "starRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalMinutes" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiReview.prototype, "totalMinutes", void 0);
    return BigOvenModelApiReview;
}(SpeakeasyBase));
export { BigOvenModelApiReview };
