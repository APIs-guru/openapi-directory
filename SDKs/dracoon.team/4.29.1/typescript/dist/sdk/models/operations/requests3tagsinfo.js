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
var RequestS3TagsInfoHeaders = /** @class */ (function (_super) {
    __extends(RequestS3TagsInfoHeaders, _super);
    function RequestS3TagsInfoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestS3TagsInfoHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestS3TagsInfoHeaders;
}(SpeakeasyBase));
export { RequestS3TagsInfoHeaders };
var RequestS3TagsInfoRequest = /** @class */ (function (_super) {
    __extends(RequestS3TagsInfoRequest, _super);
    function RequestS3TagsInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestS3TagsInfoHeaders)
    ], RequestS3TagsInfoRequest.prototype, "headers", void 0);
    return RequestS3TagsInfoRequest;
}(SpeakeasyBase));
export { RequestS3TagsInfoRequest };
var RequestS3TagsInfoResponse = /** @class */ (function (_super) {
    __extends(RequestS3TagsInfoResponse, _super);
    function RequestS3TagsInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestS3TagsInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestS3TagsInfoResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.S3TagList)
    ], RequestS3TagsInfoResponse.prototype, "s3TagList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestS3TagsInfoResponse.prototype, "statusCode", void 0);
    return RequestS3TagsInfoResponse;
}(SpeakeasyBase));
export { RequestS3TagsInfoResponse };
