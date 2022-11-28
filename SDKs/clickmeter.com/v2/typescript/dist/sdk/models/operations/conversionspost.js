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
var ConversionsPostPathParams = /** @class */ (function (_super) {
    __extends(ConversionsPostPathParams, _super);
    function ConversionsPostPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversionId" }),
        __metadata("design:type", Number)
    ], ConversionsPostPathParams.prototype, "conversionId", void 0);
    return ConversionsPostPathParams;
}(SpeakeasyBase));
export { ConversionsPostPathParams };
var ConversionsPostRequests = /** @class */ (function (_super) {
    __extends(ConversionsPostRequests, _super);
    function ConversionsPostRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiCoreDtoConversionsConversion)
    ], ConversionsPostRequests.prototype, "apiCoreDtoConversionsConversion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ApiCoreDtoConversionsConversion)
    ], ConversionsPostRequests.prototype, "apiCoreDtoConversionsConversion1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApiCoreDtoConversionsConversion)
    ], ConversionsPostRequests.prototype, "apiCoreDtoConversionsConversion2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ConversionsPostRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ConversionsPostRequests.prototype, "textXml", void 0);
    return ConversionsPostRequests;
}(SpeakeasyBase));
export { ConversionsPostRequests };
var ConversionsPostRequest = /** @class */ (function (_super) {
    __extends(ConversionsPostRequest, _super);
    function ConversionsPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsPostPathParams)
    ], ConversionsPostRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConversionsPostRequests)
    ], ConversionsPostRequest.prototype, "request", void 0);
    return ConversionsPostRequest;
}(SpeakeasyBase));
export { ConversionsPostRequest };
var ConversionsPostResponse = /** @class */ (function (_super) {
    __extends(ConversionsPostResponse, _super);
    function ConversionsPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntityUriSystemInt64)
    ], ConversionsPostResponse.prototype, "apiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ConversionsPostResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConversionsPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConversionsPostResponse.prototype, "statusCode", void 0);
    return ConversionsPostResponse;
}(SpeakeasyBase));
export { ConversionsPostResponse };
