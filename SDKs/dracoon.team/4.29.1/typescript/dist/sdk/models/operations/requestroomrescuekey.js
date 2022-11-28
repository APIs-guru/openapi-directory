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
var RequestRoomRescueKeyPathParams = /** @class */ (function (_super) {
    __extends(RequestRoomRescueKeyPathParams, _super);
    function RequestRoomRescueKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" }),
        __metadata("design:type", Number)
    ], RequestRoomRescueKeyPathParams.prototype, "fileId", void 0);
    return RequestRoomRescueKeyPathParams;
}(SpeakeasyBase));
export { RequestRoomRescueKeyPathParams };
var RequestRoomRescueKeyQueryParams = /** @class */ (function (_super) {
    __extends(RequestRoomRescueKeyQueryParams, _super);
    function RequestRoomRescueKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], RequestRoomRescueKeyQueryParams.prototype, "version", void 0);
    return RequestRoomRescueKeyQueryParams;
}(SpeakeasyBase));
export { RequestRoomRescueKeyQueryParams };
var RequestRoomRescueKeyHeaders = /** @class */ (function (_super) {
    __extends(RequestRoomRescueKeyHeaders, _super);
    function RequestRoomRescueKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestRoomRescueKeyHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestRoomRescueKeyHeaders;
}(SpeakeasyBase));
export { RequestRoomRescueKeyHeaders };
var RequestRoomRescueKeyRequest = /** @class */ (function (_super) {
    __extends(RequestRoomRescueKeyRequest, _super);
    function RequestRoomRescueKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomRescueKeyPathParams)
    ], RequestRoomRescueKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomRescueKeyQueryParams)
    ], RequestRoomRescueKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestRoomRescueKeyHeaders)
    ], RequestRoomRescueKeyRequest.prototype, "headers", void 0);
    return RequestRoomRescueKeyRequest;
}(SpeakeasyBase));
export { RequestRoomRescueKeyRequest };
var RequestRoomRescueKeyResponse = /** @class */ (function (_super) {
    __extends(RequestRoomRescueKeyResponse, _super);
    function RequestRoomRescueKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestRoomRescueKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestRoomRescueKeyResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileKey)
    ], RequestRoomRescueKeyResponse.prototype, "fileKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestRoomRescueKeyResponse.prototype, "statusCode", void 0);
    return RequestRoomRescueKeyResponse;
}(SpeakeasyBase));
export { RequestRoomRescueKeyResponse };
