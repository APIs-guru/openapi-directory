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
var PostLiveStreamsSecurity = /** @class */ (function (_super) {
    __extends(PostLiveStreamsSecurity, _super);
    function PostLiveStreamsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], PostLiveStreamsSecurity.prototype, "bearerAuth", void 0);
    return PostLiveStreamsSecurity;
}(SpeakeasyBase));
export { PostLiveStreamsSecurity };
var PostLiveStreamsRequest = /** @class */ (function (_super) {
    __extends(PostLiveStreamsRequest, _super);
    function PostLiveStreamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LiveStreamCreatePayload)
    ], PostLiveStreamsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLiveStreamsSecurity)
    ], PostLiveStreamsRequest.prototype, "security", void 0);
    return PostLiveStreamsRequest;
}(SpeakeasyBase));
export { PostLiveStreamsRequest };
var PostLiveStreamsResponse = /** @class */ (function (_super) {
    __extends(PostLiveStreamsResponse, _super);
    function PostLiveStreamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLiveStreamsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLiveStreamsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BadRequest)
    ], PostLiveStreamsResponse.prototype, "badRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveStream)
    ], PostLiveStreamsResponse.prototype, "liveStream", void 0);
    return PostLiveStreamsResponse;
}(SpeakeasyBase));
export { PostLiveStreamsResponse };
