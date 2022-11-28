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
var DeleteLiveStreamsLiveStreamIdThumbnailPathParams = /** @class */ (function (_super) {
    __extends(DeleteLiveStreamsLiveStreamIdThumbnailPathParams, _super);
    function DeleteLiveStreamsLiveStreamIdThumbnailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" }),
        __metadata("design:type", String)
    ], DeleteLiveStreamsLiveStreamIdThumbnailPathParams.prototype, "liveStreamId", void 0);
    return DeleteLiveStreamsLiveStreamIdThumbnailPathParams;
}(SpeakeasyBase));
export { DeleteLiveStreamsLiveStreamIdThumbnailPathParams };
var DeleteLiveStreamsLiveStreamIdThumbnailSecurity = /** @class */ (function (_super) {
    __extends(DeleteLiveStreamsLiveStreamIdThumbnailSecurity, _super);
    function DeleteLiveStreamsLiveStreamIdThumbnailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], DeleteLiveStreamsLiveStreamIdThumbnailSecurity.prototype, "bearerAuth", void 0);
    return DeleteLiveStreamsLiveStreamIdThumbnailSecurity;
}(SpeakeasyBase));
export { DeleteLiveStreamsLiveStreamIdThumbnailSecurity };
var DeleteLiveStreamsLiveStreamIdThumbnailRequest = /** @class */ (function (_super) {
    __extends(DeleteLiveStreamsLiveStreamIdThumbnailRequest, _super);
    function DeleteLiveStreamsLiveStreamIdThumbnailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteLiveStreamsLiveStreamIdThumbnailPathParams)
    ], DeleteLiveStreamsLiveStreamIdThumbnailRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteLiveStreamsLiveStreamIdThumbnailSecurity)
    ], DeleteLiveStreamsLiveStreamIdThumbnailRequest.prototype, "security", void 0);
    return DeleteLiveStreamsLiveStreamIdThumbnailRequest;
}(SpeakeasyBase));
export { DeleteLiveStreamsLiveStreamIdThumbnailRequest };
var DeleteLiveStreamsLiveStreamIdThumbnailResponse = /** @class */ (function (_super) {
    __extends(DeleteLiveStreamsLiveStreamIdThumbnailResponse, _super);
    function DeleteLiveStreamsLiveStreamIdThumbnailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteLiveStreamsLiveStreamIdThumbnailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteLiveStreamsLiveStreamIdThumbnailResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveStream)
    ], DeleteLiveStreamsLiveStreamIdThumbnailResponse.prototype, "liveStream", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NotFound)
    ], DeleteLiveStreamsLiveStreamIdThumbnailResponse.prototype, "notFound", void 0);
    return DeleteLiveStreamsLiveStreamIdThumbnailResponse;
}(SpeakeasyBase));
export { DeleteLiveStreamsLiveStreamIdThumbnailResponse };
