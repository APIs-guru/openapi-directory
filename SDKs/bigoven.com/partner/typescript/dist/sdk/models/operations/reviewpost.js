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
var ReviewPostPathParams = /** @class */ (function (_super) {
    __extends(ReviewPostPathParams, _super);
    function ReviewPostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" }),
        __metadata("design:type", Number)
    ], ReviewPostPathParams.prototype, "recipeId", void 0);
    return ReviewPostPathParams;
}(SpeakeasyBase));
export { ReviewPostPathParams };
var ReviewPostRequests = /** @class */ (function (_super) {
    __extends(ReviewPostRequests, _super);
    function ReviewPostRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Api2ControllersWebApiReviewControllerReviewRequest)
    ], ReviewPostRequests.prototype, "api2ControllersWebApiReviewControllerReviewRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.Api2ControllersWebApiReviewControllerReviewRequest)
    ], ReviewPostRequests.prototype, "api2ControllersWebApiReviewControllerReviewRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.Api2ControllersWebApiReviewControllerReviewRequest)
    ], ReviewPostRequests.prototype, "api2ControllersWebApiReviewControllerReviewRequest2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ReviewPostRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ReviewPostRequests.prototype, "textXml", void 0);
    return ReviewPostRequests;
}(SpeakeasyBase));
export { ReviewPostRequests };
var ReviewPostRequest = /** @class */ (function (_super) {
    __extends(ReviewPostRequest, _super);
    function ReviewPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReviewPostPathParams)
    ], ReviewPostRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReviewPostRequests)
    ], ReviewPostRequest.prototype, "request", void 0);
    return ReviewPostRequest;
}(SpeakeasyBase));
export { ReviewPostRequest };
var ReviewPostResponse = /** @class */ (function (_super) {
    __extends(ReviewPostResponse, _super);
    function ReviewPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReviewPostResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReviewPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReviewPostResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReviewPostResponse.prototype, "systemObject", void 0);
    return ReviewPostResponse;
}(SpeakeasyBase));
export { ReviewPostResponse };
