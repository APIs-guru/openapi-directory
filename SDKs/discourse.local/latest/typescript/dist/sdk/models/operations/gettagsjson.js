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
var GetTagsJson200ApplicationJsonExtras = /** @class */ (function (_super) {
    __extends(GetTagsJson200ApplicationJsonExtras, _super);
    function GetTagsJson200ApplicationJsonExtras() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], GetTagsJson200ApplicationJsonExtras.prototype, "categories", void 0);
    return GetTagsJson200ApplicationJsonExtras;
}(SpeakeasyBase));
export { GetTagsJson200ApplicationJsonExtras };
var GetTagsJson200ApplicationJsonTags = /** @class */ (function (_super) {
    __extends(GetTagsJson200ApplicationJsonTags, _super);
    function GetTagsJson200ApplicationJsonTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetTagsJson200ApplicationJsonTags.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetTagsJson200ApplicationJsonTags.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pm_count" }),
        __metadata("design:type", Number)
    ], GetTagsJson200ApplicationJsonTags.prototype, "pmCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_tag" }),
        __metadata("design:type", String)
    ], GetTagsJson200ApplicationJsonTags.prototype, "targetTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], GetTagsJson200ApplicationJsonTags.prototype, "text", void 0);
    return GetTagsJson200ApplicationJsonTags;
}(SpeakeasyBase));
export { GetTagsJson200ApplicationJsonTags };
var GetTagsJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTagsJson200ApplicationJson, _super);
    function GetTagsJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extras" }),
        __metadata("design:type", GetTagsJson200ApplicationJsonExtras)
    ], GetTagsJson200ApplicationJson.prototype, "extras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: GetTagsJson200ApplicationJsonTags }),
        __metadata("design:type", Array)
    ], GetTagsJson200ApplicationJson.prototype, "tags", void 0);
    return GetTagsJson200ApplicationJson;
}(SpeakeasyBase));
export { GetTagsJson200ApplicationJson };
var GetTagsJsonResponse = /** @class */ (function (_super) {
    __extends(GetTagsJsonResponse, _super);
    function GetTagsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTagsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTagsJson200ApplicationJson)
    ], GetTagsJsonResponse.prototype, "getTagsJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTagsJsonResponse.prototype, "statusCode", void 0);
    return GetTagsJsonResponse;
}(SpeakeasyBase));
export { GetTagsJsonResponse };
