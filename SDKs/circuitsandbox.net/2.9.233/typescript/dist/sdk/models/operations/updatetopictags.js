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
var UpdateTopicTagsPathParams = /** @class */ (function (_super) {
    __extends(UpdateTopicTagsPathParams, _super);
    function UpdateTopicTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" }),
        __metadata("design:type", String)
    ], UpdateTopicTagsPathParams.prototype, "topicId", void 0);
    return UpdateTopicTagsPathParams;
}(SpeakeasyBase));
export { UpdateTopicTagsPathParams };
var UpdateTopicTagsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateTopicTagsRequestBody, _super);
    function UpdateTopicTagsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=tags;" }),
        __metadata("design:type", Array)
    ], UpdateTopicTagsRequestBody.prototype, "tags", void 0);
    return UpdateTopicTagsRequestBody;
}(SpeakeasyBase));
export { UpdateTopicTagsRequestBody };
var UpdateTopicTagsSecurity = /** @class */ (function (_super) {
    __extends(UpdateTopicTagsSecurity, _super);
    function UpdateTopicTagsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateTopicTagsSecurity.prototype, "oauth", void 0);
    return UpdateTopicTagsSecurity;
}(SpeakeasyBase));
export { UpdateTopicTagsSecurity };
var UpdateTopicTagsRequest = /** @class */ (function (_super) {
    __extends(UpdateTopicTagsRequest, _super);
    function UpdateTopicTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTopicTagsPathParams)
    ], UpdateTopicTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateTopicTagsRequestBody)
    ], UpdateTopicTagsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTopicTagsSecurity)
    ], UpdateTopicTagsRequest.prototype, "security", void 0);
    return UpdateTopicTagsRequest;
}(SpeakeasyBase));
export { UpdateTopicTagsRequest };
var UpdateTopicTagsResponse = /** @class */ (function (_super) {
    __extends(UpdateTopicTagsResponse, _super);
    function UpdateTopicTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateTopicTagsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTopicTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateTopicTagsResponse.prototype, "spaceTopic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateTopicTagsResponse.prototype, "statusCode", void 0);
    return UpdateTopicTagsResponse;
}(SpeakeasyBase));
export { UpdateTopicTagsResponse };
