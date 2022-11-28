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
var CreativeCorrections = /** @class */ (function (_super) {
    __extends(CreativeCorrections, _super);
    function CreativeCorrections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Array)
    ], CreativeCorrections.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], CreativeCorrections.prototype, "reason", void 0);
    return CreativeCorrections;
}(SpeakeasyBase));
export { CreativeCorrections };
var CreativeDisapprovalReasons = /** @class */ (function (_super) {
    __extends(CreativeDisapprovalReasons, _super);
    function CreativeDisapprovalReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", Array)
    ], CreativeDisapprovalReasons.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], CreativeDisapprovalReasons.prototype, "reason", void 0);
    return CreativeDisapprovalReasons;
}(SpeakeasyBase));
export { CreativeDisapprovalReasons };
var CreativeFilteringReasonsReasons = /** @class */ (function (_super) {
    __extends(CreativeFilteringReasonsReasons, _super);
    function CreativeFilteringReasonsReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteringCount" }),
        __metadata("design:type", String)
    ], CreativeFilteringReasonsReasons.prototype, "filteringCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteringStatus" }),
        __metadata("design:type", Number)
    ], CreativeFilteringReasonsReasons.prototype, "filteringStatus", void 0);
    return CreativeFilteringReasonsReasons;
}(SpeakeasyBase));
export { CreativeFilteringReasonsReasons };
// CreativeFilteringReasons
/**
 * The filtering reasons for the creative. Read-only. This field should not be set in requests.
**/
var CreativeFilteringReasons = /** @class */ (function (_super) {
    __extends(CreativeFilteringReasons, _super);
    function CreativeFilteringReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], CreativeFilteringReasons.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reasons", elemType: CreativeFilteringReasonsReasons }),
        __metadata("design:type", Array)
    ], CreativeFilteringReasons.prototype, "reasons", void 0);
    return CreativeFilteringReasons;
}(SpeakeasyBase));
export { CreativeFilteringReasons };
// Creative
/**
 * A creative and its classification data.
**/
var Creative = /** @class */ (function (_super) {
    __extends(Creative, _super);
    function Creative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HTMLSnippet" }),
        __metadata("design:type", String)
    ], Creative.prototype, "htmlSnippet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserName" }),
        __metadata("design:type", String)
    ], Creative.prototype, "advertiserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agencyId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "agencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiUploadTimestamp" }),
        __metadata("design:type", Date)
    ], Creative.prototype, "apiUploadTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerCreativeId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "buyerCreativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickThroughUrl" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "clickThroughUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=corrections", elemType: CreativeCorrections }),
        __metadata("design:type", Array)
    ], Creative.prototype, "corrections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disapprovalReasons", elemType: CreativeDisapprovalReasons }),
        __metadata("design:type", Array)
    ], Creative.prototype, "disapprovalReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteringReasons" }),
        __metadata("design:type", CreativeFilteringReasons)
    ], Creative.prototype, "filteringReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impressionTrackingUrl" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "impressionTrackingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Creative.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productCategories" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "productCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedCategories" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "restrictedCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sensitiveCategories" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "sensitiveCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Creative.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vendorType" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "vendorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoURL" }),
        __metadata("design:type", String)
    ], Creative.prototype, "videoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "width", void 0);
    return Creative;
}(SpeakeasyBase));
export { Creative };
