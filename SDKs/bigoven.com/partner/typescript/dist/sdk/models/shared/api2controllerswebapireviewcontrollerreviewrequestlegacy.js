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
// Api2ControllersWebApiReviewControllerReviewRequestLegacy
/**
 * Legacy -- This object here is deprecated. Please use the new "ReviewRequest" structure for all future development
**/
var Api2ControllersWebApiReviewControllerReviewRequestLegacy = /** @class */ (function (_super) {
    __extends(Api2ControllersWebApiReviewControllerReviewRequestLegacy, _super);
    function Api2ControllersWebApiReviewControllerReviewRequestLegacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveMinutes, form, name=ActiveMinutes;" }),
        __metadata("design:type", Number)
    ], Api2ControllersWebApiReviewControllerReviewRequestLegacy.prototype, "activeMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Comment, form, name=Comment;" }),
        __metadata("design:type", String)
    ], Api2ControllersWebApiReviewControllerReviewRequestLegacy.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GUID, form, name=GUID;" }),
        __metadata("design:type", String)
    ], Api2ControllersWebApiReviewControllerReviewRequestLegacy.prototype, "guid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MakeAgain, form, name=MakeAgain;" }),
        __metadata("design:type", String)
    ], Api2ControllersWebApiReviewControllerReviewRequestLegacy.prototype, "makeAgain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentID, form, name=ParentID;" }),
        __metadata("design:type", Number)
    ], Api2ControllersWebApiReviewControllerReviewRequestLegacy.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StarRating, form, name=StarRating;" }),
        __metadata("design:type", Number)
    ], Api2ControllersWebApiReviewControllerReviewRequestLegacy.prototype, "starRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalMinutes, form, name=TotalMinutes;" }),
        __metadata("design:type", Number)
    ], Api2ControllersWebApiReviewControllerReviewRequestLegacy.prototype, "totalMinutes", void 0);
    return Api2ControllersWebApiReviewControllerReviewRequestLegacy;
}(SpeakeasyBase));
export { Api2ControllersWebApiReviewControllerReviewRequestLegacy };
