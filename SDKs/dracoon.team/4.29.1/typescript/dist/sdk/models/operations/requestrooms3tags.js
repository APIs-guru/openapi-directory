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
var RequestRoomS3TagsPathParams = /** @class */ (function (_super) {
    __extends(RequestRoomS3TagsPathParams, _super);
    function RequestRoomS3TagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" }),
        __metadata("design:type", Number)
    ], RequestRoomS3TagsPathParams.prototype, "roomId", void 0);
    return RequestRoomS3TagsPathParams;
}(SpeakeasyBase));
export { RequestRoomS3TagsPathParams };
var RequestRoomS3TagsHeaders = /** @class */ (function (_super) {
    __extends(RequestRoomS3TagsHeaders, _super);
    function RequestRoomS3TagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestRoomS3TagsHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestRoomS3TagsHeaders;
}(SpeakeasyBase));
export { RequestRoomS3TagsHeaders };
var RequestRoomS3TagsRequest = /** @class */ (function (_super) {
    __extends(RequestRoomS3TagsRequest, _super);
    function RequestRoomS3TagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomS3TagsPathParams)
    ], RequestRoomS3TagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomS3TagsHeaders)
    ], RequestRoomS3TagsRequest.prototype, "headers", void 0);
    return RequestRoomS3TagsRequest;
}(SpeakeasyBase));
export { RequestRoomS3TagsRequest };
var RequestRoomS3TagsResponse = /** @class */ (function (_super) {
    __extends(RequestRoomS3TagsResponse, _super);
    function RequestRoomS3TagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestRoomS3TagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestRoomS3TagsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.S3TagList)
    ], RequestRoomS3TagsResponse.prototype, "s3TagList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestRoomS3TagsResponse.prototype, "statusCode", void 0);
    return RequestRoomS3TagsResponse;
}(SpeakeasyBase));
export { RequestRoomS3TagsResponse };
