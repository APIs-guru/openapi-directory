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
var ReviewPostReplyPathParams = /** @class */ (function (_super) {
    __extends(ReviewPostReplyPathParams, _super);
    function ReviewPostReplyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" }),
        __metadata("design:type", String)
    ], ReviewPostReplyPathParams.prototype, "reviewId", void 0);
    return ReviewPostReplyPathParams;
}(SpeakeasyBase));
export { ReviewPostReplyPathParams };
var ReviewPostReplyRequests = /** @class */ (function (_super) {
    __extends(ReviewPostReplyRequests, _super);
    function ReviewPostReplyRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Api2ControllersWebApiReviewControllerPostReplyReq)
    ], ReviewPostReplyRequests.prototype, "api2ControllersWebApiReviewControllerPostReplyReq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.Api2ControllersWebApiReviewControllerPostReplyReq)
    ], ReviewPostReplyRequests.prototype, "api2ControllersWebApiReviewControllerPostReplyReq1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.Api2ControllersWebApiReviewControllerPostReplyReq)
    ], ReviewPostReplyRequests.prototype, "api2ControllersWebApiReviewControllerPostReplyReq2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ReviewPostReplyRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ReviewPostReplyRequests.prototype, "textXml", void 0);
    return ReviewPostReplyRequests;
}(SpeakeasyBase));
export { ReviewPostReplyRequests };
var ReviewPostReplyRequest = /** @class */ (function (_super) {
    __extends(ReviewPostReplyRequest, _super);
    function ReviewPostReplyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReviewPostReplyPathParams)
    ], ReviewPostReplyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReviewPostReplyRequests)
    ], ReviewPostReplyRequest.prototype, "request", void 0);
    return ReviewPostReplyRequest;
}(SpeakeasyBase));
export { ReviewPostReplyRequest };
var ReviewPostReplyResponse = /** @class */ (function (_super) {
    __extends(ReviewPostReplyResponse, _super);
    function ReviewPostReplyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BigOvenModelApiReply)
    ], ReviewPostReplyResponse.prototype, "bigOvenModelApiReply", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReviewPostReplyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReviewPostReplyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReviewPostReplyResponse.prototype, "statusCode", void 0);
    return ReviewPostReplyResponse;
}(SpeakeasyBase));
export { ReviewPostReplyResponse };
