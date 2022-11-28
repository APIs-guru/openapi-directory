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
var ReviewGetRepliesPathParams = /** @class */ (function (_super) {
    __extends(ReviewGetRepliesPathParams, _super);
    function ReviewGetRepliesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" }),
        __metadata("design:type", String)
    ], ReviewGetRepliesPathParams.prototype, "reviewId", void 0);
    return ReviewGetRepliesPathParams;
}(SpeakeasyBase));
export { ReviewGetRepliesPathParams };
var ReviewGetRepliesQueryParams = /** @class */ (function (_super) {
    __extends(ReviewGetRepliesQueryParams, _super);
    function ReviewGetRepliesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" }),
        __metadata("design:type", Number)
    ], ReviewGetRepliesQueryParams.prototype, "pg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" }),
        __metadata("design:type", Number)
    ], ReviewGetRepliesQueryParams.prototype, "rpp", void 0);
    return ReviewGetRepliesQueryParams;
}(SpeakeasyBase));
export { ReviewGetRepliesQueryParams };
var ReviewGetRepliesRequest = /** @class */ (function (_super) {
    __extends(ReviewGetRepliesRequest, _super);
    function ReviewGetRepliesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReviewGetRepliesPathParams)
    ], ReviewGetRepliesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReviewGetRepliesQueryParams)
    ], ReviewGetRepliesRequest.prototype, "queryParams", void 0);
    return ReviewGetRepliesRequest;
}(SpeakeasyBase));
export { ReviewGetRepliesRequest };
var ReviewGetRepliesResponse = /** @class */ (function (_super) {
    __extends(ReviewGetRepliesResponse, _super);
    function ReviewGetRepliesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BigOvenModelApiReply }),
        __metadata("design:type", Array)
    ], ReviewGetRepliesResponse.prototype, "bigOvenModelApiReplies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReviewGetRepliesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReviewGetRepliesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReviewGetRepliesResponse.prototype, "statusCode", void 0);
    return ReviewGetRepliesResponse;
}(SpeakeasyBase));
export { ReviewGetRepliesResponse };
