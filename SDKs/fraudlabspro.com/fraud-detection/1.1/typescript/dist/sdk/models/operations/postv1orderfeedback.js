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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var PostV1OrderFeedbackActionEnum;
(function (PostV1OrderFeedbackActionEnum) {
    PostV1OrderFeedbackActionEnum["Approve"] = "APPROVE";
    PostV1OrderFeedbackActionEnum["Reject"] = "REJECT";
    PostV1OrderFeedbackActionEnum["RejectBlacklist"] = "REJECT_BLACKLIST";
})(PostV1OrderFeedbackActionEnum || (PostV1OrderFeedbackActionEnum = {}));
export var PostV1OrderFeedbackFormatEnum;
(function (PostV1OrderFeedbackFormatEnum) {
    PostV1OrderFeedbackFormatEnum["Json"] = "json";
    PostV1OrderFeedbackFormatEnum["Xml"] = "xml";
})(PostV1OrderFeedbackFormatEnum || (PostV1OrderFeedbackFormatEnum = {}));
var PostV1OrderFeedbackQueryParams = /** @class */ (function (_super) {
    __extends(PostV1OrderFeedbackQueryParams, _super);
    function PostV1OrderFeedbackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], PostV1OrderFeedbackQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], PostV1OrderFeedbackQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], PostV1OrderFeedbackQueryParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PostV1OrderFeedbackQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=notes" }),
        __metadata("design:type", String)
    ], PostV1OrderFeedbackQueryParams.prototype, "notes", void 0);
    return PostV1OrderFeedbackQueryParams;
}(SpeakeasyBase));
export { PostV1OrderFeedbackQueryParams };
var PostV1OrderFeedbackRequest = /** @class */ (function (_super) {
    __extends(PostV1OrderFeedbackRequest, _super);
    function PostV1OrderFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostV1OrderFeedbackQueryParams)
    ], PostV1OrderFeedbackRequest.prototype, "queryParams", void 0);
    return PostV1OrderFeedbackRequest;
}(SpeakeasyBase));
export { PostV1OrderFeedbackRequest };
var PostV1OrderFeedbackResponse = /** @class */ (function (_super) {
    __extends(PostV1OrderFeedbackResponse, _super);
    function PostV1OrderFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostV1OrderFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostV1OrderFeedbackResponse.prototype, "postV1OrderFeedback200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostV1OrderFeedbackResponse.prototype, "statusCode", void 0);
    return PostV1OrderFeedbackResponse;
}(SpeakeasyBase));
export { PostV1OrderFeedbackResponse };
