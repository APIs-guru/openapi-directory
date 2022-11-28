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
var GetGroupTopicRepliesByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetGroupTopicRepliesByIdQueryParams, _super);
    function GetGroupTopicRepliesByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetGroupTopicRepliesByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" }),
        __metadata("design:type", String)
    ], GetGroupTopicRepliesByIdQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reply_id" }),
        __metadata("design:type", String)
    ], GetGroupTopicRepliesByIdQueryParams.prototype, "replyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic_id" }),
        __metadata("design:type", String)
    ], GetGroupTopicRepliesByIdQueryParams.prototype, "topicId", void 0);
    return GetGroupTopicRepliesByIdQueryParams;
}(SpeakeasyBase));
export { GetGroupTopicRepliesByIdQueryParams };
var GetGroupTopicRepliesById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetGroupTopicRepliesById200ApplicationJson, _super);
    function GetGroupTopicRepliesById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply" }),
        __metadata("design:type", shared.TopicReply)
    ], GetGroupTopicRepliesById200ApplicationJson.prototype, "reply", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], GetGroupTopicRepliesById200ApplicationJson.prototype, "stat", void 0);
    return GetGroupTopicRepliesById200ApplicationJson;
}(SpeakeasyBase));
export { GetGroupTopicRepliesById200ApplicationJson };
var GetGroupTopicRepliesByIdRequest = /** @class */ (function (_super) {
    __extends(GetGroupTopicRepliesByIdRequest, _super);
    function GetGroupTopicRepliesByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupTopicRepliesByIdQueryParams)
    ], GetGroupTopicRepliesByIdRequest.prototype, "queryParams", void 0);
    return GetGroupTopicRepliesByIdRequest;
}(SpeakeasyBase));
export { GetGroupTopicRepliesByIdRequest };
var GetGroupTopicRepliesByIdResponse = /** @class */ (function (_super) {
    __extends(GetGroupTopicRepliesByIdResponse, _super);
    function GetGroupTopicRepliesByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGroupTopicRepliesByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGroupTopicRepliesByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGroupTopicRepliesById200ApplicationJson)
    ], GetGroupTopicRepliesByIdResponse.prototype, "getGroupTopicRepliesById200ApplicationJsonObject", void 0);
    return GetGroupTopicRepliesByIdResponse;
}(SpeakeasyBase));
export { GetGroupTopicRepliesByIdResponse };
