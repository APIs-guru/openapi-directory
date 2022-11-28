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
export var MarkdownRenderRequestBodyModeEnum;
(function (MarkdownRenderRequestBodyModeEnum) {
    MarkdownRenderRequestBodyModeEnum["Markdown"] = "markdown";
    MarkdownRenderRequestBodyModeEnum["Gfm"] = "gfm";
})(MarkdownRenderRequestBodyModeEnum || (MarkdownRenderRequestBodyModeEnum = {}));
var MarkdownRenderRequestBody = /** @class */ (function (_super) {
    __extends(MarkdownRenderRequestBody, _super);
    function MarkdownRenderRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", String)
    ], MarkdownRenderRequestBody.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], MarkdownRenderRequestBody.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], MarkdownRenderRequestBody.prototype, "text", void 0);
    return MarkdownRenderRequestBody;
}(SpeakeasyBase));
export { MarkdownRenderRequestBody };
var MarkdownRenderRequest = /** @class */ (function (_super) {
    __extends(MarkdownRenderRequest, _super);
    function MarkdownRenderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MarkdownRenderRequestBody)
    ], MarkdownRenderRequest.prototype, "request", void 0);
    return MarkdownRenderRequest;
}(SpeakeasyBase));
export { MarkdownRenderRequest };
var MarkdownRenderResponse = /** @class */ (function (_super) {
    __extends(MarkdownRenderResponse, _super);
    function MarkdownRenderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MarkdownRenderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], MarkdownRenderResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MarkdownRenderResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MarkdownRenderResponse.prototype, "markdownRender200TextHtmlString", void 0);
    return MarkdownRenderResponse;
}(SpeakeasyBase));
export { MarkdownRenderResponse };
