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
import { DateRange } from "./daterange";
import { User } from "./user";
export var SearchUserActivityRequestActivityTypesEnum;
(function (SearchUserActivityRequestActivityTypesEnum) {
    SearchUserActivityRequestActivityTypesEnum["ActivityTypeUnspecified"] = "ACTIVITY_TYPE_UNSPECIFIED";
    SearchUserActivityRequestActivityTypesEnum["Pageview"] = "PAGEVIEW";
    SearchUserActivityRequestActivityTypesEnum["Screenview"] = "SCREENVIEW";
    SearchUserActivityRequestActivityTypesEnum["Goal"] = "GOAL";
    SearchUserActivityRequestActivityTypesEnum["Ecommerce"] = "ECOMMERCE";
    SearchUserActivityRequestActivityTypesEnum["Event"] = "EVENT";
})(SearchUserActivityRequestActivityTypesEnum || (SearchUserActivityRequestActivityTypesEnum = {}));
// SearchUserActivityRequest
/**
 * The request to fetch User Report from Reporting API `userActivity:get` call.
**/
var SearchUserActivityRequest = /** @class */ (function (_super) {
    __extends(SearchUserActivityRequest, _super);
    function SearchUserActivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityTypes" }),
        __metadata("design:type", Array)
    ], SearchUserActivityRequest.prototype, "activityTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], SearchUserActivityRequest.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], SearchUserActivityRequest.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], SearchUserActivityRequest.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], SearchUserActivityRequest.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewId" }),
        __metadata("design:type", String)
    ], SearchUserActivityRequest.prototype, "viewId", void 0);
    return SearchUserActivityRequest;
}(SpeakeasyBase));
export { SearchUserActivityRequest };
