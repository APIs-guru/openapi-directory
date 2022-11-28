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
var TopicTopicTopicNameGetPathParams = /** @class */ (function (_super) {
    __extends(TopicTopicTopicNameGetPathParams, _super);
    function TopicTopicTopicNameGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic_name" }),
        __metadata("design:type", String)
    ], TopicTopicTopicNameGetPathParams.prototype, "topicName", void 0);
    return TopicTopicTopicNameGetPathParams;
}(SpeakeasyBase));
export { TopicTopicTopicNameGetPathParams };
var TopicTopicTopicNameGetQueryParams = /** @class */ (function (_super) {
    __extends(TopicTopicTopicNameGetQueryParams, _super);
    function TopicTopicTopicNameGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=base64_message" }),
        __metadata("design:type", String)
    ], TopicTopicTopicNameGetQueryParams.prototype, "base64Message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message" }),
        __metadata("design:type", String)
    ], TopicTopicTopicNameGetQueryParams.prototype, "message", void 0);
    return TopicTopicTopicNameGetQueryParams;
}(SpeakeasyBase));
export { TopicTopicTopicNameGetQueryParams };
var TopicTopicTopicNameGetHeaders = /** @class */ (function (_super) {
    __extends(TopicTopicTopicNameGetHeaders, _super);
    function TopicTopicTopicNameGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" }),
        __metadata("design:type", String)
    ], TopicTopicTopicNameGetHeaders.prototype, "authorization", void 0);
    return TopicTopicTopicNameGetHeaders;
}(SpeakeasyBase));
export { TopicTopicTopicNameGetHeaders };
var TopicTopicTopicNameGetRequest = /** @class */ (function (_super) {
    __extends(TopicTopicTopicNameGetRequest, _super);
    function TopicTopicTopicNameGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TopicTopicTopicNameGetPathParams)
    ], TopicTopicTopicNameGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TopicTopicTopicNameGetQueryParams)
    ], TopicTopicTopicNameGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TopicTopicTopicNameGetHeaders)
    ], TopicTopicTopicNameGetRequest.prototype, "headers", void 0);
    return TopicTopicTopicNameGetRequest;
}(SpeakeasyBase));
export { TopicTopicTopicNameGetRequest };
var TopicTopicTopicNameGetResponse = /** @class */ (function (_super) {
    __extends(TopicTopicTopicNameGetResponse, _super);
    function TopicTopicTopicNameGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TopicTopicTopicNameGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], TopicTopicTopicNameGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TopicTopicTopicNameGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TopicTopicTopicNameGetResponse.prototype, "topicTopicTopicNameGet200ApplicationJsonAny", void 0);
    return TopicTopicTopicNameGetResponse;
}(SpeakeasyBase));
export { TopicTopicTopicNameGetResponse };
