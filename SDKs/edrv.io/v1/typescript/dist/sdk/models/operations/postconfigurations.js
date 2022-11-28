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
var PostConfigurationsRequestBody = /** @class */ (function (_super) {
    __extends(PostConfigurationsRequestBody, _super);
    function PostConfigurationsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], PostConfigurationsRequestBody.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PostConfigurationsRequestBody.prototype, "value", void 0);
    return PostConfigurationsRequestBody;
}(SpeakeasyBase));
export { PostConfigurationsRequestBody };
var PostConfigurations201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostConfigurations201ApplicationJson, _super);
    function PostConfigurations201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostConfigurations201ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], PostConfigurations201ApplicationJson.prototype, "ok", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", Map)
    ], PostConfigurations201ApplicationJson.prototype, "result", void 0);
    return PostConfigurations201ApplicationJson;
}(SpeakeasyBase));
export { PostConfigurations201ApplicationJson };
var PostConfigurationsRequest = /** @class */ (function (_super) {
    __extends(PostConfigurationsRequest, _super);
    function PostConfigurationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostConfigurationsRequestBody)
    ], PostConfigurationsRequest.prototype, "request", void 0);
    return PostConfigurationsRequest;
}(SpeakeasyBase));
export { PostConfigurationsRequest };
var PostConfigurationsResponse = /** @class */ (function (_super) {
    __extends(PostConfigurationsResponse, _super);
    function PostConfigurationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostConfigurationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostConfigurationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostConfigurations201ApplicationJson)
    ], PostConfigurationsResponse.prototype, "postConfigurations201ApplicationJsonObject", void 0);
    return PostConfigurationsResponse;
}(SpeakeasyBase));
export { PostConfigurationsResponse };
