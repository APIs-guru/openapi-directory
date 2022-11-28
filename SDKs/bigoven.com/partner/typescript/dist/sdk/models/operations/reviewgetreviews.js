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
import * as shared from "../shared";
var ReviewGetReviewsPathParams = /** @class */ (function (_super) {
    __extends(ReviewGetReviewsPathParams, _super);
    function ReviewGetReviewsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" }),
        __metadata("design:type", Number)
    ], ReviewGetReviewsPathParams.prototype, "recipeId", void 0);
    return ReviewGetReviewsPathParams;
}(SpeakeasyBase));
export { ReviewGetReviewsPathParams };
var ReviewGetReviewsQueryParams = /** @class */ (function (_super) {
    __extends(ReviewGetReviewsQueryParams, _super);
    function ReviewGetReviewsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" }),
        __metadata("design:type", Number)
    ], ReviewGetReviewsQueryParams.prototype, "pg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" }),
        __metadata("design:type", Number)
    ], ReviewGetReviewsQueryParams.prototype, "rpp", void 0);
    return ReviewGetReviewsQueryParams;
}(SpeakeasyBase));
export { ReviewGetReviewsQueryParams };
var ReviewGetReviewsRequest = /** @class */ (function (_super) {
    __extends(ReviewGetReviewsRequest, _super);
    function ReviewGetReviewsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReviewGetReviewsPathParams)
    ], ReviewGetReviewsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReviewGetReviewsQueryParams)
    ], ReviewGetReviewsRequest.prototype, "queryParams", void 0);
    return ReviewGetReviewsRequest;
}(SpeakeasyBase));
export { ReviewGetReviewsRequest };
var ReviewGetReviewsResponse = /** @class */ (function (_super) {
    __extends(ReviewGetReviewsResponse, _super);
    function ReviewGetReviewsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BigOvenModelApiReview }),
        __metadata("design:type", Array)
    ], ReviewGetReviewsResponse.prototype, "bigOvenModelApiReviews", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReviewGetReviewsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReviewGetReviewsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReviewGetReviewsResponse.prototype, "statusCode", void 0);
    return ReviewGetReviewsResponse;
}(SpeakeasyBase));
export { ReviewGetReviewsResponse };
