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
var PostTagGroupsJsonRequestBody = /** @class */ (function (_super) {
    __extends(PostTagGroupsJsonRequestBody, _super);
    function PostTagGroupsJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostTagGroupsJsonRequestBody.prototype, "name", void 0);
    return PostTagGroupsJsonRequestBody;
}(SpeakeasyBase));
export { PostTagGroupsJsonRequestBody };
var PostTagGroupsJson200ApplicationJsonTagGroup = /** @class */ (function (_super) {
    __extends(PostTagGroupsJson200ApplicationJsonTagGroup, _super);
    function PostTagGroupsJson200ApplicationJsonTagGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostTagGroupsJson200ApplicationJsonTagGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostTagGroupsJson200ApplicationJsonTagGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=one_per_topic" }),
        __metadata("design:type", Boolean)
    ], PostTagGroupsJson200ApplicationJsonTagGroup.prototype, "onePerTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_tag_name" }),
        __metadata("design:type", Array)
    ], PostTagGroupsJson200ApplicationJsonTagGroup.prototype, "parentTagName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Map)
    ], PostTagGroupsJson200ApplicationJsonTagGroup.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_names" }),
        __metadata("design:type", Array)
    ], PostTagGroupsJson200ApplicationJsonTagGroup.prototype, "tagNames", void 0);
    return PostTagGroupsJson200ApplicationJsonTagGroup;
}(SpeakeasyBase));
export { PostTagGroupsJson200ApplicationJsonTagGroup };
var PostTagGroupsJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTagGroupsJson200ApplicationJson, _super);
    function PostTagGroupsJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag_group" }),
        __metadata("design:type", PostTagGroupsJson200ApplicationJsonTagGroup)
    ], PostTagGroupsJson200ApplicationJson.prototype, "tagGroup", void 0);
    return PostTagGroupsJson200ApplicationJson;
}(SpeakeasyBase));
export { PostTagGroupsJson200ApplicationJson };
var PostTagGroupsJsonRequest = /** @class */ (function (_super) {
    __extends(PostTagGroupsJsonRequest, _super);
    function PostTagGroupsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostTagGroupsJsonRequestBody)
    ], PostTagGroupsJsonRequest.prototype, "request", void 0);
    return PostTagGroupsJsonRequest;
}(SpeakeasyBase));
export { PostTagGroupsJsonRequest };
var PostTagGroupsJsonResponse = /** @class */ (function (_super) {
    __extends(PostTagGroupsJsonResponse, _super);
    function PostTagGroupsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTagGroupsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTagGroupsJson200ApplicationJson)
    ], PostTagGroupsJsonResponse.prototype, "postTagGroupsJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTagGroupsJsonResponse.prototype, "statusCode", void 0);
    return PostTagGroupsJsonResponse;
}(SpeakeasyBase));
export { PostTagGroupsJsonResponse };
