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
var GetMessageCommentReactionsQueryParams = /** @class */ (function (_super) {
    __extends(GetMessageCommentReactionsQueryParams, _super);
    function GetMessageCommentReactionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], GetMessageCommentReactionsQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message_comment_id" }),
        __metadata("design:type", Number)
    ], GetMessageCommentReactionsQueryParams.prototype, "messageCommentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetMessageCommentReactionsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", Number)
    ], GetMessageCommentReactionsQueryParams.prototype, "userId", void 0);
    return GetMessageCommentReactionsQueryParams;
}(SpeakeasyBase));
export { GetMessageCommentReactionsQueryParams };
var GetMessageCommentReactionsRequest = /** @class */ (function (_super) {
    __extends(GetMessageCommentReactionsRequest, _super);
    function GetMessageCommentReactionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMessageCommentReactionsQueryParams)
    ], GetMessageCommentReactionsRequest.prototype, "queryParams", void 0);
    return GetMessageCommentReactionsRequest;
}(SpeakeasyBase));
export { GetMessageCommentReactionsRequest };
var GetMessageCommentReactionsResponse = /** @class */ (function (_super) {
    __extends(GetMessageCommentReactionsResponse, _super);
    function GetMessageCommentReactionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMessageCommentReactionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MessageCommentReactionEntity }),
        __metadata("design:type", Array)
    ], GetMessageCommentReactionsResponse.prototype, "messageCommentReactionEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMessageCommentReactionsResponse.prototype, "statusCode", void 0);
    return GetMessageCommentReactionsResponse;
}(SpeakeasyBase));
export { GetMessageCommentReactionsResponse };
