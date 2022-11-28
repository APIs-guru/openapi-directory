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
export var PostTokensRequestBodyChannelEnum;
(function (PostTokensRequestBodyChannelEnum) {
    PostTokensRequestBodyChannelEnum["Physical"] = "physical";
    PostTokensRequestBodyChannelEnum["Slack"] = "slack";
    PostTokensRequestBodyChannelEnum["Telegram"] = "telegram";
    PostTokensRequestBodyChannelEnum["Sms"] = "sms";
})(PostTokensRequestBodyChannelEnum || (PostTokensRequestBodyChannelEnum = {}));
var PostTokensRequestBody = /** @class */ (function (_super) {
    __extends(PostTokensRequestBody, _super);
    function PostTokensRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PostTokensRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], PostTokensRequestBody.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driver" }),
        __metadata("design:type", String)
    ], PostTokensRequestBody.prototype, "driver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=physicalId" }),
        __metadata("design:type", String)
    ], PostTokensRequestBody.prototype, "physicalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostTokensRequestBody.prototype, "type", void 0);
    return PostTokensRequestBody;
}(SpeakeasyBase));
export { PostTokensRequestBody };
var PostTokens201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTokens201ApplicationJson, _super);
    function PostTokens201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostTokens201ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], PostTokens201ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], PostTokens201ApplicationJson.prototype, "result", void 0);
    return PostTokens201ApplicationJson;
}(SpeakeasyBase));
export { PostTokens201ApplicationJson };
var PostTokensRequest = /** @class */ (function (_super) {
    __extends(PostTokensRequest, _super);
    function PostTokensRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostTokensRequestBody)
    ], PostTokensRequest.prototype, "request", void 0);
    return PostTokensRequest;
}(SpeakeasyBase));
export { PostTokensRequest };
var PostTokensResponse = /** @class */ (function (_super) {
    __extends(PostTokensResponse, _super);
    function PostTokensResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTokensResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTokensResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTokens201ApplicationJson)
    ], PostTokensResponse.prototype, "postTokens201ApplicationJsonObject", void 0);
    return PostTokensResponse;
}(SpeakeasyBase));
export { PostTokensResponse };
